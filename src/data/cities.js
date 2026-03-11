export const cities = [
  {
    slug: 'las-vegas',
    name: 'Las Vegas',
    state: 'NV',
    displayName: 'Las Vegas',
    localNote: 'Including the Strip corridor, Downtown, Spring Valley, and surrounding neighborhoods',
    hoaNote: 'Many Las Vegas master-planned communities have strict landscaping standards',
    climate: 'Mojave Desert — avg 4" annual rainfall, summers 105–115°F',
    nearbyAreas: ['henderson', 'summerlin', 'north-las-vegas', 'green-valley']
  },
  {
    slug: 'henderson',
    name: 'Henderson',
    state: 'NV',
    displayName: 'Henderson',
    localNote: 'Including Green Valley, Anthem, Seven Hills, and MacDonald Ranch communities',
    hoaNote: 'Henderson and Green Valley HOAs are known for detailed landscaping requirements',
    climate: 'Hot desert — slightly cooler evenings than central Las Vegas',
    nearbyAreas: ['las-vegas', 'green-valley', 'boulder-city', 'anthem']
  },
  {
    slug: 'summerlin',
    name: 'Summerlin',
    state: 'NV',
    displayName: 'Summerlin',
    localNote: 'Including The Ridges, Red Rock Country Club, Tournament Hills, and all village communities',
    hoaNote: 'Summerlin HOAs have among the strictest landscaping approval processes in Nevada',
    climate: 'Elevated desert — Red Rock proximity brings slightly more wind',
    nearbyAreas: ['las-vegas', 'north-las-vegas', 'enterprise', 'spring-valley']
  },
  {
    slug: 'north-las-vegas',
    name: 'North Las Vegas',
    state: 'NV',
    displayName: 'North Las Vegas',
    localNote: 'Including Aliante, Eldorado, and the rapidly growing northern corridor',
    hoaNote: 'Mix of HOA and non-HOA properties — newer communities have modern landscape standards',
    climate: 'Hot desert — slightly more extreme summer heat than central valley',
    nearbyAreas: ['las-vegas', 'summerlin', 'centennial-hills', 'aliante']
  },
  {
    slug: 'green-valley',
    name: 'Green Valley',
    state: 'NV',
    displayName: 'Green Valley',
    localNote: 'Including Green Valley Ranch, Green Valley South, and Legacy Golf Club area',
    hoaNote: 'Green Valley master-planned community has established landscape design guidelines',
    climate: 'Southeast Henderson micro-climate — slightly cooler with mountain proximity',
    nearbyAreas: ['henderson', 'las-vegas', 'anthem', 'boulder-city']
  },
  {
    slug: 'boulder-city',
    name: 'Boulder City',
    state: 'NV',
    displayName: 'Boulder City',
    localNote: 'Historic community near Lake Mead — unique zoning and landscaping considerations',
    hoaNote: 'Boulder City has special municipal landscaping codes distinct from Clark County',
    climate: 'Desert with slightly more moisture from Lake Mead proximity',
    nearbyAreas: ['henderson', 'green-valley', 'las-vegas', 'laughlin']
  },
  {
    slug: 'anthem',
    name: 'Anthem',
    state: 'NV',
    displayName: 'Anthem',
    localNote: 'Including Anthem Country Club, Anthem Highlands, and Covington Cross communities',
    hoaNote: 'Anthem HOA is one of the most active in the valley with quarterly landscape inspections',
    climate: 'Elevated desert foothills — slightly cooler with views of the Las Vegas Valley',
    nearbyAreas: ['henderson', 'green-valley', 'seven-hills', 'boulder-city']
  },
  {
    slug: 'spring-valley',
    name: 'Spring Valley',
    state: 'NV',
    displayName: 'Spring Valley',
    localNote: 'Unincorporated Clark County community west of the Strip — diverse mix of properties',
    hoaNote: 'Mix of HOA communities and non-restricted properties throughout the area',
    climate: 'Central Las Vegas Valley — full Mojave Desert exposure',
    nearbyAreas: ['las-vegas', 'summerlin', 'enterprise', 'paradise']
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    state: 'NV',
    displayName: 'Enterprise',
    localNote: 'Including Southern Highlands, Rhodes Ranch, and Silverado Ranch communities',
    hoaNote: 'Southern Highlands HOA has premium landscape standards matching its luxury home prices',
    climate: 'South Las Vegas Valley — slightly elevated with cooler temperatures than downtown',
    nearbyAreas: ['las-vegas', 'henderson', 'spring-valley', 'southern-highlands']
  },
  {
    slug: 'paradise',
    name: 'Paradise',
    state: 'NV',
    displayName: 'Paradise',
    localNote: 'Unincorporated area including the Las Vegas Strip, UNLV area, and East Las Vegas',
    hoaNote: 'Varied HOA requirements — many older neighborhoods without HOA restrictions',
    climate: 'Urban heat island effect — among the hottest micro-climates in the valley',
    nearbyAreas: ['las-vegas', 'henderson', 'spring-valley', 'whitney']
  },
  {
    slug: 'centennial-hills',
    name: 'Centennial Hills',
    state: 'NV',
    displayName: 'Centennial Hills',
    localNote: 'Fast-growing northwest community with newer master-planned neighborhoods',
    hoaNote: 'Newer HOA communities with modern xeriscape-friendly landscaping requirements',
    climate: 'Northwest valley — elevated with slightly lower humidity than central Las Vegas',
    nearbyAreas: ['north-las-vegas', 'summerlin', 'las-vegas', 'aliante']
  },
  {
    slug: 'seven-hills',
    name: 'Seven Hills',
    state: 'NV',
    displayName: 'Seven Hills',
    localNote: 'Premier Henderson community with luxury homes and spectacular valley views',
    hoaNote: 'Seven Hills HOA enforces strict landscape maintenance and design approval',
    climate: 'Elevated Henderson foothills — excellent for heat-tolerant desert landscapes',
    nearbyAreas: ['henderson', 'anthem', 'green-valley', 'boulder-city']
  },
  {
    slug: 'southern-highlands',
    name: 'Southern Highlands',
    state: 'NV',
    displayName: 'Southern Highlands',
    localNote: 'Gated luxury community in the southwest valley with golf course and custom homes',
    hoaNote: 'Southern Highlands HOA requires pre-approval for all landscape modifications',
    climate: 'Southwest elevated — cooler microclimate with mountain backdrop',
    nearbyAreas: ['enterprise', 'henderson', 'las-vegas', 'spring-valley']
  },
  {
    slug: 'whitney',
    name: 'Whitney',
    state: 'NV',
    displayName: 'Whitney',
    localNote: 'East Las Vegas unincorporated community — growing residential area near I-515',
    hoaNote: 'Mix of HOA and non-HOA properties — flexible landscape options in many areas',
    climate: 'East valley desert — full sun exposure with minimal shade relief',
    nearbyAreas: ['henderson', 'paradise', 'las-vegas', 'green-valley']
  },
  {
    slug: 'laughlin',
    name: 'Laughlin',
    state: 'NV',
    displayName: 'Laughlin',
    localNote: 'Colorado River community — unique riverfront and desert landscape blend',
    hoaNote: 'Laughlin has its own municipal codes distinct from Clark County metro standards',
    climate: 'Extreme desert heat — one of the hottest micro-climates in Nevada, 120°F+ peaks',
    nearbyAreas: ['boulder-city', 'henderson', 'las-vegas', 'kingman']
  },
  {
    slug: 'pahrump',
    name: 'Pahrump',
    state: 'NV',
    displayName: 'Pahrump',
    localNote: 'Rural Nye County community — large lots, agricultural properties, and custom homes',
    hoaNote: 'Limited HOA restrictions — most Pahrump properties allow flexible landscaping',
    climate: 'High desert valley — cooler than Las Vegas with more annual rainfall',
    nearbyAreas: ['las-vegas', 'boulder-city', 'spring-valley', 'enterprise']
  }
];

export function getCity(slug) {
  return cities.find(c => c.slug === slug);
}

export function getNearbyCities(citySlug) {
  const city = getCity(citySlug);
  if (!city) return [];
  return city.nearbyAreas
    .map(slug => getCity(slug))
    .filter(Boolean)
    .slice(0, 6);
}
