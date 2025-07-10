// ia-responses.js
const responses = {
  // Respuestas generales (válidas para todas las páginas)
  '¿Qué es la Plataforma Docente?': '<strong>IA:</strong> La Plataforma Docente es una página web diseñada para ayudar a maestros a planificar clases, encontrar recursos educativos, compartir ideas con otros docentes y usar herramientas digitales. Todo está hecho para ser fácil de usar, incluso si no sabes mucho de tecnología.',
  '¿Cómo usar esta página si no sé mucho de tecnología?': '<strong>IA:</strong> ¡No te preocupes! Sigue estos pasos: <br>1. Usa el menú de arriba para ir a secciones como "Inicio", "Biblioteca" o "Recursos". <br>2. Haz clic en botones azules para descargar o explorar. <br>3. Si necesitas ayuda, haz clic en el botón de ayuda (un círculo con un signo de interrogación) en la esquina inferior derecha.',
  '¿Cómo cambiar el tema?': '<strong>IA:</strong> Para cambiar al modo oscuro (más cómodo para los ojos): <br>1. Busca el ícono de luna o sol en la barra superior, a la izquierda de "Inicio". <br>2. Haz clic en él. La página cambiará de colores claros a oscuros o viceversa.',
  '¿Qué es el modo oscuro?': '<strong>IA:</strong> El modo oscuro cambia los colores de la página a tonos más oscuros, lo que es más cómodo si trabajas de noche o en lugares con poca luz. Actívalo haciendo clic en el ícono de luna/sol en la barra superior.',
  '¿Cómo descargar un recurso?': '<strong>IA:</strong> Para descargar un archivo: <br>1. Ve a "Recursos" o "Biblioteca" en el menú superior. <br>2. Busca el recurso que quieras (como una plantilla o libro). <br>3. Haz clic en el botón azul "Descargar". Verás un mensaje que confirma la descarga (es una simulación).',
  '¿Dónde encontrar recursos?': '<strong>IA:</strong> Los recursos están en dos secciones: <br>1. <strong>Biblioteca</strong>: Busca libros, artículos y guías usando la barra de búsqueda. <br>2. <strong>Recursos</strong>: Encuentra plantillas, exámenes y presentaciones, y usa los filtros para elegir categoría o asignatura.',
  '¿Cómo navegar por la página?': '<strong>IA:</strong> Usa la barra azul en la parte superior. Cada opción te lleva a una sección: <br>- "Inicio": Vista general. <br>- "IA y Herramientas": Crea cuestionarios o planes. <br>- "Comunidad": Comparte ideas con otros maestros. <br>- "Biblioteca": Busca libros y artículos. <br>- "Recursos": Descarga materiales para clases.',
  '¿Qué hago si la página no carga?': '<strong>IA:</strong> Si la página no funciona: <br>1. Asegúrate de tener internet. <br>2. Refresca la página presionando F5 o el botón de recargar en tu navegador. <br>3. Si no se soluciona, haz clic en el botón de ayuda (signo de interrogación abajo a la derecha) y escribe tu problema.',
  '¿Cómo contactar asistencia?': '<strong>IA:</strong> Para pedir ayuda: <br>1. Haz clic en el botón de ayuda (círculo con un signo de interrogación) abajo a la derecha. <br>2. Selecciona "Contactar Asistencia". <br>3. Escribe tu problema y haz clic en "Enviar". Recibirás una confirmación simulada.',
  '¿Cómo cerrar un mensaje de ayuda?': '<strong>IA:</strong> Los mensajes que aparecen (como "Descarga exitosa") desaparecen solos después de unos segundos. Si quieres cerrarlos antes, espera a que el mensaje cambie o refresca la página con F5.',
  '¿Cómo volver al inicio?': '<strong>IA:</strong> Haz clic en "Inicio" en la barra superior azul o en el nombre "Plataforma Docente" a la izquierda. También puedes usar el botón de flecha hacia arriba (abajo a la derecha) para subir al principio de cualquier página.',
  '¿Puedo usar esta página en mi celular?': '<strong>IA:</strong> Sí, la página está diseñada para funcionar en celulares. Abre tu navegador (como Chrome o Safari), escribe la dirección de la página y usa el menú superior para navegar. Todo se ajusta automáticamente a tu pantalla.',
  '¿Cómo usar el generador de cuestionarios?': '<strong>IA:</strong> Para crear un cuestionario: <br>1. Ve a "IA y Herramientas" en el menú superior. <br>2. Busca la tarjeta "Generador de Cuestionarios". <br>3. Haz clic en "Probar ahora". <br>4. Elige un tema (como Matemáticas) y un nivel, luego haz clic en "Generar". Verás un mensaje de confirmación.',
  '¿Cómo generar un plan de clase?': '<strong>IA:</strong> Para hacer un plan de clase: <br>1. Ve a "IA y Herramientas" en el menú. <br>2. Busca "Asistente de Planificación de Clases". <br>3. Haz clic en "Probar ahora". <br>4. Ingresa el tema, objetivos y duración, luego presiona "Generar Plan". Es una simulación, pero verás un ejemplo.',
  '¿Qué herramientas de IA están disponibles?': '<strong>IA:</strong> En "IA y Herramientas" tienes: <br>1. <strong>Generador de Cuestionarios</strong>: Crea exámenes para tus clases. <br>2. <strong>Asistente de Planificación</strong>: Ayuda a organizar lecciones. Haz clic en "Probar ahora" en cada tarjeta para usarlas.',
  '¿Cómo unirme a un foro?': '<strong>IA:</strong> Para participar en un foro: <br>1. Ve a "Comunidad" en el menú superior. <br>2. Busca la sección "Explorar Foros". <br>3. Haz clic en "Ver Foro" en un tema que te interese (como Estrategias de Enseñanza). <br>4. Verás una ventana con opciones para participar (es una simulación).',
  '¿Cómo participar en un grupo de la comunidad?': '<strong>IA:</strong> Para unirte a un grupo: <br>1. Ve a "Comunidad" en el menú. <br>2. Busca "Grupos de Interés". <br>3. Haz clic en "Unirse" en un grupo, como Innovación Educativa. <br>4. Recibirás un mensaje de confirmación (simulado).',
  '¿Cómo buscar en la biblioteca?': '<strong>IA:</strong> Para encontrar un recurso: <br>1. Ve a "Biblioteca" en el menú superior. <br>2. Escribe una palabra en la barra de búsqueda, como "matemáticas" o "historia". <br>3. Haz clic en el botón azul con la lupa. Verás un mensaje con resultados simulados.',
  '¿Qué recursos hay en la biblioteca?': '<strong>IA:</strong> La biblioteca tiene: <br>- Libros digitales (como "Historia Universal"). <br>- Artículos académicos (como "Métodos de Enseñanza"). <br>- Guías prácticas (como "Matemáticas Básicas"). <br>- Multimedia (como videos educativos). Usa la barra de búsqueda o los botones de categorías.',
  '¿Por qué no puedo descargar?': '<strong>IA:</strong> Las descargas en esta plataforma son simuladas. Cuando hagas clic en "Descargar", verás un mensaje que confirma la acción, pero no se descargará un archivo real. Si ves un error, refresca la página con F5.'
};

const pageSpecificResponses = {
  'index.html': {
    '¿Qué puedo hacer en la página de inicio?': '<strong>IA:</strong> En "Inicio" puedes: <br>1. Ver una introducción a la plataforma. <br>2. Usar el menú superior para ir a otras secciones. <br>3. Hacer clic en el botón de ayuda (abajo a la derecha) si necesitas orientación.',
    '¿Cómo empiezo a usar la plataforma?': '<strong>IA:</strong> Desde "Inicio": <br>1. Explora el menú superior para ir a "Recursos", "Biblioteca" o "Comunidad". <br>2. Prueba hacer clic en botones azules para descargar o generar contenido. <br>3. Usa el botón de ayuda si no sabes por dónde empezar.'
  },
  'ia.html': {
    '¿Cómo probar las herramientas de IA?': '<strong>IA:</strong> En "IA y Herramientas": <br>1. Busca las tarjetas de "Generador de Cuestionarios" o "Asistente de Planificación". <br>2. Haz clic en "Probar ahora". <br>3. Sigue las instrucciones y haz clic en "Generar" para ver un resultado simulado.',
    '¿Para qué sirve el asistente de planificación?': '<strong>IA:</strong> El Asistente de Planificación te ayuda a crear un plan de clase. Ingresa el tema (como Ciencias) y el tiempo (como 1 hora), y haz clic en "Generar Plan" para ver un ejemplo simulado.'
  },
  'comunidad.html': {
    '¿Cómo encontrar un foro interesante?': '<strong>IA:</strong> En "Comunidad": <br>1. Usa la barra de búsqueda y escribe un tema, como "enseñanza". <br>2. O mira la sección "Foros Destacados" y haz clic en "Ver Foro" en un tema que te guste.',
    '¿Puedo compartir mis ideas?': '<strong>IA:</strong> En "Comunidad", puedes simular compartir ideas: <br>1. Ve a un foro o grupo. <br>2. Haz clic en "Ver Foro" o "Unirse". <br>3. Imagina que escribes un mensaje (es una simulación).'
  },
  'biblioteca.html': {
    '¿Cómo encontrar un artículo académico?': '<strong>IA:</strong> En "Biblioteca": <br>1. Usa la barra de búsqueda y escribe "artículo" o un tema como "educación". <br>2. O ve a "Explorar por Categoría" y haz clic en "Ver" en Artículos Académicos. <br>3. Haz clic en "Descargar" para simular.',
    '¿Qué son los recursos multimedia?': '<strong>IA:</strong> Los recursos multimedia son videos o audios educativos. En "Biblioteca", haz clic en "Ver" en la categoría Multimedia para ver ejemplos como "Video de Biología".'
  },
  'recursos.html': {
    '¿Cómo filtrar recursos?': '<strong>IA:</strong> Para filtrar recursos: <br>1. Ve a "Recursos" en el menú. <br>2. En la barra de filtros, elige una categoría (como Plantillas) y/o una asignatura (como Matemáticas). <br>3. Haz clic en el botón azul "Filtrar". Verás un mensaje con los filtros aplicados.',
    '¿Qué son las plantillas?': '<strong>IA:</strong> Las plantillas son documentos pre-diseñados que puedes usar para planificar clases, hacer informes o crear actividades. En "Recursos", haz clic en "Ver" en la categoría Plantillas para ver ejemplos como "Plan de Clase".'
  }
};

function getResponse(message, page) {
  console.log('getResponse called with message:', message, 'and page:', page); // Depuración
  // Buscar respuesta específica de la página
  const specificResponse = pageSpecificResponses[page]?.[message];
  if (specificResponse) {
    console.log('Found specific response:', specificResponse); // Depuración
    return specificResponse;
  }

  // Buscar respuesta general
  const generalResponse = responses[message];
  if (generalResponse) {
    console.log('Found general response:', generalResponse); // Depuración
    return generalResponse;
  }

  // Respuesta por defecto si no se encuentra
  console.log('No response found for:', message); // Depuración
  return '<strong>IA:</strong> Lo siento, no entiendo tu pregunta. Prueba con algo como "¿Cómo filtrar recursos?" o usa las sugerencias del menú.';
}

function updateSuggestions() {
  console.log('updateSuggestions called'); // Depuración
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const dropdown = document.querySelector('.dropdown-menu');
  if (!dropdown) {
    console.error('Dropdown menu not found');
    return;
  }
  const suggestions = [
    ...Object.keys(responses).slice(0, 5),
    ...(Object.keys(pageSpecificResponses[page] || {}))
  ].slice(0, 10);
  dropdown.innerHTML = suggestions.map(q => 
    `<li><a class="dropdown-item" href="#" data-question="${q}">${q}</a></li>`
  ).join('');
  console.log('Suggestions generated:', suggestions); // Depuración
}

// Confirmar carga del archivo
console.log('ia-responses.js loaded successfully');