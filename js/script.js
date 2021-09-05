var carrinho = document.querySelector(".carrinho");
var menuOpen = document.querySelector(".menu-open");
var fecharCarrinho = document.querySelector("#fechar-carrinho");
var fecharPedido = document.querySelector(".fechar-pedido");
carrinho.addEventListener("click", function (){
    menuOpen.style.display = "block";
})

fecharCarrinho.addEventListener("click", function(){
    menuOpen.style.display = "none";
})

fecharPedido.addEventListener("click", function(){
    menuOpen.style.display = "none"
} )