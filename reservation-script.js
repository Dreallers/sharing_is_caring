// JAVASCRIPT RESERVATION & FORMULAIRE ALEXANDRA //

document.getElementById("contactForm").addEventListener("submit", function (event){
event.preventDefault ();



const name = document.getElementById ("name").value;
const email = document.getElementById ("email").value;
const message = document.getElementById ("message").value;



if (name === "" || email === "" || message === "") {
alert('Formulaire invalide. Veuillez remplir tous les champs.');
} else {
alert('Merci pour votre message. Nous reviendrons vers vous rapidement !');
}

});