document.addEventListener("DOMContentLoaded", () => {

  
  const mainContainer = document.querySelector(".main-container");
  const savedTheme = localStorage.getItem("theme");
  const savedNoise = localStorage.getItem("noise");
  const noise = document.querySelector(".noise");
  
  const noiseBtn = document.querySelector("#noise-btn");
  const darkBtn = document.querySelector("#dark-btn");
  const dayBtn = document.querySelector("#day-btn");
  const darkIcon = darkBtn.querySelector("i");
  const dayIcon = dayBtn.querySelector("i");

  function cleanNoise() {
    if (noise.classList.contains("clean")) {
      noise.classList.remove("clean");
    } else {
      noise.classList.add("clean");
    }
  }

  if (savedTheme === "night") {
    mainContainer.classList.add("night");
    

    darkIcon.classList.remove("bi-moon-stars");
    darkIcon.classList.add("bi-moon-stars-fill");
    dayIcon.classList.remove("bi-brightness-high-fill");
    dayIcon.classList.add("bi-brightness-high");
  } else {
    mainContainer.classList.remove("night");
    

    darkIcon.classList.remove("bi-moon-stars-fill");
    darkIcon.classList.add("bi-moon-stars");
    dayIcon.classList.remove("bi-brightness-high");
    dayIcon.classList.add("bi-brightness-high-fill");
  }

  if (savedNoise === "on") {
    noise.classList.add("clean");
  }

  noiseBtn.addEventListener("click", () => {
    if (noise.classList.contains("clean")) {
      localStorage.setItem("noise", "off");
      noiseBtn.classList.remove("on");
    } else {
      localStorage.setItem("noise", "on");
      noiseBtn.classList.add("on");
    }
    cleanNoise();
  });

  darkBtn.addEventListener("click", () => {
    if (!mainContainer.classList.contains("night")) {
      mainContainer.classList.add("night");
      localStorage.setItem("theme", "night");
      

      darkIcon.classList.remove("bi-moon-stars");
      darkIcon.classList.add("bi-moon-stars-fill");

      dayIcon.classList.remove("bi-brightness-high-fill");
      dayIcon.classList.add("bi-brightness-high");
    }
  });

  dayBtn.addEventListener("click", () => {
    if (mainContainer.classList.contains("night")) {
      mainContainer.classList.remove("night");
      localStorage.setItem("theme", "day");
      

      darkIcon.classList.remove("bi-moon-stars-fill");
      darkIcon.classList.add("bi-moon-stars");

      dayIcon.classList.remove("bi-brightness-high");
      dayIcon.classList.add("bi-brightness-high-fill");
    }
  });

  


  const langToggle = document.querySelector("#lang-toggle");
  const langMenu = document.querySelector("#lang-menu");

  langToggle.addEventListener("click", () => {
    langMenu.classList.toggle("show");
  });


  langMenu.addEventListener("click", (event) => {
    if (event.target.dataset.lang){
      const lang = event.target.dataset.lang;
      switchLanguage(lang);
      langToggle.innerHTML = `${lang.toUpperCase()} <i class="bi bi-chevron-down"></i>`;
      langMenu.classList.remove("show");
    }
  });

  
  function switchLanguage(lang) {
    localStorage.setItem("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      const span = element.querySelector("span");
      if(span){
        span.textContent = translations[lang][key] || span.textContent;
      }
       if (element.placeholder !== undefined) {
        element.placeholder = translations[lang][key] || element.placeholder;
      }
      else{
        element.textContent = translations[lang][key] || element.textContent;
      }
  })

  }

  window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    switchLanguage(savedLang);
    langToggle.innerHTML = `${savedLang.toUpperCase()} <i class="bi bi-chevron-down"></i>`;
  });



  const translations={
    en: {
      workBtn: 'Work',
      aboutBtn: 'About',
      contactBtn: 'Contact',

      backBtn: 'Back',
      mainBtn: 'Main',
      nextBtn: 'Next',

      aboutmeTitle: 'About me',
      aboutMeContent: 'Hello, I am Ari, a front-end developer and web designer passionate about design, symmetry, and clean user interfaces. I believe that well-crafted layouts not only provide visual stability but also enhance the user experience in subtle, powerful ways. Over the years, I have found a unique balance between design and development, where creativity and logic converge. It is in that middle ground where I feel most at home, turning ideas into engaging and functional experiences for users. I am always seeking opportunities to grow, collaborate with inspiring teams, and create products that make a difference.',
      aboutMeContent2: '"Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below".',

      contactTitle: 'Design.Code.Launch.It all starts with “Hello” :)',
      placeholderName: 'Name',
      placeholderEmail: 'Email',
      placeholderNumber: 'Phone',
      placeholderComment: 'Comment',
      contactSendButton: 'Send',

      
      jgsSubtitle: 'A React-based minimalist eCommerce built from scratch using Firebase & Context API',
      jgsLinkGitHub: 'View source code → GitHub',
      jgsLinkDemo: 'Live Demo',

      SummaryTitle: 'Summary:',
      GoalTitle: 'Proyect goal:',
      TechTitle: 'Technologies used:',
      RoleTitle: 'My role:',
      ChallengeTitle: 'Challenges and solutions:',
      LearnTitle: 'What I learned:',
      
      jgsSummaryContent: 'Just Good Stuff is a fictional online clothing store I built as my final bootcamp project. The goal was to create a realistic web app that could also be presented to a development agency in Argentina, showcasing both frontend skills and integration with external services.',

      jgsGoalContent: 'The main challenge was to build a modern, fast, and responsive online store that features:',
      jgsGoalContent_a: 'A dynamic product catalog',
      jgsGoalContent_b: 'Shopping cart functionality',
      jgsGoalContent_c: 'Category filters',
      jgsGoalContent_d: ' A smooth, reload-free user experience',
      
      jgsRoleContent: 'I developed the entire project from scratch',
      jgsRoleContent_a: 'Designed the UI/UX',
      jgsRoleContent_b: 'Built responsive and semantic layout',
      jgsRoleContent_c: 'Implemented dynamic routing (/item/:itemId,/category/:categoryId)',
      jgsRoleContent_d: 'Developed global cart logic using Context API',
      jgsGoalContent_e: 'Integrated Firebase for order storage and checkout functionality',
      
      jgsChallengeContent: 'The main challenge was keeping dynamic routing for categories and product pages fully in sync while maintaining a consistent global cart state. I solved this using React Router for dynamic routes and Context API for state management I also implemented a checkout system that stores each order in Firebase with a unique ID.',

      jgsLearn_a: 'Modular architecture in React',
      jgsLearn_b: 'Global state management with Context API',
      jgsLearn_c: 'Front-end integration with cloud services (Firebase)',
      jgsLearn_d: 'SPA routing best practices', 
      jgsLearn_e: 'Professional workflow using npm and continuous deployment',

      tuviniloSubtitle: 'A clean and minimalist vinyl record eCommerce with dynamic cart and smooth navigation',
      tuviniloSummaryContent: 'TuVinilo is an online vinyl record store designed for music lovers. The platform allows users to browse a curated collection of records, add them to their cart, and complete their purchase with ease. The design emphasizes a clean and minimalist aesthetic, featuring a hidden but accessible cart and navigation bar for an intuitive user experience.',
      tuviniloGoalContent: 'The main objective was to create a visually appealing and functional eCommerce experience that captures the vibe of vinyl culture. The focus was on smooth navigation and an interface that feels as nostalgic and enjoyable as listening to records.',
      tuviniloRoleContent: 'I handled the entire development process—from UI/UX design to implementing core features like the shopping cart and dynamic navigation. Special care was taken to ensure the user journey was seamless, balancing aesthetics with usability across all devices.',
      tuviniloChallengeContent: 'One of the key challenges was creating an intuitive layout while keeping the interface visually clean. I implemented hidden-yet-accessible navigation and cart elements, which required thoughtful design and coding solutions. This project helped me refine my skills in user-centered design and strengthened my ability to merge visual design with interactive functionality.',

      destineaSubtitle: 'A modern travel agency website built with Bootstrap, focused on responsive design and usability',
      destineaSummaryContent: 'Destinea is a travel agency website designed to showcase the layout and styling capabilities of Bootstrap. The site features a clean and modern design, emphasizing usability and responsiveness across devices. It serves as a demonstration of how Bootstrap can be utilized to create a visually appealing and functional travel website.',
      destineaGoalContent: 'The primary objective was to create a travel agency website that highlights the design and layout features of Bootstrap. The focus was on demonstrating how Bootstrap`s grid system and components can be leveraged to build a responsive and user-friendly website.',
      destineaRoleContent: 'I was responsible for the entire development process, from structuring the HTML and applying CSS styles to implementing Bootstrap components. The goal was to create a site that not only showcases Bootstrap`s capabilities but also provides a seamless user experience.',
      destineaChallengeContent: 'One of the main challenges was ensuring that the website was fully responsive and provided an optimal viewing experience across various devices. By utilizing Bootstrap`s` grid system and responsive utilities, I was able to create a layout that adapts to different screen sizes. This project enhanced my understanding of responsive web design and the practical application of Bootstrap`s features.',  

      readmeappSubtitle: 'A fast and enjoyable app for reading- Case study',
      readmeappSummaryContent: 'This is a speed reading app designed for users with little time or who want to improve their reading habits in a fun and purposeful way. It is a UX/UI project where the main objective and focus is to provide a great user experience.',

    },

    es: {
      workBtn: 'Trabajos',
      aboutBtn: 'Sobre mi',
      contactBtn: 'Contacto',

      backBtn: 'Atras',
      mainBtn: 'Inicio',
      nextBtn: 'Siguiente',


      aboutmeTitle: 'Sobre mi',
      aboutMeContent: 'Hola, soy Ari, Desarrollador Front-End y Diseñador web. Soy un apasionado del diseño, la simetría y las interfaces limpias, claras y funcionales. Creo que los diseños bien elaborados no sólo proporcionan estabilidad visual, sino que también mejoran la experiencia del usuario de manera sutil y poderosa. A lo largo de los años, he encontrado el equilibrio entre el diseño y desarrollo, donde la creatividad y la lógica se unen y se fusionan. En ese punto intermedio es donde me siento más a gusto, convirtiendo ideas en experiencias atractivas y funcionales para los usuarios. Siempre estoy buscando oportunidades para crecer, avanzar, aprender, colaborar con equipos inspiradores y crear productos que marquen la diferencia.',
      aboutMeContent2: '"Debajo de la superficie de la máquina, el programa se mueve. Sin esfuerzo, se expande y contrae. En gran armonía, los electrones se dispersan y se reagrupan. Las formas en el monitor no son más que ondas en el agua. Detrás, la esencia permanece invisible."',

      contactTitle: 'Diseño.Código.Iniciar.Todo empieza con un “Hola” :)',
      placeholderName: 'Nombre',
      placeholderEmail: 'Email',
      placeholderNumber: 'Teléfono',
      placeholderComment: 'Comentarios',
      contactSendButton: 'Enviar',

      
      jgsSubtitle:'Un eCommerce minimalista basado en React construido desde cero usando Firebase y Context API',
      jgsLinkGitHub: 'Ver código fuente → GitHub',
      jgsLinkDemo: 'Ver Demo',

      SummaryTitle: 'Resumen:',
      GoalTitle: 'Objetivo:',
      TechTitle: 'Tecnologías utilizadas:',
      GoalTitle: 'Objetivo:',
      RoleTitle: 'Mi rol: ',
      ChallengeTitle: 'Desafíos y soluciones:',
      LearnTitle: 'Mi Aprendizaje: ',
      
      jgsSummaryContent: 'JustGoodStuff es una tienda de productos online ficticia que construí como proyecto final del bootcamp. El objetivo era crear una aplicación web realista que también pudiera ser presentada a una agencia de desarrollo en Argentina, mostrando tanto las habilidades frontales como la integración con servicios externos.',

      jgsGoalContent: 'El principal reto consistía en crear una tienda online moderna, rápida y con capacidad de respuesta:',
      jgsGoalContent_a: 'Solo cosas buenas',
      jgsGoalContent_b: 'Solo cosas buenas',
      jgsGoalContent_c: 'Solo cosas buenas',
      jgsGoalContent_d: 'Solo cosas buenas',
      
      jgsRoleContent: 'He desarrollado todo el proyecto desde cero:',
      jgsRoleContent_a: 'Diseño completo de UI/UX',
      jgsRoleContent_b: 'Diseño responsive',
      jgsRoleContent_c: 'He implementado el enrutamiento dinámico (/item/:itemId,/category/:categoryId)',
      jgsRoleContent_d: 'He desarrollado la lógica global del carrito utilizando Context API',
      jgsGoalContent_e: 'He integrado Firebase para el almacenamiento de pedidos y la funcionalidad de pago',
      
      jgsChallengeContent: 'El principal reto fue mantener el enrutamiento dinámico de categorías y páginas de producto completamente sincronizado, a la vez que se mantenía un estado global del carrito consistente. Lo resolví usando React Router para rutas dinámicas y la API de contexto para la gestión del estado. También implementé un sistema de pago que almacena cada pedido en Firebase con un ID único.',

      jgsLearn_a: 'Arquitectura modular en React',
      jgsLearn_b: 'Gestión del estado global con Context API',
      jgsLearn_c: 'Integración del front-end con servicios en la nube (Firebase)', 
      jgsLearn_d: 'Mejores prácticas de enrutamiento en SPA',
      jgsLearn_e: 'Flujo de trabajo profesional usando npm y despliegue continuo',

      tuviniloSubtitle: 'Un eCommerce de discos de vinilo limpio y minimalista con carrito dinámico y navegación fluida',
      tuviniloSummaryContent: 'Tu Vinilo es una tienda online de discos de vinilo diseñada para los amantes de la música. La plataforma permite a los usuarios navegar por una cuidada colección de discos, añadirlos al carrito y completar su compra con facilidad. El diseño enfatiza una estética limpia y minimalista, con un carrito y una barra de navegación ocultos pero accesibles para una experiencia de usuario intuitiva.',
      tuviniloGoalContent: 'El objetivo principal era crear una experiencia de eCommerce visualmente atractiva y funcional que capturara la esencia de la cultura del vinilo. El enfoque estaba en una navegación fluida y una interfaz que se sintiera tan nostálgica y agradable como escuchar discos.',
      tuviniloRoleContent: 'Me encargué de todo el proceso de desarrollo, desde el diseño de UI/UX hasta la implementación de funciones clave como el carrito de compras y la navegación dinámica. Se prestó especial atención a garantizar que el recorrido del usuario fuera fluido, equilibrando la estética con la usabilidad en todos los dispositivos.',
      tuviniloChallengeContent: 'Uno de los principales desafíos fue crear un diseño intuitivo manteniendo la interfaz visualmente limpia. Implementé elementos de navegación y carrito ocultos pero accesibles, lo que requirió soluciones de diseño y codificación cuidadosas. Este proyecto me ayudó a perfeccionar mis habilidades en diseño centrado en el usuario y fortaleció mi capacidad para fusionar el diseño visual con la funcionalidad interactiva.',

      destineaSubtitle: 'Un sitio web moderno de agencia de viajes construido con Bootstrap, enfocado en el diseño responsivo y la usabilidad',
      destineaSummaryContent: 'Destinea es un sitio web de agencia de viajes diseñado para mostrar las capacidades de diseño y maquetación de Bootstrap. El sitio cuenta con un diseño limpio y moderno, enfatizando la usabilidad y la capacidad de respuesta en todos los dispositivos. Sirve como una demostración de cómo se puede utilizar Bootstrap para crear un sitio web de viajes visualmente atractivo y funcional.',
      destineaGoalContent: 'El objetivo principal era crear un sitio web de agencia de viajes que destacara las características de diseño y maquetación de Bootstrap. El enfoque estaba en demostrar cómo se puede aprovechar el sistema de cuadrícula y los componentes de Bootstrap para construir un sitio web receptivo y fácil de usar.',  
      destineaRoleContent: 'Fui responsable de todo el proceso de desarrollo, desde estructurar el HTML y aplicar estilos CSS hasta implementar componentes de Bootstrap. El objetivo era crear un sitio que no solo mostrara las capacidades de Bootstrap, sino que también proporcionara una experiencia de usuario fluida.',
      destineaChallengeContent: 'Uno de los principales desafíos fue garantizar que el sitio web fuera completamente receptivo y proporcionara una experiencia de visualización óptima en varios dispositivos. Al utilizar el sistema de cuadrícula y las utilidades responsivas de Bootstrap, pude crear un diseño que se adapta a diferentes tamaños de pantalla. Este proyecto mejoró mi comprensión del diseño web responsivo y la aplicación práctica de las características de Bootstrap.',

      readmeappSubtitle: 'Una aplicación rápida y divertida para leer -Caso de estudio',
      readmeappSummaryContent: 'Esta es una aplicación de lectura rápida diseñada para usuarios con poco tiempo o que desean mejorar sus hábitos de lectura de una manera divertida y con propósito. Es un proyecto de UX/UI donde el objetivo principal y el enfoque es proporcionar una gran experiencia de usuario.',
    }
  }


  
});
