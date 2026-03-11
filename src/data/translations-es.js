// Spanish translations for all services, cities, and UI strings

export const ui = {
  nav: {
    home: 'Inicio',
    areas: 'Áreas de Servicio',
    calculator: '💧 Calculadora de Rebaja',
    call: 'Llamar',
  },
  header: {
    tagline: 'Con Licencia • Asegurado',
    langSwitch: 'English',
  },
  cta: {
    freeEstimate: 'Obtener Presupuesto Gratis',
    callNow: 'Llamar Ahora',
    getQuote: 'Solicitar Cotización',
    learnMore: 'Ver Más',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    tagline: 'Especialistas en jardines desérticos sirviendo el Valle de Las Vegas.',
  },
  estimate: {
    title: 'Obtén Tu Presupuesto Instantáneo con IA',
    subtitle: 'Completa el formulario y nuestra IA genera un presupuesto detallado en segundos.',
    step1: 'Tus Servicios',
    step2: 'Tu Propiedad',
    step3: 'Tu Contacto',
    generating: 'Generando tu presupuesto…',
    yourEstimate: 'Tu Presupuesto',
    totalRange: 'Rango Total Estimado',
    timeline: 'Duración del Proyecto',
    nextSteps: 'Próximos Pasos',
    disclaimer: 'Aviso',
    localNotes: 'Notas Locales',
  },
};

export const serviceTranslations = {
  'xeriscape': {
    slugEs: 'xeriscape',
    nameEs: 'Diseño e Instalación de Xeriscape',
    shortNameEs: 'Xeriscape',
    categoryEs: 'Jardín Desértico y Ahorro de Agua',
    metaDescEs: 'Xeriscape profesional en Las Vegas. Diseños compatibles con AB356 usando plantas nativas, grava decorativa y riego por goteo. ¡Ahorra hasta 55 galones por pie cuadrado al año!',
    heroDescEs: 'Transforma tu jardín con un xeriscape hermoso y eficiente en agua, perfecto para el clima desértico de Las Vegas. Nuestros diseños cumplen con la Ley AB356 de Nevada, reducen tu factura de agua y lucen hermosos todo el año.',
    questionsEs: [
      { q: '¿Qué tan grande es el área del proyecto?', options: ['Menos de 46 m²', '46–139 m²', '139–279 m²', 'Más de 279 m²'] },
      { q: '¿Cuál es el estado actual del jardín?', options: ['Tierra vacía / construcción nueva', 'Césped existente a remover', 'Paisajismo parcial', 'Muy descuidado / lleno de maleza'] },
      { q: '¿Tienes requisitos de HOA?', options: ['Sí — reglas estrictas de xeriscape', 'Sí — algunas restricciones', 'Sin HOA', 'No estoy seguro/a'] },
      { q: '¿Cuál es tu objetivo de riego?', options: ['Sin riego (100% tolerante a la sequía)', 'Solo riego por goteo', 'Poco riego con algunos aspersores', 'Todavía no lo sé'] },
    ],
    whyUsEs: [
      { icon: '💧', title: 'Expertos en AB356', desc: 'Conocemos la ley de restricción de pasto decorativo de Nevada — todos nuestros diseños cumplen al 100%.' },
      { icon: '🌿', title: 'Plantas Nativas del Desierto', desc: 'Usamos plantas del desierto Mojave que sobreviven veranos de 45°C con mínimo riego.' },
      { icon: '📐', title: 'Diseño Personalizado Incluido', desc: 'Cada proyecto comienza con un plan de diseño gratuito adaptado a tu propiedad.' },
      { icon: '💰', title: 'Ayuda con la Rebaja SNWA', desc: 'Te ayudamos a solicitar las rebajas del Distrito de Agua del Sur de Nevada (SNWA) por remoción de pasto.' },
    ],
    processEs: [
      { title: 'Evaluación Gratuita del Terreno', desc: 'Evaluamos el suelo, la exposición solar, las reglas del HOA y el medidor de agua para diseñar el xeriscape perfecto.' },
      { title: 'Diseño y Materiales Personalizados', desc: 'Creamos un plan completo con selección de plantas, grava decorativa, piedras y sistema de riego.' },
      { title: 'Instalación Profesional', desc: 'Nuestro equipo maneja demolición, nivelación, riego, plantación y limpieza final — todo en un solo proyecto.' },
    ],
    startingPriceEs: 'Desde $3,500',
  },

  'patio-installation': {
    slugEs: 'instalacion-patio',
    nameEs: 'Instalación de Patio',
    shortNameEs: 'Patio',
    categoryEs: 'Construcción y Pavimentación',
    metaDescEs: 'Instalación de patios personalizados en Las Vegas con adoquines, piedra natural y concreto estampado. Construidos para el calor del desierto y los estándares de HOA en Henderson, Summerlin y todo el valle.',
    heroDescEs: 'Crea el espacio exterior que siempre has querido con un patio personalizado diseñado para vivir en el desierto. Instalamos adoquines, piedra natural, travertino y concreto estampado — todo diseñado para resistir los veranos de Las Vegas.',
    questionsEs: [
      { q: '¿Qué tamaño de patio planeas?', options: ['Menos de 19 m² (pequeño)', '19–37 m² (mediano)', '37–74 m² (grande)', 'Más de 74 m² (estilo resort)'] },
      { q: '¿Qué material prefieres?', options: ['Adoquines de concreto', 'Piedra natural / travertino', 'Concreto estampado', 'No sé — necesito orientación'] },
      { q: '¿El patio tendrá techo?', options: ['Abierto / sin cubierta', 'Toldo o pérgola', 'Cubierta sólida', 'Todavía no lo sé'] },
      { q: '¿Características adicionales?', options: ['Fogón o chimenea', 'Banca o muro decorativo', 'Área de cocina exterior', 'Solo el patio'] },
    ],
    whyUsEs: [
      { icon: '☀️', title: 'Materiales Grado Desierto', desc: 'Usamos adoquines y piedra clasificados para calor extremo — sin grietas ni decoloración en los veranos de Las Vegas.' },
      { icon: '📏', title: 'Nivelación de Precisión', desc: 'El drenaje correcto es crítico en el desierto. Cada patio se nivela para prevenir inundaciones y erosión.' },
      { icon: '🏅', title: 'Con Licencia y Asegurado', desc: 'Todo el trabajo estructural tiene permiso e inspección para proteger el valor de tu hogar.' },
      { icon: '🎨', title: 'Consulta de Diseño', desc: 'Renderizado 3D gratuito antes de iniciar para que veas exactamente qué obtendrás.' },
    ],
    processEs: [
      { title: 'Diseño y Planificación', desc: 'Medimos tu espacio, revisamos las pautas del HOA y creamos un diseño con muestras de materiales para tu aprobación.' },
      { title: 'Preparación y Base', desc: 'Excavación adecuada, base compactada y cama de arena — la base que hace que los patios duren 30+ años.' },
      { title: 'Instalación y Acabado', desc: 'Colocación profesional de adoquines o piedra, arena de juntas, sellado y recorrido final para garantizar tu satisfacción.' },
    ],
    startingPriceEs: 'Desde $4,500',
  },

  'artificial-turf': {
    slugEs: 'cesped-artificial',
    nameEs: 'Instalación de Césped Artificial',
    shortNameEs: 'Césped Artificial',
    categoryEs: 'Jardín Desértico y Ahorro de Agua',
    metaDescEs: 'Instalación de césped artificial premium en Las Vegas. Opciones aptas para mascotas y aprobadas por HOA que lucen reales y ahorran miles en facturas de agua cada año.',
    heroDescEs: 'Obtén el jardín verde y exuberante que deseas sin las facturas de agua. Nuestro césped artificial premium luce y se siente como pasto real, califica para las rebajas SNWA y cumple 100% con la Ley AB356 de Nevada.',
    questionsEs: [
      { q: '¿Cuál es el tamaño del área de instalación?', options: ['Menos de 19 m²', '19–46 m²', '46–139 m²', 'Más de 139 m²'] },
      { q: '¿Cuál es el uso principal?', options: ['Jardín delantero / imagen de la casa', 'Jardín trasero / entretenimiento', 'Área para mascotas', 'Área de juegos para niños'] },
      { q: '¿Qué se necesita remover primero?', options: ['Pasto natural', 'Césped artificial viejo', 'Tierra / grava', 'Nada que remover'] },
      { q: '¿Estado de aprobación del HOA?', options: ['Ya aprobado por HOA', 'Aprobación HOA pendiente', 'Sin HOA', 'No sé'] },
    ],
    whyUsEs: [
      { icon: '🐾', title: 'Opciones Aptas para Mascotas', desc: 'Césped antimicrobiano y permeable diseñado para perros — drena rápido y resiste olores.' },
      { icon: '🌡️', title: 'Resistente al Calor', desc: 'Usamos césped diseñado para climas desérticos — más fresco al tacto y estable a los UV por 15+ años.' },
      { icon: '💵', title: 'Listo para Rebaja SNWA', desc: 'Manejamos el papeleo para las rebajas de reemplazo de césped del Distrito de Agua del Sur de Nevada.' },
      { icon: '✅', title: 'Documentación para HOA', desc: 'Proporcionamos paquetes completos de aprobación HOA incluyendo especificaciones de productos y fotos.' },
    ],
    processEs: [
      { title: 'Medición y Cotización', desc: 'Medición gratuita en sitio con muestras de material para que elijas el tipo de césped adecuado.' },
      { title: 'Demolición y Preparación', desc: 'Removemos el material existente, instalamos barrera de maleza, base de grava compactada y drenaje adecuado.' },
      { title: 'Instalación y Acabado', desc: 'Costura de precisión, bordes fijados, relleno de caucho o arena y acabado cepillado.' },
    ],
    startingPriceEs: 'Desde $8/pie cuadrado',
  },

  'drip-irrigation': {
    slugEs: 'riego-por-goteo',
    nameEs: 'Sistemas de Riego por Goteo',
    shortNameEs: 'Riego por Goteo',
    categoryEs: 'Irrigación',
    metaDescEs: 'Instalación y reparación profesional de riego por goteo en Las Vegas. Sistemas eficientes en agua con controles inteligentes — preferidos por SNWA para el paisajismo desértico.',
    heroDescEs: 'El riego por goteo es la opción inteligente para los jardines de Las Vegas. Nuestros sistemas llevan el agua directamente a las raíces de las plantas — reduciendo el desperdicio hasta en un 70% comparado con los aspersores y manteniendo tus plantas sanas durante el brutal verano del desierto.',
    questionsEs: [
      { q: '¿Qué tipo de proyecto es?', options: ['Sistema completamente nuevo', 'Reparación / reemplazo existente', 'Expandir sistema actual', 'Convertir aspersores a goteo'] },
      { q: '¿Cuál es el área de cobertura?', options: ['Menos de 185 m²', '185–465 m²', '465–930 m²', 'Más de 930 m²'] },
      { q: '¿Cuántas zonas de riego?', options: ['1–2 zonas', '3–5 zonas', '6–10 zonas', 'No sé'] },
      { q: '¿Preferencia de controlador?', options: ['Inteligente / Wi-Fi', 'Temporizador programable básico', 'Actualizar controlador existente', 'No sé'] },
    ],
    whyUsEs: [
      { icon: '📡', title: 'Expertos en Control Inteligente', desc: 'Controladores inteligentes Rain Bird y Hunter que se ajustan automáticamente al clima — configura y olvida.' },
      { icon: '🔧', title: 'Reparaciones el Mismo Día', desc: '¿Línea rota o válvula fallida? Ofrecemos reparación de emergencia el mismo día para sistemas existentes.' },
      { icon: '💧', title: 'Método Preferido por SNWA', desc: 'El riego por goteo es el método de riego preferido para el cumplimiento de la Autoridad de Agua del Sur de Nevada.' },
      { icon: '🌱', title: 'Integración con Xeriscape', desc: 'Diseñamos el riego para que coincida perfectamente con tu distribución de plantas — sin exceso ni falta de agua.' },
    ],
    processEs: [
      { title: 'Diseño del Sistema', desc: 'Mapeamos tu distribución de plantas y tipo de suelo para diseñar la colocación óptima de emisores y configuración de zonas.' },
      { title: 'Instalación', desc: 'Zanjeado limpio, líneas probadas a presión, emisores correctamente clasificados para cada especie de planta.' },
      { title: 'Programación y Prueba', desc: 'Programación completa del controlador con horarios estacionales y recorrido para que entiendas cada zona.' },
    ],
    startingPriceEs: 'Desde $1,200',
  },

  'palm-tree-services': {
    slugEs: 'palmeras',
    nameEs: 'Instalación y Poda de Palmeras',
    shortNameEs: 'Palmeras',
    categoryEs: 'Árboles y Plantas',
    metaDescEs: 'Instalación y poda profesional de palmeras en Las Vegas. Palmeras Reina, Palmeras Abanico Mexicana, Palmeras Datileras — plantadas y mantenidas correctamente para el clima desértico.',
    heroDescEs: 'Las palmeras son el símbolo del paisajismo de Las Vegas. Ya sea que estés añadiendo palmeras icónicas a tu propiedad o necesites poda profesional para mantenerlas seguras y atractivas, nuestros arboristas certificados manejan cada variedad cultivada en el valle.',
    questionsEs: [
      { q: '¿Qué servicio necesitas?', options: ['Nueva instalación de palmeras', 'Poda de palmeras existentes', 'Instalación y poda', 'Remoción de palmeras'] },
      { q: '¿Cuántos árboles?', options: ['1 árbol', '2–3 árboles', '4–6 árboles', '7 o más'] },
      { q: '¿Qué tipo de palmera?', options: ['Palmera Reina (crecimiento rápido)', 'Palmera Abanico Mexicana (alta / clásica)', 'Palmera Datilera (premium)', 'No sé — necesito recomendación'] },
      { q: '¿Altura de los árboles existentes (para poda)?', options: ['Menos de 4.5 m', '4.5–9 m', 'Más de 9 m', 'N/A — instalación nueva'] },
    ],
    whyUsEs: [
      { icon: '🪜', title: 'Equipados con Elevador Aéreo', desc: 'Tenemos nuestro propio equipo — sin subcontratistas, sin demoras para poda de palmeras altas hasta 18 m.' },
      { icon: '🌴', title: 'Todas las Variedades', desc: 'Reina, Abanico Mexicana, Datilera, Canarias, Molino — instalamos y mantenemos todas.' },
      { icon: '⚡', title: 'Seguridad en Tormentas e Incendios', desc: 'Las palmas secas son peligro de incendio en el desierto. Podamos bajo los estándares de seguridad contra incendios.' },
      { icon: '🌱', title: 'Profundidad de Plantación Correcta', desc: 'Las palmeras plantadas muy profundo mueren en 2 años. Nuestra instalación sigue las especificaciones exactas del desierto.' },
    ],
    processEs: [
      { title: 'Evaluación y Cotización', desc: 'Evaluamos la salud del árbol, altura, variedad y acceso para darte una cotización completa y precisa.' },
      { title: 'Día de Servicio', desc: 'Equipo completo con elevador aéreo, trituradoras y equipo de limpieza — terminamos el mismo día en la mayoría de los trabajos.' },
      { title: 'Remoción de Escombros', desc: 'Retiramos todas las palmas, vainas de semillas y material del tronco — dejando tu jardín impecable.' },
    ],
    startingPriceEs: 'Desde $150 por árbol',
  },

  'sod-installation': {
    slugEs: 'pasto-natural',
    nameEs: 'Instalación de Pasto Natural (Sod)',
    shortNameEs: 'Pasto Natural',
    categoryEs: 'Césped y Pasto',
    metaDescEs: 'Instalación profesional de pasto natural (sod) en Las Vegas. Opciones de Bermuda y Búfalo para jardines traseros donde AB356 lo permite — instalados correctamente para sobrevivir el calor del desierto.',
    heroDescEs: '¿Necesitas pasto real en tu jardín trasero de Las Vegas? Instalamos sod que realmente sobrevive el desierto — correctamente nivelado, fertilizado y con programa de riego desde el primer día. Conocemos AB356 a fondo para que tu proyecto cumpla.',
    questionsEs: [
      { q: '¿Cuál es el tamaño del área de instalación?', options: ['Menos de 46 m²', '46–139 m²', '139–279 m²', 'Más de 279 m²'] },
      { q: '¿Cuánta luz solar recibe el área?', options: ['Pleno sol (6+ hrs/día)', 'Sol parcial (3–6 hrs/día)', 'Mayormente a la sombra', 'Variable / mixto'] },
      { q: '¿Cuál es el estado actual del suelo?', options: ['Tierra vacía', 'Pasto natural a remover', 'Grava o piedras a quitar', 'Sod viejo a reemplazar'] },
      { q: '¿Ubicación (AB356 afecta jardines delanteros)?', options: ['Solo jardín trasero (permitido)', 'Jardín delantero (puede estar restringido)', 'Propiedad comercial', 'No sé — necesito orientación'] },
    ],
    whyUsEs: [
      { icon: '🌞', title: 'Variedades de Sod para el Desierto', desc: 'Conseguimos Bermuda híbrido y Búfalo tolerantes al calor, diseñados para sobrevivir veranos de 45°C.' },
      { icon: '📋', title: 'Asesoría sobre AB356', desc: 'Sabemos exactamente dónde está permitido el sod y te ayudamos a cumplir con las restricciones de pasto de Nevada.' },
      { icon: '💧', title: 'Instalación de Riego Incluida', desc: 'Cada instalación de sod incluye un programa de riego por goteo/aspersores optimizado para las restricciones de agua de Las Vegas.' },
      { icon: '🌱', title: 'Expertos en Preparación del Suelo', desc: 'El suelo caliche de Las Vegas necesita enmienda. Probamos y preparamos correctamente para que las raíces del sod arraiguen.' },
    ],
    processEs: [
      { title: 'Preparación del Terreno', desc: 'Removemos el material existente, labramos y enmendamos el suelo caliche, nivelamos para drenaje y fertilizamos la base.' },
      { title: 'Instalación del Sod', desc: 'Sod fresco entregado e instalado el mismo día — colocado ajustado, compactado e irrigado inmediatamente.' },
      { title: 'Instrucciones de Cuidado', desc: 'Te dejamos un calendario detallado de riego y corte para los primeros 30 días de establecimiento.' },
    ],
    startingPriceEs: 'Desde $1.50/pie cuadrado',
  },

  'gazebo-pergola': {
    slugEs: 'gazebo-pergola',
    nameEs: 'Construcción de Gazebo y Pérgola',
    shortNameEs: 'Gazebo y Pérgola',
    categoryEs: 'Estructuras Exteriores',
    metaDescEs: 'Construcción personalizada de gazebos y pérgolas en Las Vegas. Estructuras permitidas construidas para el calor del desierto usando aluminio, madera y vinilo — diseñadas para durar 20+ años.',
    heroDescEs: 'Una pérgola o gazebo transforma tu jardín de Las Vegas en una verdadera sala de estar al aire libre. Diseñamos y construimos estructuras permitidas usando materiales clasificados para el calor del desierto — dándote la sombra y el estilo que mereces sin el problema del HOA.',
    questionsEs: [
      { q: '¿Qué estructura buscas?', options: ['Pérgola adjunta (a la casa)', 'Pérgola independiente', 'Gazebo completo con techo sólido', 'Toldo de tensión / vela de sombra'] },
      { q: '¿Cuál es el tamaño aproximado?', options: ['Menos de 9 m² (pequeño)', '9–19 m² (mediano)', '19–37 m² (grande)', 'Más de 37 m² (estilo resort)'] },
      { q: '¿Material preferido?', options: ['Aluminio (bajo mantenimiento)', 'Madera (cedro / secoya)', 'Vinilo (resistente al clima)', 'No sé — necesito recomendación'] },
      { q: '¿Necesitas electricidad / amenidades?', options: ['Ventilador(es) de techo', 'Iluminación y tomas', 'Ventilador e iluminación', 'Solo la estructura — sin eléctrico'] },
    ],
    whyUsEs: [
      { icon: '📋', title: 'Totalmente Permitido', desc: 'Todas las estructuras tienen permiso de la ciudad — protegiendo el valor de tu hogar y tu situación con el HOA.' },
      { icon: '🌡️', title: 'Materiales Grado Desierto', desc: 'Solo usamos materiales clasificados para exposición UV y temperaturas de 45°C — sin deformación, sin decoloración.' },
      { icon: '⚡', title: 'Coordinación Eléctrica', desc: 'Coordinamos electricistas con licencia para ventiladores, iluminación y tomas exteriores como parte del proyecto.' },
      { icon: '🎨', title: 'Vista Previa en 3D', desc: 'Ve tu estructura en 3D antes de construir — ajusta tamaño, estilo y acabado hasta que sea perfecto.' },
    ],
    processEs: [
      { title: 'Diseño y Permisos', desc: 'Diseño personalizado, solicitud al HOA y permiso de la ciudad — manejamos todo el papeleo antes de comenzar.' },
      { title: 'Cimientos y Estructura', desc: 'Cimientos de concreto adecuados, estructura con código y cableado eléctrico preliminar si se necesita.' },
      { title: 'Acabados e Inspección', desc: 'Acabados finales, aprobación de inspección de la ciudad y limpieza — listo para tu primer atardecer en el desierto.' },
    ],
    startingPriceEs: 'Desde $6,500',
  },

  'yard-cleanup': {
    slugEs: 'limpieza-jardin',
    nameEs: 'Limpieza de Jardín y Remoción de Escombros',
    shortNameEs: 'Limpieza de Jardín',
    categoryEs: 'Mantenimiento',
    metaDescEs: 'Limpieza profesional de jardín y remoción de escombros en Las Vegas. Limpieza post-tormenta, estacional y preparación para renovación — servicio el mismo día disponible en todo el valle.',
    heroDescEs: 'Los jardines de Las Vegas son golpeados por tormentas de monzón, vientos Santa Ana y temporadas de descuido. Nuestros equipos de limpieza despejan los escombros rápidamente, reorganizan la grava y piedra, podan el crecimiento excesivo y dejan tu jardín impecable — frecuentemente el mismo día.',
    questionsEs: [
      { q: '¿Qué tipo de limpieza necesitas?', options: ['Limpieza estacional general', 'Remoción de escombros post-tormenta', 'Limpieza de maleza mayor', 'Preparación para renovación / demolición'] },
      { q: '¿Cuál es el tamaño de tu jardín?', options: ['Pequeño (menos de 232 m²)', 'Mediano (232–465 m²)', 'Grande (465–930 m²)', 'Acreaje / comercial'] },
      { q: '¿Con qué frecuencia necesitas el servicio?', options: ['Limpieza única', 'Mantenimiento mensual', 'Estacional (4× al año)', 'Servicio semanal'] },
      { q: '¿Qué escombros necesitan removerse?', options: ['Desechos verdes y recortes', 'Reorganización de grava y piedra', 'Árboles muertos / tocones', 'Mixto / todo'] },
    ],
    whyUsEs: [
      { icon: '⚡', title: 'Servicio el Mismo Día', desc: 'La mayoría de los trabajos de limpieza pueden programarse y completarse el mismo día o al siguiente en todo el valle.' },
      { icon: '🚛', title: 'Recolección Completa', desc: 'Traemos los camiones — todos los escombros se retiran y desechan correctamente, no se dejan en tu acera.' },
      { icon: '🌪️', title: 'Respuesta a Tormentas', desc: 'Priorizamos las llamadas de limpieza post-monzón y podemos tener un equipo listo dentro de 24 horas de una tormenta.' },
      { icon: '📅', title: 'Programas de Mantenimiento', desc: 'Programas recurrentes mensuales o estacionales con tarifas con descuento y programación prioritaria.' },
    ],
    processEs: [
      { title: 'Cotización Gratuita', desc: 'Cotización rápida en sitio o basada en fotos — te decimos exactamente cuánto costará antes de comenzar cualquier trabajo.' },
      { title: 'Despacho del Equipo', desc: 'Equipo completo con camiones, sopladores y trituradoras — trabajamos rápido y a fondo.' },
      { title: 'Recolección y Listo', desc: 'Todos los escombros cargados y removidos. Soplado final y rastrillado para que tu jardín luzca impecable.' },
    ],
    startingPriceEs: 'Desde $150',
  },
};

export const cityTranslations = {
  'las-vegas': {
    localNoteEs: 'Incluyendo el corredor del Strip, el centro, Spring Valley y vecindarios residenciales aledaños',
    hoaNoteEs: 'Muchas comunidades planeadas de Las Vegas tienen estándares estrictos de paisajismo desértico',
  },
  'henderson': {
    localNoteEs: 'Incluyendo Green Valley, Anthem, Seven Hills y MacDonald Ranch',
    hoaNoteEs: 'Henderson tiene algunos de los HOAs más activos en el valle — sabemos exactamente sus requisitos',
  },
  'summerlin': {
    localNoteEs: 'Incluyendo Summerlin Norte, Sur, y las comunidades de las aldeas a lo largo del perímetro',
    hoaNoteEs: 'Summerlin Community Association tiene requisitos estrictos de paisajismo — somos expertos certificados en sus pautas',
  },
  'north-las-vegas': {
    localNoteEs: 'Incluyendo las aldeas de Aliante, Eldorado y los vecindarios residenciales del norte',
    hoaNoteEs: 'Muchas comunidades nuevas del norte de Las Vegas tienen aún requsitos activos de conversión de césped',
  },
  'green-valley': {
    localNoteEs: 'Green Valley Ranch, Green Valley North y las comunidades cercanas de Henderson',
    hoaNoteEs: 'Las HOAs de Green Valley tienen pautas establecidas para xeriscape y césped artificial',
  },
  'boulder-city': {
    localNoteEs: 'Boulder City y las propiedades a lo largo de la cuenca del Lago Mead',
    hoaNoteEs: 'Boulder City tiene regulaciones únicas al ser una ciudad administrada — verificamos todos los requisitos locales',
  },
  'enterprise': {
    localNoteEs: 'Enterprise, South Las Vegas y las comunidades no incorporadas del suroeste del condado Clark',
    hoaNoteEs: 'Las regulaciones de Enterprise siguen los estándares del condado Clark con restricciones adicionales de algunas HOAs',
  },
  'paradise': {
    localNoteEs: 'Paradise, área del Strip y vecindarios residenciales del centro-este de Las Vegas',
    hoaNoteEs: 'Paradise es territorio no incorporado — las reglas del paisajismo varían por vecindario y HOA',
  },
  'spring-valley': {
    localNoteEs: 'Spring Valley, zona del oeste de Las Vegas y comunidades de Durango',
    hoaNoteEs: 'Spring Valley tiene una mezcla de propiedades con y sin HOA — evaluamos los requisitos de cada propiedad',
  },
  'whitney': {
    localNoteEs: 'Whitney, este de Las Vegas y comunidades cercanas al área de Boulder Highway',
    hoaNoteEs: 'Whitney es territorio no incorporado con requisitos de paisajismo del condado Clark',
  },
  'aliante': {
    localNoteEs: 'Aliante, North Las Vegas norte y las nuevas comunidades de desarrollo del condado Clark',
    hoaNoteEs: 'La HOA de Aliante es activa y tiene pautas detalladas de paisajismo desértico',
  },
  'centennial-hills': {
    localNoteEs: 'Centennial Hills, el noroeste de Las Vegas y las comunidades de Providence',
    hoaNoteEs: 'Centennial Hills tiene HOAs activos con énfasis en el paisajismo compatible con el agua',
  },
  'anthem': {
    localNoteEs: 'Anthem, Anthem Country Club y las comunidades de la zona sur de Henderson',
    hoaNoteEs: 'La Asociación de la Comunidad Anthem tiene algunas de las pautas de paisajismo más completas del valle',
  },
  'sunrise-manor': {
    localNoteEs: 'Sunrise Manor, el noreste de Las Vegas y comunidades cercanas a Nellis',
    hoaNoteEs: 'Sunrise Manor es territorio no incorporado con un mix de propiedades con y sin HOA',
  },
  'winchester': {
    localNoteEs: 'Winchester, corredor de Maryland Pkwy y vecindarios del centro de Las Vegas',
    hoaNoteEs: 'Winchester es territorio no incorporado del condado Clark con regulaciones estándar de paisajismo',
  },
  'mountains-edge': {
    localNoteEs: "Mountain's Edge, el suroeste de Las Vegas y las comunidades de desarrollo reciente",
    hoaNoteEs: "Mountain's Edge tiene HOAs bien organizados con estándares modernos de paisajismo desértico",
  },
};

// Lookup helpers
export function getServiceTranslation(englishSlug) {
  return serviceTranslations[englishSlug] || null;
}

export function getServiceBySpanishSlug(spanishSlug) {
  const entry = Object.entries(serviceTranslations).find(
    ([, v]) => v.slugEs === spanishSlug
  );
  return entry ? { englishSlug: entry[0], ...entry[1] } : null;
}

export function getCityTranslation(citySlug) {
  return cityTranslations[citySlug] || { localNoteEs: '', hoaNoteEs: '' };
}

export function getAllSpanishServiceSlugs() {
  return Object.values(serviceTranslations).map(t => t.slugEs);
}
