document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body");
  let mainContainer = document.querySelector(".main-container");
  let container = document.querySelector(".container");
  let navBar = document.querySelector(".navbar");
  let list = document.querySelector(".list");
  let loading = document.querySelector(".loading");

  let noise = document.querySelector(".noise");

  let noiseBtn = document.querySelector("#noise-btn");

  setTimeout(() => {
    navBar.style.display = "none";
    container.style.display = "none";
  }, 0);

  setTimeout(() => {   
     navBar.style.display = "flex";
      container.style.display = "flex"; 
      loading.style.display = "none";
  }, 3000); 

  
  

  noiseBtn.addEventListener("click", () => {
    if (noise.classList.contains("clean")) {
      noiseBtn.classList.remove("on");
    } else {
      noiseBtn.classList.add("on");
    }
    cleanNoise();
  });

  let darkBtn = document.querySelector("#dark-btn");
  let icon = darkBtn.querySelector("i");

  darkBtn.addEventListener("click", () => {
    mainContainer.classList.toggle("night");

    if (mainContainer.classList.contains("night")) {
      icon.classList.remove("bi-brightness-high");
      icon.classList.add("bi-brightness-high-fill");
    } else {
      icon.classList.remove("bi-brightness-high-fill");
      icon.classList.add("bi-brightness-high");
    }
  });

  function cleanNoise() {
    if (noise.classList.contains("clean")) {
      noise.classList.remove("clean");
    } else {
      noise.classList.add("clean");
    }
  }

  let portfolioBox = document.querySelector(".portfolio-box");
  let brand = document.querySelector(".brand");
  let workContainer = document.querySelector(".work-container");
  let containerTitle = document.querySelector(".container-title");


  let backBtn = document.querySelector(".backButton");

  backBtn.addEventListener("click", () => {
    containerTitle.classList.remove("hidden");
    workContainer.classList.remove("active");
    about.classList.remove("active");
    contact.classList.remove("active");
    backBtn.classList.remove("visible");
    list.classList.remove("hidden");
    menuBtn.style.display = "flex";
  });

  let workBtn = document.querySelector(".work-btn");

  workBtn.addEventListener("click", () => {
    
    
    card1.classList.add("selected");
    justGoodStuffContent.style.display = "flex";
    tuviniloContent.style.display = "none";
    destineaContent.style.display = "none";
    readmeappContent.style.display = "none";
    list.classList.add("hidden");
    card2.classList.remove("selected");
    card3.classList.remove("selected");
    card5.classList.remove("selected");
    
    backBtn.classList.add("visible");
    containerTitle.classList.add("hidden");
    workContainer.classList.add("active");
    menuBtn.style.display = "none"; 

    if(workContainer.classList.contains("active")){
      list.classList.add("hidden");
    }
  });

  

  let contactBtn = document.querySelector(".contact-btn");
  let contact = document.querySelector(".container-contact ");

  contactBtn.addEventListener("click", () => {
    list.classList.add("hidden");
    containerTitle.classList.add("hidden");
    contact.classList.add("active");
    backBtn.classList.add("visible");
    menuBtn.style.display = "none";
  });

  let aboutBtn = document.querySelector(".about-btn");
  let about = document.querySelector(".container-about-me");

  aboutBtn.addEventListener("click", () => {
    list.classList.add("hidden");
    containerTitle.classList.add("hidden");
    about.classList.add("active");
    backBtn.classList.add("visible");
    menuBtn.style.display = "none";
  });

    
  
    

  

  

  
  let containerCards = document.querySelector(".cardsDetail-container");

  let card1 = document.querySelector("#card1");
  let card2 = document.querySelector("#card2");
  let card3 = document.querySelector("#card3");
  let card4 = document.querySelector("#card4");
  let card5 = document.querySelector("#card5");
  let card6 = document.querySelector("#card6");

  let justGoodStuffContent = document.querySelector(".justgoodstuff-content");
  let tuviniloContent = document.querySelector(".tuvinilo-content");
  let destineaContent = document.querySelector(".destinea-content");
  let readmeappContent = document.querySelector(".readmeapp-content");

  

  card1.addEventListener("mouseover", () => {
    justGoodStuffContent.style.display = "flex";
    tuviniloContent.style.display = "none";
    destineaContent.style.display = "none";
    readmeappContent.style.display = "none";

    card1.classList.add("selected");
    card2.classList.remove("selected");
    card3.classList.remove("selected");
    card5.classList.remove("selected");
    

  });

  card2.addEventListener("mouseover", () => {
    tuviniloContent.style.display = "flex";
    justGoodStuffContent.style.display = "none";
    destineaContent.style.display = "none";
    readmeappContent.style.display = "none";

    card2.classList.add("selected");
    card1.classList.remove("selected");
    card3.classList.remove("selected");
    card5.classList.remove("selected");
  });

  card3.addEventListener("mouseover", () => {
    destineaContent.style.display = "flex";
    tuviniloContent.style.display = "none";
    justGoodStuffContent.style.display = "none";
    readmeappContent.style.display = "none";

    card3.classList.add("selected");
    card1.classList.remove("selected");
    card2.classList.remove("selected");
    card5.classList.remove("selected");
    
  });

  card5.addEventListener("mouseover", () => {
    readmeappContent.style.display = "flex";
    justGoodStuffContent.style.display = "none";
    tuviniloContent.style.display = "none";
    destineaContent.style.display = "none";

    card5.classList.add("selected");
    card3.classList.remove("selected");
    card1.classList.remove("selected");
    card2.classList.remove("selected");
  });
});


