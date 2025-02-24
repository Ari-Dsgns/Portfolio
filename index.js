document.addEventListener("DOMContentLoaded", () => {
  
  let mainContainer = document.querySelector(".main-container");
  let navBar = document.querySelector(".navbar");
  let list = document.querySelector(".list");

  let noise = document.querySelector(".noise");
  let brighterBtn = document.querySelector("#bright-btn");

  let noiseBtn = document.querySelector("#noise-btn");

  noiseBtn.addEventListener("click", cleanNoise);
  brighterBtn.addEventListener("click", brighter);

  let sunsetBtn = document.querySelector("#sunset-style-btn");
  sunsetBtn.addEventListener("click",()=>{
    
    mainContainer.classList.remove("night");
    mainContainer.classList.remove("japan");
    
  })

  let nightBtn = document.querySelector("#night-style-btn");
      nightBtn.addEventListener("click", ()=>{
        mainContainer.classList.add("night");
        mainContainer.classList.remove("japan");
        mainContainer.classList.remove("sunset");

        
    });

  let jpnBtn = document.querySelector("#jpn-style-btn");
  jpnBtn.addEventListener("click", ()=>{

    jpnBtn.classList.toggle("picked");
    mainContainer.classList.add("japan");
    mainContainer.classList.remove("night");
    mainContainer.classList.remove("sunset");
  });

  function cleanNoise(){
      if(noise.classList.contains("clean")){
          noise.classList.remove("clean");
      }else{
          noise.classList.add("clean");
      }
  }

  function brighter(){
      if(mainContainer.classList.contains("brighter")){
          mainContainer.classList.remove("brighter");
      }else{     
      mainContainer.classList.add("brighter");
      }
  }
  let portfolio = document.querySelector(".portfolio");
  let portfolio1 = document.querySelector(".portfolio1");
  let brand = document.querySelector(".brand");

 let workBtn = document.querySelector(".work-btn");
 workBtn.addEventListener("click", showOff); 

 let contactBtn = document.querySelector(".contact-btn");
 let contact = document.querySelector(".contact");
  contactBtn.addEventListener("click", ()=>{
    showOff();
    contact.classList.add("visible");
    about.classList.remove("visible");
    list.style.display="none";
    closeBtn.style.display="inline";
    

    
  });

  let aboutBtn = document.querySelector(".about-btn");
  let about = document.querySelector(".about-me");
  aboutBtn.addEventListener("click", ()=>{
    showOff();
    about.classList.add("visible");
    contact.classList.remove("visible");
    list.style.display="none";
    closeBtn.style.display="inline";
  });
 
  
  let closeBtn = document.querySelector("#close");
  closeBtn.addEventListener("click", ()=>{
    showOn();
    list.style.display="flex";
    contact.classList.remove("visible"); 
    about.classList.remove("visible");
    closeBtn.style.display="none";
  
  });

 function showOff(){
    portfolio.style.left = "-1300px";
    portfolio1.style.left = "1900px";
    brand.style.left = "-600px";
    closeBtn.style.display="none";
 }
 

 function showOn(){
    portfolio.style.left = "10px";
    portfolio1.style.left = "28px";
    brand.style.left = "30px";
 }
  
  
});