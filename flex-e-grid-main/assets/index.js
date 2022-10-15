const btMenu = document.querySelector(".cabecalho__menu");
const menu    = document.querySelector(".menu-lateral");
btMenu.addEventListener("click", function (){
    menu.classList.toggle("menu-lateral--ativo");   //o metodo toogle ele tira ou coloca na lista 
});