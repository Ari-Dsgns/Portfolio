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
  let containerTitle = document.querySelector(".container-title");

  let menuBtn = document.querySelector(".menuButton");

  menuBtn.addEventListener("click", () => {
    brand.style.display = "none";
    portfolioBox.style.display = "none";

  });

  let backBtn = document.querySelector(".backButton");

  backBtn.addEventListener("click", () => {
    containerTitle.classList.remove("hidden");
    workContainer.classList.remove("active");
    about.classList.remove("active");
    contact.classList.remove("active");
    backBtn.classList.remove("visible");
    list.classList.remove("hidden");

  });

  let workBtn = document.querySelector(".work-btn");

  workBtn.addEventListener("click", () => {
    backBtn.classList.add("visible");
    card1.classList.add("selected");
    containerTitle.classList.add("hidden");
    workContainer.classList.add("active");
    list.classList.add("hidden");
    justGoodStuffContent.style.display = "flex";  
  });

  let contactBtn = document.querySelector(".contact-btn");
  let contact = document.querySelector(".container-contact ");

  contactBtn.addEventListener("click", () => {

    contact.classList.add("active");
  });

  let aboutBtn = document.querySelector(".about-btn");
  let about = document.querySelector(".container-about-me");

  aboutBtn.addEventListener("click", () => {
    about.classList.add("active");
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
