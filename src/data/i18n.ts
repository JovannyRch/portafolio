export const experienceEs = [
	{
		summary: 'Desarrollo de sistemas backend en producción con comportamiento en tiempo real, pagos confiables e infraestructura resiliente.',
		points: [
			'Diseñé servicios backend escalables con Laravel, priorizando confiabilidad y mantenimiento.',
			'Construí funciones en tiempo real con WebSockets y Pusher.',
			'Integré Stripe y Stripe Connect para flujos transaccionales y pagos distribuidos.',
			'Mejoré notificaciones push y procesos de despliegue en AWS EC2.',
		],
	},
	{
		summary: 'Desarrollo de aplicaciones empresariales donde la arquitectura frontend, las APIs y la calidad del equipo eran fundamentales.',
		points: [
			'Lideré aplicaciones empresariales con React y NestJS.',
			'Diseñé APIs GraphQL y REST para procesos de negocio complejos.',
			'Construí sistemas de UI reutilizables y microfrontends con Astro.',
			'Mentoré a desarrolladores junior y contribuí a elevar los estándares técnicos.',
		],
	},
	{
		summary: 'Construcción de plataformas web orientadas al producto, visualización de datos y arquitectura cloud.',
		points: [
			'Construí plataformas inmobiliarias con Next.js y React.',
			'Implementé visualizaciones de datos con D3.js.',
			'Trabajé con AWS y arquitecturas serverless para despliegues escalables.',
		],
	},
	{
		summary: 'Liderazgo de productos móviles para sector público y campañas, combinando arquitectura, velocidad y coordinación.',
		points: [
			'Lideré aplicaciones móviles con Ionic y Flutter.',
			'Definí decisiones de arquitectura para múltiples iniciativas.',
			'Guié a otros desarrolladores mientras entregábamos productos móviles.',
		],
	},
];

export const keyAchievementsEs = [
	'Construí aplicaciones móviles con más de 350K descargas',
	'Lideré el desarrollo de aplicaciones empresariales',
	'Diseñé sistemas backend escalables con funciones en tiempo real',
	'Publiqué aplicaciones en entornos de producción',
	'Coescribí un artículo de investigación publicado por INIFAP vinculado a una aplicación móvil',
	'Mentoré a desarrolladores junior',
];

export const skillTitlesEs = ['Principal', 'Arquitectura y backend', 'Otras herramientas'];

export const projectDescriptionsEs: Record<string, string> = {
	ahuacatl: 'Aplicación móvil para analizar la distribución espacial de problemas fitosanitarios en cultivos de aguacate, respaldada por una publicación de INIFAP.',
	netcurio: 'Plataforma financiera empresarial enfocada en frontend y backend escalables para procesos de negocio complejos.',
	'shopify-estafeta': 'Integración entre tiendas Shopify y flujos de envío que reduce el trabajo operativo manual.',
	'truth-tables': 'Aplicación móvil educativa que hace más rápidos y accesibles los procesos de lógica para estudiantes y usuarios técnicos.',
	'examen-manejo-edomex': 'Aplicación Android para preparar el examen de licencia del Estado de México mediante simulaciones y repaso de señales.',
	'guia-exani': 'Aplicación de estudio y seguimiento de progreso para aspirantes a los exámenes EXANI-I y EXANI-II.',
	'karnaugh-maps': 'Calculadora visual para simplificar funciones booleanas con mapas de Karnaugh de 2 a 5 variables.',
	'tacticas-rapidas-ajedrez': 'Producto móvil reciente enfocado en práctica táctica rápida y sesiones repetibles de entrenamiento de ajedrez.',
};

export const projectsEs: Record<string, Record<string, string>> = {
	'examen-manejo-edomex': {
		overview: 'Convierte la preparación para la licencia en prácticas móviles con preguntas aleatorias, cronómetro y retroalimentación.',
		problem: 'Los aspirantes necesitan una forma conveniente de practicar preguntas de tránsito y repasar señales antes del examen oficial.',
		solution: 'Construí un simulador con 15 preguntas aleatorias, respuestas en distinto orden, cronómetro de 30 minutos y resultados con retroalimentación.',
		myRole: 'Creador del producto e ingeniero móvil responsable de definición, implementación, publicación e iteración.',
		architecture: 'Producto Android organizado alrededor de sesiones repetibles, contenido aleatorio, progreso local y una experiencia ligera.',
		impact: 'Superó 1K descargas y ofrece una herramienta práctica a aspirantes del Estado de México.',
	},
	'guia-exani': {
		overview: 'Integra estudio, preguntas, simulacros, estadísticas, favoritos y recordatorios en un solo producto de preparación.',
		problem: 'Los aspirantes necesitan estructura, progreso medible y práctica enfocada para preparar exámenes de ingreso.',
		solution: 'Construí una app para elegir examen, definir fecha objetivo, seguir una ruta, practicar y revisar estadísticas.',
		myRole: 'Creador del producto e ingeniero móvil responsable de estrategia, implementación, publicación y modelo Free/Pro.',
		architecture: 'Experiencia con cuenta, progreso académico, configuración de examen, sesiones de práctica, estadísticas y compras en Google Play.',
		impact: 'Publicada para EXANI-I y EXANI-II, superó 100 descargas durante su etapa inicial.',
	},
	'karnaugh-maps': {
		overview: 'Ayuda a resolver, comprender, guardar y compartir ejercicios de lógica booleana mediante un flujo visual.',
		problem: 'Simplificar expresiones manualmente es lento y propenso a errores; muchas herramientas tampoco explican los grupos.',
		solution: 'Construí soporte SOP/POS, mapas de 2 a 5 variables, valores indiferentes, grupos visuales, circuitos, historial y PDF.',
		myRole: 'Creador, ingeniero móvil y responsable del ciclo completo del producto y sus mejoras.',
		architecture: 'Producto Android con edición interactiva, minimización, circuitos, historial, exportación PDF y ejercicios compartibles.',
		impact: 'Superó 10K descargas y se consolidó como herramienta de estudio para electrónica digital y lógica combinacional.',
	},
	'tacticas-rapidas-ajedrez': {
		overview: 'Convierte el entrenamiento táctico de ajedrez en sesiones móviles cortas y enfocadas.',
		problem: 'Las sesiones largas y colecciones poco enfocadas dificultan mantener un hábito diario de práctica.',
		solution: 'Construí un producto centrado en desafíos tácticos rápidos y un ciclo de práctica fácil de repetir.',
		myRole: 'Creador e ingeniero móvil responsable del concepto, experiencia, implementación y publicación.',
		architecture: 'Experiencia mobile-first organizada alrededor de sesiones tácticas compactas e interacción inmediata.',
		impact: 'Uno de los productos más recientes de J19 Software, ampliando el portafolio hacia el entrenamiento basado en juego.',
	},
	ahuacatl: {
		overview: 'Ahuacatl ayuda a identificar y mapear problemas fitosanitarios en cultivos de aguacate mediante un flujo de campo apoyado por modelos geoespaciales y estadísticos.',
		problem: 'Los productores enfrentan plagas y enfermedades, mientras el uso indiscriminado de químicos aumenta costos e impacto ambiental. Se necesitaba una herramienta de campo estructurada.',
		solution: 'Construí una aplicación que integra captura de datos, geolocalización y modelos matemáticos para generar mapas de densidad mediante kriging ordinario.',
		myRole: 'Lideré el desarrollo técnico móvil y la integración de algoritmos y procesamiento de datos, colaborando con un ingeniero agrónomo.',
		architecture: 'Aplicación mobile-first para Android e iOS, con geolocalización offline y una implementación alineada con el proceso descrito en la investigación.',
		impact: 'El proyecto produjo una herramienta agrícola y una publicación arbitrada en la Revista Mexicana de Ciencias Agrícolas de INIFAP.',
	},
	netcurio: {
		overview: 'Trabajo en una plataforma empresarial donde frontend, servicios backend y procesos críticos debían mantenerse confiables a escala.',
		problem: 'Las aplicaciones financieras necesitan sistemas mantenibles para procesos complejos, datos estructurados y evolución de largo plazo.',
		solution: 'Contribuí a una arquitectura con React, NestJS y GraphQL orientada a una entrega escalable y una organización clara.',
		myRole: 'Participé en frontend y backend dentro de las restricciones de una arquitectura empresarial.',
		architecture: 'Frontend en React, servicios NestJS y flujos GraphQL para interacciones empresariales complejas.',
		impact: 'Ayudé a entregar funcionalidad donde la calidad arquitectónica y la confiabilidad afectaban directamente las operaciones.',
	},
	'shopify-estafeta': {
		overview: 'Integración backend enfocada en mejorar la eficiencia de los procesos de envío de comercio electrónico.',
		problem: 'Gestionar envíos manualmente consume tiempo y genera fricción en operaciones y logística.',
		solution: 'Conecté los flujos de Shopify con Estafeta para automatizar tareas operativas repetitivas.',
		myRole: 'Responsable principal del diseño e implementación de la integración backend.',
		architecture: 'Flujos con Node.js y APIs REST para conectar eventos de ecommerce con operaciones logísticas.',
		impact: 'Mejoró la confiabilidad del proceso y redujo el esfuerzo manual en las operaciones de envío.',
	},
	'truth-tables': {
		overview: 'Aplicación educativa publicada para generar y validar tablas de verdad rápidamente desde una experiencia mobile-first.',
		problem: 'Estudiantes y usuarios técnicos necesitaban una forma más rápida de resolver tablas de verdad sin procesos manuales repetitivos.',
		solution: 'Construí una aplicación Flutter enfocada que simplifica los flujos de lógica y reduce la fricción.',
		myRole: 'Creador del producto, ingeniero móvil y responsable del diseño, implementación, publicación e iteración.',
		architecture: 'Producto móvil ligero con interacciones rápidas, flujos educativos claros y una implementación optimizada para uso recurrente.',
		impact: 'Superó las 350K descargas y demostró la capacidad de publicar software educativo con adopción a escala.',
	},
};
