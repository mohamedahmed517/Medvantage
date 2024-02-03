const icon = document.querySelector(".parent");
const navbar = document.querySelector(".navbar ul");
const child_icon = document.querySelector(".parent").children;

icon.addEventListener("click",()=>{
    navbar.classList.toggle("open");
    child_icon.item(0).classList.toggle("first-line");
    child_icon.item(1).classList.toggle("second-line");
    child_icon.item(2).classList.toggle("last-line");
});