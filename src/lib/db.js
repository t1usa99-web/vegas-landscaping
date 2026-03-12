/**
 * db.js — Simple JSON file database for leads.
 * No external dependencies — uses Node.js built-in fs module.
 * Data is stored at: data/leads.json (relative to project root)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { randomBytes, createHmac } from 'crypto';

// ── File paths ─────────────────────────────────────────────────────────────
// Resolve relative to project root (two levels up from src/lib/)
const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..', '..');
const DB_DIR  = join(PROJECT_ROOT, 'data');
const DB_FILE = join(DB_DIR, 'leads.json');

// ── Internal helpers ────────────────────────────────────────────────────────
function readDB() {
  if (!existsSync(DB_FILE)) {
    mkdirSync(DB_DIR, { recursive: true });
    writeFileSync(DB_FILE, JSON.stringify({ leads: [] }, null, 2));
  }
  try {
    return JSON.parse(readFileSync(DB_FILE, 'utf8'));
  } catch {
    return { leads: [] };
  }
}

function writeDB(data) {
  mkdirSync(DB_DIR, { recursive: true });
  writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// ── Lead CRUD ───────────────────────────────────────────────────────────────

/**
 * Insert a new lead.
 * @param {object} lead
 * @returns {object} the saved lead with id and created_at
 */
export function insertLead(lead) {
  const db = readDB();
  const newLead = {
    id:           randomBytes(8).toString('hex'),
    created_at:   new Date().toISOString(),
    first_name:   lead.first_name   || '',
    last_name:    lead.last_name    || '',
    phone:        lead.phone        || '',
    email:        lead.email        || '',
    city:         lead.city         || '',
    service:      lead.service      || '',
    address:      lead.address      || '',
    service_answers: lead.service_answers || '{}',  // JSON string
    customer_notes:  lead.customer_notes  || '',
    quote_json:   lead.quote_json   || '{}',        // full Claude response JSON string
    status:       'new',
    admin_notes:  '',
  };
  db.leads.unshift(newLead); // newest first
  writeDB(db);
  return newLead;
}

/**
 * Get all leads, newest first.
 */
export function getAllLeads() {
  const db = readDB();
  return db.leads || [];
}

/**
 * Get a single lead by id.
 */
export function getLeadById(id) {
  const db = readDB();
  return (db.leads || []).find(l => l.id === id) || null;
}

/**
 * Update status and/or admin_notes for a lead.
 */
export function updateLead(id, updates) {
  const db = readDB();
  const idx = (db.leads || []).findIndex(l => l.id === id);
  if (idx === -1) return null;
  const allowed = ['status', 'admin_notes'];
  allowed.forEach(key => {
    if (updates[key] !== undefined) db.leads[idx][key] = updates[key];
  });
  writeDB(db);
  return db.leads[idx];
}

// ── Session helpers ─────────────────────────────────────────────────────────
const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

function getSecret() {
  // import.meta.env works in Astro SSR context; fall back to process.env for production Node
  return (typeof import.meta !== 'undefined' && import.meta.env?.SESSION_SECRET)
    || process.env.SESSION_SECRET
    || 'dev-secret-change-in-production';
}

/**
 * Create a signed session token: "expires.hmac"
 */
export function createSession() {
  const expires = Date.now() + SESSION_TTL_MS;
  const hmac = createHmac('sha256', getSecret())
    .update(String(expires))
    .digest('hex');
  return `${expires}.${hmac}`;
}

/**
 * Verify a session token. Returns true if valid and not expired.
 */
export function verifySession(token) {
  if (!token || typeof token !== 'string') return false;
  const dotIdx = token.lastIndexOf('.');
  if (dotIdx === -1) return false;
  const expiresStr = token.substring(0, dotIdx);
  const hmac       = token.substring(dotIdx + 1);
  const expires    = Number(expiresStr);
  if (isNaN(expires) || Date.now() > expires) return false;
  const expected = createHmac('sha256', getSecret())
    .update(expiresStr)
    .digest('hex');
  return hmac === expected;
}

/**
 * Check if the email + password match the ADMIN_EMAIL / ADMIN_PASSWORD env vars.
 */
export function checkCredentials(email, password) {
  const correctEmail    = (typeof import.meta !== 'undefined' && import.meta.env?.ADMIN_EMAIL)
    || process.env.ADMIN_EMAIL;
  const correctPassword = (typeof import.meta !== 'undefined' && import.meta.env?.ADMIN_PASSWORD)
    || process.env.ADMIN_PASSWORD;
  if (!correctEmail || !correctPassword) return false;
  return email === correctEmail && password === correctPassword;
}
