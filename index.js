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

      jgsSummaryTitle: 'Summary:',
      jgsSummaryContent: 'Just Good Stuff is a fictional online clothing store I built as my final bootcamp project. The goal was to create a realistic web app that could also be presented to a development agency in Argentina, showcasing both frontend skills and integration with external services.',

      jgsGoalTitle: 'Proyect goal:',
      jgsGoalContent: 'The main challenge was to build a modern, fast, and responsive online store that features:',
      jgsGoalContent_a: 'A dynamic product catalog',
      jgsGoalContent_b: 'Shopping cart functionality',
      jgsGoalContent_c: 'Category filters',
      jgsGoalContent_d: ' A smooth, reload-free user experience',
      
      jgsTechTitle: 'Technologies used:',
      

      jgsRoleTitle: 'My role:',
      jgsRoleContent: 'I developed the entire project from scratch',
      jgsRoleContent_a: 'Designed the UI/UX',
      jgsRoleContent_b: 'Built responsive and semantic layout',
      jgsRoleContent_c: 'Implemented dynamic routing (/item/:itemId,/category/:categoryId)',
      jgsRoleContent_d: 'Developed global cart logic using Context API',
      jgsGoalContent_e: 'Integrated Firebase for order storage and checkout functionality',
      
      jgsChallengeTitle: 'Challenges and solutions:',
      jgsChallengeContent: 'The main challenge was keeping dynamic routing for categories and product pages fully in sync while maintaining a consistent global cart state. I solved this using React Router for dynamic routes and Context API for state management I also implemented a checkout system that stores each order in Firebase with a unique ID.',

      jgsLearnTitle: 'What I learned:',
      jgsLearn_a: 'Modular architecture in React',
      jgsLearn_b: 'Global state management with Context API',
      jgsLearn_c: 'Front-end integration with cloud services (Firebase)',
      jgsLearn_d: 'SPA routing best practices', 
      jgsLearn_e: 'Professional workflow using npm and continuous deployment',


    },

    es: {
      workBtn: 'Trabajos',
      aboutBtn: 'Sobre mi',
      contactBtn: 'Contacto',

      backBtn: 'Atras',
      mainBtn: 'Inicio',
      nextBtn: 'Siguiente',

      aboutMeContent: 'Hola, soy Ari, Desarrollador Front-End y Diseñador web. Soy un apasionado del diseño, la simetría y las interfaces limpias, claras y funcionales. Creo que los diseños bien elaborados no sólo proporcionan estabilidad visual, sino que también mejoran la experiencia del usuario de manera sutil y poderosa. A lo largo de los años, he encontrado el equilibrio entre el diseño y desarrollo, donde la creatividad y la lógica se unen y se fusionan. En ese punto intermedio es donde me siento más a gusto, convirtiendo ideas en experiencias atractivas y funcionales para los usuarios. Siempre estoy buscando oportunidades para crecer, avanzar, aprender, colaborar con equipos inspiradores y crear productos que marquen la diferencia.',
      aboutMeContent2: '"Debajo de la superficie de la máquina, el programa se mueve. Sin esfuerzo, se expande y contrae. En gran armonía, los electrones se dispersan y se reagrupan. Las formas en el monitor no son más que ondas en el agua. Detrás, la esencia permanece invisible."',

      contactTitle: 'Diseño.Código.Lanzamiento.Todo empieza con un “Hola” :)',
      placeholderName: 'Nombre',
      placeholderEmail: 'Email',
      placeholderNumber: 'Teléfono',
      placeholderComment: 'Comentarios',
      contactSendButton: 'Enviar',

      
      jgsSubtitle:'Un eCommerce minimalista basado en React construido desde cero usando Firebase y Context API',
      jgsLinkGitHub: 'Ver código fuente → GitHub',
      jgsLinkDemo: 'Ver Demo',

      jgsSummaryTitle: 'Resumen:',
      jgsSummaryContent: 'JustGoodStuff es una tienda de productos online ficticia que construí como proyecto final del bootcamp. El objetivo era crear una aplicación web realista que también pudiera ser presentada a una agencia de desarrollo en Argentina, mostrando tanto las habilidades frontales como la integración con servicios externos.',

      jgsGoalTitle: 'Objetivo:',
      jgsGoalContent: 'El principal reto consistía en crear una tienda online moderna, rápida y con capacidad de respuesta:',
      jgsGoalContent_a: 'Solo cosas buenas',
      jgsGoalContent_b: 'Solo cosas buenas',
      jgsGoalContent_c: 'Solo cosas buenas',
      jgsGoalContent_d: 'Solo cosas buenas',
      
      jgsTechTitle: 'Tecnologías utilizadas:',
      

      jgsRoleTitle: 'Mi rol: ',
      jgsRoleContent: 'He desarrollado todo el proyecto desde cero:',
      jgsRoleContent_a: 'Diseño completo de UI/UX',
      jgsRoleContent_b: 'Diseño responsive',
      jgsRoleContent_c: 'He implementado el enrutamiento dinámico (/item/:itemId,/category/:categoryId)',
      jgsRoleContent_d: 'He desarrollado la lógica global del carrito utilizando Context API',
      jgsGoalContent_e: 'He integrado Firebase para el almacenamiento de pedidos y la funcionalidad de pago',
      
      jgsChallengeTitle: 'Desafíos y soluciones:',
      jgsChallengeContent: 'El principal reto fue mantener el enrutamiento dinámico de categorías y páginas de producto completamente sincronizado, a la vez que se mantenía un estado global del carrito consistente. Lo resolví usando React Router para rutas dinámicas y la API de contexto para la gestión del estado. También implementé un sistema de pago que almacena cada pedido en Firebase con un ID único.',

      jgsLearnTitle: 'Mi Aprendizaje: ',
      jgsLearn_a: 'Arquitectura modular en React',
      jgsLearn_b: 'Gestión del estado global con Context API',
      jgsLearn_c: 'Integración del front-end con servicios en la nube (Firebase)', 
      jgsLearn_d: 'Mejores prácticas de enrutamiento en SPA',
      jgsLearn_e: 'Flujo de trabajo profesional usando npm y despliegue continuo',

      
      
    }
  }


  
});
