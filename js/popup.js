const cookieContainer = document.querySelector('.cookie-container');
const cookieBtn = document.querySelector(".cookie-button");

cookieBtn.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("TopCoders_Cookie", "true");
});

setTimeout( () => {
  if(!localStorage.getItem("TopCoders_Cookie")){
    cookieContainer.classList.add("active");
  }
}, 2000);
