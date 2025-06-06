document.addEventListener("DOMContentLoaded", () => {

  let mainContainer = document.querySelector(".main-container");
  let savedTheme = localStorage.getItem("theme");
  let savedNoise = localStorage.getItem("noise");
  let noise = document.querySelector(".noise");

  let container = document.querySelector(".container");
  let navBar = document.querySelector(".navbar");
  let list = document.querySelector(".list");
  let noiseBtn = document.querySelector("#noise-btn");
  let darkBtn = document.querySelector("#dark-btn");
  let icon = darkBtn.querySelector("i");

  


  


  if (savedTheme === "night") {
    mainContainer.classList.add("night");
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

  let moon= document.querySelector(".moon");
  darkBtn.addEventListener("click", () => {
    mainContainer.classList.toggle("night");
    
    
    if (mainContainer.classList.contains("night")) {
      localStorage.setItem("theme", "night");
      moon.style.animation = "moon 20s";
      icon.classList.remove("bi-brightness-high");
      icon.classList.add("bi-brightness-high-fill");
      

    } else {
      localStorage.setItem("theme", "day");
      moon.style.animation = "none";

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

  
  
  let workContainer = document.querySelector(".work-container");
  let detailContainer= document.querySelector(".cardsDetail-container");
  let cardsContainer = document.querySelector(".cards-container");
  let containerTitle = document.querySelector(".container-title");


  document.querySelector(".cardsDetail-container").addEventListener("click", (e) => {
    if (e.target.classList.contains("back-to-works")) {
      navBar.style.display = "flex";
      container.style.height = "70%";
      cardsContainer.style.display = "flex";
      detailContainer.style.display = "none";
      backBtn.classList.add("visible");
    }
  });

  document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const message = document.getElementById("form-message");
  message.textContent = "Mensaje enviado correctamente.";
});


 

  

  

    
  
    

  

  

  
  

  

  

  

  
  

  


});



