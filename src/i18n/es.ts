// Spanish is the source of truth: en.ts must define the same keys (checked by tsc).
// Values can hold trusted inline HTML (<em>, <code>); render them with <Rich>.
export const es = {
  "meta.title": "Rolboard: tu campaña de rol, en un solo lugar",
  "meta.description":
    "Rolboard es un tablero para dirigir campañas de rol de mesa: sesiones, arcos, NPCs, locaciones, facciones, quests y un tracker de combate. Gratis, de código abierto y local.",
  "g.meta.description":
    "Cómo preparar tu vault de Obsidian para Rolboard: carpetas, frontmatter, wikilinks, reindexado y exportación. Rolboard solo lee tus notas, nunca las modifica.",
  "nav.faq": "Preguntas",
  "meta.download.title": "Descargar Rolboard: Windows, Linux, Android y Docker",
  "meta.download.description":
    "Descarga gratis Rolboard para Windows, Linux o Android, o instálalo en tu servidor con Docker. Código abierto.",
  "meta.faq.title": "Preguntas frecuentes sobre Rolboard",
  "meta.faq.description":
    "Respuestas sobre precio, sistemas de juego, datos, uso sin internet, varios dispositivos y Obsidian.",
  "palette.go.demo": "Probar el tracker",
  "dl.help.title": "Antes y después de instalar",
  "cta.all": "Ver todas las opciones",
  "sync.eyebrow": "Sincronizar",
  "sync.title": "Una campaña, varios dispositivos",
  "sync.lead":
    "Rolboard no te ata a una herramienta de sincronización. Elige el camino según cuántos dispositivos usas y si los usas a la vez.",
  "sync.label": "Formas de sincronizar",
  "sync.t.none": "No sincronizar",
  "sync.t.folder": "Carpeta de sincronización",
  "sync.t.manual": "Llevarla a mano",
  "sync.t.server": "Servidor propio",
  "sync.when": "Cuándo conviene",
  "sync.steps": "Cómo",
  "sync.watch": "Ojo con",
  "sync.files": "Qué hay en la carpeta",
  "sync.f.db": "La última copia exportada de la campaña.",
  "sync.f.uploads": "Las imágenes.",
  "sync.f.conflict": "La copia del otro dispositivo, si los dos cambiaron.",
  "sync.f.config": "No se sincroniza: guarda rutas propias de cada equipo.",
  "sync.none.when":
    "Usas Rolboard en un solo dispositivo. Es lo más simple y no hay nada que configurar: la campaña vive en una base SQLite local.",
  "sync.none.steps":
    "<ol><li>Instala y usa la app. No elijas ninguna carpeta de sincronización.</li><li>Para un respaldo, cierra la app y copia la carpeta de datos: <code>~/.config/rolboard</code> en Linux, <code>%AppData%\\rolboard</code> en Windows. Contiene <code>config.json</code>, <code>rolboard.db</code> y <code>uploads/</code>.</li><li>Si prefieres un respaldo legible, usa <em>Exportar campaña</em>: un <code>.zip</code> con cada ficha como nota Markdown.</li></ol>",
  "sync.none.watch":
    "<ul><li>Copiar la base con la app abierta puede dejar un archivo dañado. Cierra Rolboard antes.</li><li>El respaldo queda en el mismo disco que la campaña: guarda otra copia fuera de él.</li></ul>",
  "sync.folder.when":
    "Usas la app de escritorio y la de Android, o dos computadoras, y las abres de a una por vez. La sincronización la hace la herramienta que tú elijas.",
  "sync.folder.steps":
    "<ol><li>Elige una carpeta que ya se sincronice con algo: un drive en la nube (Dropbox, Google Drive, OneDrive, iCloud Drive), Nextcloud, Syncthing, Resilio, o una que copies tú con rsync, rclone o un script.</li><li>En <em>Ajustes de la app</em>, el engranaje del selector de campañas, elige esa carpeta como carpeta de sincronización. Si ya tiene una copia, Rolboard la importa; si está vacía, exporta la tuya.</li><li>Repite el paso anterior en el otro dispositivo, apuntando a la misma carpeta.</li><li>Usa un dispositivo por vez y espera a que tu herramienta termine de sincronizar antes de abrir la app en el otro.</li></ol>",
  "sync.folder.watch":
    "<ul><li>Rolboard nunca abre la base dentro de esa carpeta: escribe y lee una copia completa. Por eso funciona con casi cualquier herramienta.</li><li>Importa al abrir (en Android, al volver a primer plano) y exporta 30 segundos después del último cambio y al cerrar (en Android, al pasar a segundo plano).</li><li>Si dos dispositivos cambian a la vez, gana el último en guardar. La otra copia queda como <code>rolboard.conflict.db</code> y tu base anterior como <code>rolboard.db.bak</code>.</li><li>Una copia hecha con una versión más nueva se rechaza: actualiza todos los dispositivos a la misma versión.</li></ul>",
  "sync.manual.when":
    "No quieres montar nada para sincronizar, o solo cambias de dispositivo de vez en cuando.",
  "sync.manual.steps":
    "<ol><li>En el dispositivo de origen, elige una carpeta cualquiera como carpeta de sincronización, por ejemplo la de un pendrive, y cierra la app: al cerrar exporta la última copia.</li><li>Copia el contenido de la carpeta (<code>rolboard.db</code> y <code>uploads/</code>) al otro dispositivo por el medio que prefieras: pendrive, cable, correo o red local.</li><li>En el destino, elige esa carpeta como carpeta de sincronización. Rolboard importa la copia.</li><li>Para volver, haz lo mismo en sentido contrario.</li></ol>",
  "sync.manual.watch":
    "<ul><li>Usa siempre la copia que Rolboard exporta a la carpeta de sincronización, no el archivo de la carpeta de datos con la app abierta.</li><li>Si ya había datos en el destino, Rolboard guarda tu base anterior como <code>rolboard.db.bak</code> antes de importar.</li></ul>",
  "sync.server.when":
    "Quieres usar la campaña desde varios dispositivos al mismo tiempo, por ejemplo la tablet en la mesa y tu computadora, o prefieres una sola copia en un servidor tuyo.",
  "sync.server.steps":
    "<ol><li>Instala la versión Docker (o Podman) en una máquina que esté siempre encendida: un servidor casero, un mini PC o un VPS.</li><li>Crea la clave de admin, entra desde el navegador, crea la campaña y ponle un código de acceso.</li><li>Abre la dirección del servidor desde cualquier dispositivo de tu red. Para usarlo fuera de casa, ponlo detrás de la VPN o el túnel que ya uses.</li><li>Para traer una campaña de escritorio, copia su <code>.db</code> y la carpeta <code>uploads/</code> a la carpeta de datos del servidor.</li></ol>",
  "sync.server.watch":
    "<ul><li>Si lees un vault de Obsidian, el servidor lo monta en solo lectura. Llévalo hasta ahí con la herramienta que prefieras (Syncthing, git, rsync) y excluye <code>.git/</code>.</li><li>Las apps de escritorio y de Android no se conectan a un servidor: tienen su propia base.</li><li>No lo expongas a internet sin HTTPS ni una clave de admin fuerte.</li></ul>",
  "g.t.npc.keys":
    "Tipo y estado, datos libres, ubicación, facciones y vínculos con otros NPCs y con jugadores.",
  "g.t.ses.keys":
    "Número, fecha, estado, etiquetas, título y arco. Un número decimal como 4.1 es un interludio; la etiqueta de oneshot los numera aparte.",
  "sync.multi.title": "Si lo usa más de un Master",
  "sync.multi.body":
    "<ul><li>La clave de admin es una sola por servidor y da acceso a todo: ver y modificar todas las campañas y crear nuevas. Guárdala tú y no se la des a otros Masters.</li><li>Cada campaña tiene su propio código de acceso. Dale a cada Master solo el de su campaña: con él entra a esa campaña y a ninguna otra, y los datos de cada una están aislados.</li><li>No hay cuentas ni roles. Quien conoce el código de una campaña puede ver y editar todo su contenido, secretos incluidos, así que compártelo solo con gente de confianza.</li><li>Si los Masters no confían entre sí, o cada uno quiere administrar sus propias campañas, lo más limpio es una instancia por Master, cada una con su clave de admin.</li></ul>",
  "not.vtt": "No es un VTT ni una hoja de personaje.",
  "not.rules": "No trae reglas cargadas.",
  "not.dice": "No tira dados.",
  "not.is":
    "Es el cuaderno de quien dirige: un lugar para guardar la historia, no para jugarla.",
  "g.folders.r1": "Cuenta la carpeta de primer nivel.",
  "g.folders.r2": "Puedes usar subcarpetas dentro.",
  "g.folders.r3": "Cualquier otra carpeta se ignora.",
  "g.folders.r4":
    "El nombre de la ficha es el nombre del archivo, sin <code>.md</code>.",
  "nav.home": "Rolboard, inicio",
  "nav.skip": "Saltar al contenido",
  "nav.sections": "Secciones",
  "nav.features": "Funciones",
  "nav.download": "Descargar",
  "menu.pages": "Páginas",
  "menu.here": "En esta página",
  "menu.home": "Inicio",
  "menu.open": "Abrir menú",
  "menu.close": "Cerrar menú",
  "menu.label": "Menú",
  "nav.palette": "Buscar",
  "footer.credits":
    "Desarrollado por Nicolás Correa. Logos e íconos de Mateo Guareschi.",
  "footer.legal":
    "Código bajo licencia MIT. Los logos e íconos no están incluidos en esa licencia: son de su autor y se usan con permiso.",

  "palette.label": "Ir a una sección",
  "palette.placeholder": "Escribe para buscar…",
  "palette.empty": "Nada por acá. Prueba con «descargar» o «obsidian».",
  "palette.hint": "Esc para cerrar",
  "palette.go.github": "Código en GitHub",

  "hero.eyebrow": "Para Masters y Directores de juego",
  "hero.title1": "Tu campaña de rol,",
  "hero.title2": "en un solo lugar.",
  "hero.lead":
    "Sesiones, arcos, NPCs, locaciones, facciones, quests y un tracker de combate. Rolboard guarda la historia de tu campaña para que tú te ocupes de contarla.",
  "hero.cta": "Descargar gratis",
  "hero.code": "Ver el código",
  "hero.meta": "Windows · Linux · Android · Docker",

  "demo.label": "Mesa de prueba",
  "demo.title": "Emboscada en el faro",
  "demo.round": "Ronda",
  "demo.next": "Siguiente turno",
  "demo.ini": "INI",
  "demo.damage": "Quitar 1 punto de vida a",
  "demo.heal": "Sumar 1 punto de vida a",
  "demo.down": "Caído",
  "demo.turn": "Turno de",
  "dice.title": "Rolboard no tira dados. Este sí.",
  "dice.roll": "Tirar un d20",
  "dice.result": "Resultado",
  "dice.crit": "Crítico",
  "dice.fumble": "Pifia",
  "dice.history": "Últimas tiradas",
  "dice.none": "Sin tiradas todavía",

  "features.eyebrow": "Qué hace",
  "features.title": "Todo lo que necesitas entre sesión y sesión",
  "codex.label": "Funciones de Rolboard",
  "f1.title": "Arcos y sesiones",
  "f2.title": "Elenco con memoria",
  "f3.title": "Tu mundo, en capas",
  "f4.title": "Tracker de combate",
  "f5.title": "Objetos y monedas",
  "f5.text":
    "Un catálogo con precios en varias monedas, inventarios de NPCs y jugadores, y tiendas por locación.",
  "f6.title": "Secretos y wardails",
  "f6.text":
    "Qué sabe quién, qué está oculto y qué ya se reveló; y los temas sensibles de la mesa siempre a la vista al jugar.",
  "f7.title": "Búsqueda global",
  "f8.title": "Imágenes y color",
  "f8.text":
    "Una imagen por NPC, jugador, locación, facción, objeto, arco, lore y quest, y un color por tipo.",
  "f9.title": "Tuyo y local",
  "f9.text":
    "Sin cuentas ni nube. La app de escritorio guarda todo en tu computadora; si prefieres, la instalas en tu servidor con Docker.",
  "also.title": "Y además",

  "codex.dash.tab": "Resumen",
  "codex.dash.title": "Abre y sigue donde quedaste",
  "codex.dash.text":
    "El resumen junta el arco actual, la última sesión, las quests activas, el grupo y las notas pendientes. Sin menús de por medio.",

  "s1.eyebrow": "Elenco",
  "s1.title": "Cada NPC, a un clic",
  "s1.text":
    "Filtra por tipo o estado, busca por nombre o lugar y abre la ficha con su descripción, ubicación y relaciones. Los tipos son tuyos: humano, spren, monstruo o lo que tu mundo necesite.",
  "s2.eyebrow": "Combate",
  "s2.title": "Iniciativa sin papelitos",
  "s2.text":
    "Suma participantes, ajusta la vida con un clic y avanza rondas. Rolboard ordena los turnos; las tiradas y las reglas siguen siendo de tu mesa.",
  "s3.eyebrow": "Historia",
  "s3.title": "La campaña, de un vistazo",
  "s3.text":
    "Sesiones e interludios agrupados por arco, con fecha y título. La próxima sesión queda planificada y lista para jugar.",
  "s5.eyebrow": "Mundo",
  "s5.title": "Lore con orden propio",
  "s5.text":
    "Entradas por categoría, enlazadas a arcos y locaciones, y una línea de tiempo con fechas libres como «Año 205». Con Markdown, avisos al estilo Obsidian y tablas.",
  "s6.eyebrow": "Búsqueda",
  "s6.title": "Todo, con Ctrl + K",
  "s6.text":
    "Una paleta de comandos para saltar a cualquier ficha de la campaña sin pasar por los menús. Escribe, elige y listo: ideal a mitad de partida.",
  "s4.eyebrow": "Android",
  "s4.title": "También en el bolsillo",
  "s4.text":
    "La misma app en el teléfono o la tablet, sin conexión. Elige una carpeta de sincronización y lleva tus campañas entre la computadora y el celular.",

  "shot.dashboard":
    "Resumen de una campaña en Rolboard: arco actual, última sesión, quests activas y NPCs recientes",
  "shot.npcs": "Lista de NPCs con tipo, ubicación actual y estado",
  "shot.encounter":
    "Tracker de combate con puntos de vida, iniciativa y turnos rápidos y lentos",
  "shot.sessions": "Línea de tiempo de sesiones agrupadas por arco",
  "shot.world": "Lore agrupado por categoría",
  "shot.search": "Paleta de búsqueda con resultados de toda la campaña",
  "shot.android.campaigns": "Selector de campañas en un teléfono Android",
  "shot.android.dashboard": "Resumen de una campaña en un teléfono Android",
  "shot.android.help": "Página de ayuda en un teléfono Android",

  "obs.eyebrow": "Obsidian",
  "obs.title": "¿Ya tienes tu campaña en Obsidian?",
  "obs.text":
    "Apunta Rolboard a tu vault y toca <em>Reindexar</em>. Tus notas de NPCs, locaciones, facciones, personajes, arcos y sesiones se convierten en fichas. Rolboard solo lee: nunca modifica tus notas.",
  "obs.more": "Cómo preparar tu vault →",
  "obs.tree": "Estructura de carpetas del vault",
  "obs.root": "Mi campaña/",
  "obs.arcs": "→ arcos",
  "obs.npcs": "→ NPCs",
  "obs.locations": "→ locaciones",
  "obs.factions": "→ facciones",
  "obs.characters": "→ personajes",
  "obs.sessions": "→ sesiones",

  "not.eyebrow": "Reglas de la casa",
  "not.title": "Lo que Rolboard no es",

  "faq.title": "Preguntas frecuentes",
  "faq.freeq": "¿Es gratis?",
  "faq.freea":
    "Sí, y lo va a seguir siendo. Rolboard es de código abierto bajo licencia MIT: no hay cuentas, planes pagos ni publicidad. Puedes leer el código, compilarlo tú mismo o adaptarlo a tu mesa.",
  "faq.systemq": "¿Con qué sistema de juego funciona?",
  "faq.systema":
    "Con cualquiera. Rolboard no trae reglas ni tira dados: guarda la historia de la campaña. Los atributos y habilidades son campos libres que defines tú, y el tracker de combate admite iniciativa numérica o turnos rápidos y lentos. Se usó con D&amp;D y con el juego de rol de Cosmere, pero sirve para cualquier sistema.",
  "faq.playersq": "¿Mis jugadores pueden verla?",
  "faq.playersa":
    "No. Rolboard es la herramienta de quien dirige: no hay vista ni cuentas para jugadores, así que tus notas, secretos y planes quedan solo para ti.",
  "faq.q1": "¿Dónde quedan mis datos?",
  "faq.a1":
    "En tu computadora. La app de escritorio guarda todo en una base SQLite dentro de tu carpeta de usuario (<code>~/.config/rolboard</code> en Linux, <code>%AppData%\\rolboard</code> en Windows), junto con las imágenes que subas. No hay cuentas, servidores ni nube: para hacer un backup alcanza con copiar esa carpeta.",
  "faq.q2": "¿Funciona sin internet?",
  "faq.a2":
    "Sí. La app de escritorio corre entera en tu computadora y tus datos nunca salen de ahí. Solo necesitas conexión para descargarla y para abrir los links externos, como el repositorio o la documentación.",
  "faq.updateq": "¿Cómo actualizo?",
  "faq.updatea":
    "Descarga la versión nueva y reemplaza el ejecutable anterior (en Android, instala el APK nuevo encima del anterior). Tus campañas viven en tu carpeta de usuario, separadas de la app, así que no se pierden al actualizar. La versión actual aparece en la sección de descargas.",
  "faq.devicesq": "¿Puedo usarla en varios dispositivos?",
  "faq.devicesa":
    'Sí, de dos formas. La app de escritorio y la de Android pueden compartir las campañas con una carpeta de sincronización, que mantienes al día con la herramienta que prefieras (Syncthing, una nube o a mano); está pensada para usar un dispositivo por vez. Si quieres usarla en varios a la vez, instala la versión Docker en un servidor: se usa desde el navegador de cualquier dispositivo de tu red, con clave de admin. Los detalles, paso a paso, están en la <a href="/faq#sync">guía de sincronización</a>.',
  "faq.q3": "¿Hay versión para macOS?",
  "faq.a3":
    "Por ahora no: la app no está probada ni firmada para Mac. Si tienes un servidor o una computadora siempre encendida, puedes instalar la versión Docker y usarla desde el navegador del Mac, o de cualquier otro dispositivo de tu red.",
  "faq.q4": "¿Necesito Obsidian?",
  "faq.a4":
    "No. Rolboard funciona por su cuenta: puedes crear campañas, NPCs, locaciones y sesiones directamente en la app. Si ya llevas tu campaña en Obsidian, apúntalo a tu vault para importar tus notas; cada vez que reindexas se traen los cambios, y desde cada ficha puedes ver la nota completa. Rolboard solo lee: nunca modifica tu vault.",

  "report.title": "¿Encontraste un error?",
  "report.text":
    "Si algo no funciona o se te ocurre una mejora, abre un issue en GitHub. Antes, revisa si ya hay uno parecido: puedes sumarle tu caso.",
  "report.new": "Reportar un problema",
  "report.list": "Ver issues abiertos",

  "dl.eyebrow": "Descargar",
  "dl.title": "Gratis. Para siempre.",
  "dl.sub": "Rolboard es de código abierto. Elige cómo usarlo.",
  "dl.win.btn": "Descargar para Windows",
  "dl.win.note":
    "No está firmado: si Windows muestra un aviso, elige <em>Más información → Ejecutar de todas formas</em>.",
  "dl.linux.btn": "Descargar para Linux",
  "dl.linux.note":
    "Necesita <code>libwebkit2gtk-4.1</code>. Dale permiso de ejecución con <code>chmod +x</code> y ábrelo.",
  "dl.android.btn": "Descargar para Android",
  "dl.android.note":
    "No está en Google Play. Si Play Protect muestra un aviso, elige <em>Más detalles → Instalar de todas formas</em>.",
  "dl.server.title": "Servidor",
  "dl.server.btn": "Ver instalación con Docker",
  "dl.server.note":
    "Para usarlo desde la tablet o el celular en la mesa, con clave de admin y código por campaña.",
  "dl.all": "Todas las versiones",
  "dl.recommended": "Recomendado para tu equipo",
  "dl.version": "Versión actual",

  "g.meta.title": "Rolboard con Obsidian: convierte tu vault en fichas",
  "g.title": "Tu vault de Obsidian, convertido en fichas.",
  "g.lead":
    "Apunta Rolboard a tu carpeta y toca <em>Reindexar</em>. Tus notas de NPCs, locaciones, facciones, personajes, arcos, sesiones y lore pasan a ser fichas con relaciones. Rolboard solo lee: nunca modifica tus notas.",
  "g.cta.download": "Descargar Rolboard",
  "g.cta.template": "Ver el vault de ejemplo",
  "g.steps.eyebrow": "Cómo funciona",
  "g.steps.title": "Tres pasos, sin migrar nada",
  "g.s1.title": "Elige la carpeta",
  "g.s1.text":
    "Al crear la campaña, escoge la carpeta de tu vault. En la app de escritorio, indica la carpeta donde tienes tus vaults una sola vez.",
  "g.s2.title": "Reindexa",
  "g.s2.text":
    "Con un clic, Rolboard lee el frontmatter de cada nota y crea o actualiza las fichas. Si una nota tiene un error, avisa y sigue con las demás.",
  "g.s3.title": "Sigue escribiendo en Obsidian",
  "g.s3.text":
    "La prosa se queda en tus notas. Cada ficha tiene un botón para abrir la nota en Obsidian; cuando la edites, vuelve a reindexar.",
  "g.folders.eyebrow": "Estructura",
  "g.folders.title": "Qué carpeta se convierte en qué",
  "g.folders.label": "Carpetas del vault",
  "g.t.entity": "Se convierte en",
  "g.t.keys": "Claves de frontmatter que lee",
  "g.t.npc": "NPCs",
  "g.t.loc": "Locaciones",
  "g.t.loc.keys":
    "Tipo (planeta, región, ciudad, estructura o plano) y locación padre: forman un árbol.",
  "g.t.grp": "Facciones",
  "g.t.grp.keys":
    "Alineación y líder. Los miembros salen de las notas de NPC y de personaje.",
  "g.t.pc": "Personajes",
  "g.t.pc.keys":
    "La ficha del jugador y sus notas de historia y avances, enlazadas con <code>personaje</code>.",
  "g.t.arc": "Arcos",
  "g.t.arc.keys":
    "Orden del arco y del subarco, título, estado y misión principal.",
  "g.t.ses": "Sesiones",
  "g.t.lore": "Entradas de lore",
  "g.t.lore.keys": "Categoría (se crea si no existe), arco y locación.",
  "g.ex.eyebrow": "Un ejemplo",
  "g.ex.title": "Una nota de NPC",
  "g.ex.text":
    "El frontmatter es YAML. Los wikilinks van entre comillas. <code>tipo</code> es el tipo de NPC de la campaña: si todavía no existe, Rolboard lo crea. <code>faccion</code> y <code>vinculado_a</code> son listas.",
  "g.ex.label": "Ejemplo de nota de NPC",
  "g.det.eyebrow": "Detalles que importan",
  "g.det.title": "Pensado para que no pierdas nada",
  "g.d1.title": "Wikilinks, sin adivinar",
  "g.d1.text":
    "<code>[[Nombre]]</code> y <code>[[Nombre|Alias]]</code> se buscan por nombre y por el tipo que espera cada campo. Si hay cero o varias coincidencias, Rolboard no elige: te lo reporta como enlace sin resolver.",
  "g.d2.title": "Tus ediciones se respetan",
  "g.d2.text":
    "Si una nota no cambió desde el último reindexado, se salta: lo que editaste en Rolboard no se pisa. Los miembros de facciones que agregaste o quitaste a mano tampoco vuelven solos.",
  "g.d3.title": "Exporta y vuelve",
  "g.d3.text":
    "<em>Exportar campaña</em> genera un <code>.zip</code> con cada ficha como nota Markdown, con las mismas claves. Puedes soltarlo en un vault y reindexar: sirve de respaldo y de salida.",
  "g.d4.title": "Abre la nota en Obsidian",
  "g.d4.text":
    "Cada ficha tiene un botón que abre su nota con <code>obsidian://</code>. Funciona porque Obsidian nombra el vault igual que su carpeta. También puedes ver la nota renderizada dentro de Rolboard.",
  "g.d5.title": "Sincroniza como prefieras",
  "g.d5.text":
    "En escritorio, Rolboard lee la carpeta local. Con Docker, lleva tu vault al servidor con Syncthing u otra herramienta; si es un repositorio git, excluye <code>.git/</code> de la sincronización.",
  "g.d6.title": "Solo lectura",
  "g.d6.text":
    "El vault se monta como solo lectura y los archivos se leen sin seguir enlaces simbólicos fuera de él. Rolboard no escribe en tu vault: lo único que guarda es su propia base de datos.",
  "g.more.text":
    "¿Quieres el detalle completo de cada clave y de cómo se resuelven los enlaces?",
  "g.more.link": "Leer la referencia técnica",
  "meta.agents.title":
    "Rolboard con IA: conecta Claude, OpenCode, Codex y Antigravity",
  "meta.agents.description":
    "Conecta tu campaña de Rolboard a un asistente de IA con MCP: que busque, resuma y te ayude a preparar sesiones. Sin claves de API. Funciona con Claude, OpenCode, Codex y Antigravity.",
  "nav.agents": "IA",
  "a.title": "Tu campaña, a la mano de tu asistente de IA.",
  "a.lead":
    "Rolboard habla MCP: Claude, OpenCode, Codex y Antigravity pueden buscar en tu campaña, resumir una sesión o ayudarte a preparar la siguiente. Sin claves de API ni cuentas nuevas.",
  "a.cta.download": "Descargar Rolboard",
  "a.cta.steps": "Ver cómo conectar",
  "a.steps.eyebrow": "Cómo conectar",
  "a.steps.title": "Dos caminos, según cómo uses Rolboard",
  "a.s1.title": "Con la app de escritorio",
  "a.s1.text":
    "En <em>Ajustes de la app</em> activa <em>Permitir que agentes de IA se conecten</em> y pulsa <em>Conectar</em> en tu cliente. Rolboard se agrega solo a su configuración, y antes guarda una copia del archivo. Funciona mientras la app esté abierta.",
  "a.s2.title": "Con un servidor Docker",
  "a.s2.text":
    "Descarga <code>rolboard-mcp</code> y ejecuta <code>rolboard-mcp login</code> una vez: pide el código de acceso de la campaña sin mostrarlo y lo guarda en tu equipo. Después, <em>Conectar un agente de IA</em>, en los ajustes de la campaña, arma el comando de cada cliente.",
  "a.s3.title": "Pídele lo que necesites",
  "a.s3.text":
    "Pregunta por un NPC, pide el resumen de la última sesión o ayuda con la preparación de la próxima. El asistente lee tu campaña y puede dejar notas, NPCs, quests y lore nuevos.",
  "a.clients.eyebrow": "Clientes",
  "a.clients.title": "Con qué programas funciona",
  "a.clients.text":
    "<strong>Claude Code</strong>, <strong>Claude Desktop</strong>, <strong>OpenCode</strong>, <strong>Codex</strong> y <strong>Antigravity</strong>. Con la app de escritorio, un botón configura cada uno. Con Docker, Claude Code y Codex tienen un comando; los otros tres piden pegar una configuración, y Rolboard te la arma. No está disponible en Android.",
  "a.limits.eyebrow": "Límites",
  "a.limits.title": "Qué puede y qué no puede hacer",
  "a.d1.title": "Lee casi todo",
  "a.d1.text":
    "Fichas, sesiones, notas y secretos incluidos. Lo que lee viaja al servicio de IA que uses: si no quieres que un secreto salga de tu equipo, no conectes ese cliente.",
  "a.d2.title": "Escribe poco",
  "a.d2.text":
    "Crea notas sueltas, NPCs, quests y entradas de lore, y edita la preparación de una sesión. No borra nada.",
  "a.d3.title": "Sin claves ni red pública",
  "a.d3.text":
    "En escritorio la conexión pasa por un socket local, solo para tu usuario. Con Docker usa el código de acceso de cada campaña: una conexión, una campaña.",
  "faq.agentsq": "¿Puedo usar un asistente de IA con mi campaña?",
  "faq.agentsa":
    'Sí, con cualquier programa que hable MCP: Claude, OpenCode, Codex y Antigravity, sin claves de API. Puede leer tu campaña y crear notas, NPCs, quests y lore, pero no borra nada. Los pasos están en la <a href="/agents">página de IA</a>.',
} as const;

export type Key = keyof typeof es;
