document.addEventListener("DOMContentLoaded", () => {
  let mainContainer = document.querySelector(".main-container");
  let navBar = document.querySelector(".navbar");
  let list = document.querySelector(".list");

  let noise = document.querySelector(".noise");

  let noiseBtn = document.querySelector("#noise-btn");

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
  let containerFlow = document.querySelector(".container-flow");

  let menuBtn = document.querySelector(".menuButton");

  menuBtn.addEventListener("click", () => {
    brand.style.display = "none";
    portfolioBox.style.display = "none";

  });

  let backBtn = document.querySelector(".backButton");

  backBtn.addEventListener("click", () => {

    list.style.display = "flex";
    portfolioBox.style.display = "flex";
    brand.style.display = "flex";
    contact.style.display = "none";
    about.style.display = "none";
    workContainer.style.display = "none";

    backBtn.classList.remove("visible");
    justGoodStuffContent.style.display = "none";
    containerFlow.style.display = "flex";
    containerCards.style.display = "none";
    list.style.display = "flex";
    
    card1.classList.remove("selected"); 

  });

  let workBtn = document.querySelector(".work-btn");

  workBtn.addEventListener("click", () => {
    
    portfolioBox.style.display = "none";
    brand.style.display = "none";
    backBtn.classList.add("visible");
    card1.classList.add("selected");
    justGoodStuffContent.style.display = "flex";
    containerFlow.style.display = "none";
    workContainer.style.display = "flex";
    containerCards.style.display = "flex";
    list.style.display = "none";
   
  });

  let contactBtn = document.querySelector(".contact-btn");
  let contact = document.querySelector(".contact");

  contactBtn.addEventListener("click", () => {
    
    portfolioBox.style.display = "none";
    brand.style.display = "none";
    contact.style.display = "flex";
    list.style.display = "none";
    backBtn.classList.add("visible");
  });

  let aboutBtn = document.querySelector(".about-btn");
  let about = document.querySelector(".about-me");

  aboutBtn.addEventListener("click", () => {
    

    portfolioBox.style.display = "none";
    brand.style.display = "none";
    about.style.display = "flex";
    list.style.display = "none";
    backBtn.classList.add("visible");
    
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
