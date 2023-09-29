const slide = ["slide2.jpg", "computer-1.jpg", "nature.jpg"];
let numero = 0;


function changeSlide(sens) {
    numero = numero + sens;
    if (numero > 2)
        numero = 0;
    if (numero < 0)
        numero = 2;
    document.getElementById("slide").src = "images/" + slide[numero];
}

setInterval("changeSlide(1)", 4000) 





const chat = document.querySelector(messageBot);

    chat = alert("j'ai cliqué");