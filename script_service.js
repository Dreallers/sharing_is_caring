function openspace() {
  document.getElementById("img").src = "./images/imgopenspacer.jpg";
  document.getElementById("title").innerHTML = "L'OPENSPACE";
  document.getElementById("openspace").style.color = "#266654";
  document.getElementById("detente").style.color = "white";
  document.getElementById("barista").style.color = "white";
  document.getElementById("restauration").style.color = "white";
  document.getElementsByClassName("txt")[0].innerHTML =
    "<p>Rencontrez et échangez avec des entrepreneurs qui vous ressemblent.<br><br>Un espace de travail pensé pour votre bien-être et votre efficacité. </p>";
  document.getElementsByClassName("italic")[0].innerHTML =
    "<p><br>A votre disposition: Bureaux équipés collectifs et individuels, fibre.</ p>";
}

document.getElementById("openspace").addEventListener("click", openspace);

function detente() {
  document.getElementById("img").src = "./images/imgdetenter.jpg";
  document.getElementById("title").innerHTML = "DETENTE";
  document.getElementById("detente").style.color = "#266654";
  document.getElementById("openspace").style.color = "white";
  document.getElementById("barista").style.color = "white";
  document.getElementById("restauration").style.color = "white";
  document.getElementsByClassName("txt")[0].innerHTML =
    "<p>Afin de garder une bonne dynamique dans votre travail tout au long de la journée, pensez à venir vous reposer dans notre espace détente.<br><br>Profitez de nos fauteuils et canapés, baby-foot, flipper et coin lecture.</p>";
  document.getElementsByClassName("italic")[0].innerHTML = "";
}

document.getElementById("detente").addEventListener("click", detente);

function barista() {
  document.getElementById("img").src = "./images/imgbaristar.jpg";
  document.getElementById("title").innerHTML = "BARISTA";
  document.getElementById("barista").style.color = "#266654";
  document.getElementById("detente").style.color = "white";
  document.getElementById("openspace").style.color = "white";
  document.getElementById("restauration").style.color = "white";
  document.getElementsByClassName("txt")[0].innerHTML =
    "<p>Besoin de faire une pause ?<br /><br />Retrouvez toute la journée Harold, notre barista, qui vous servira boissons chaudes, jus de fruits frais, et autres gourmandises pour vous maintenir dans des conditions propices à l'efficacité. <br><br>Coffee bar ouvert toute la journée.</p>";
  document.getElementsByClassName("italic")[0].innerHTML = "";
}

document.getElementById("barista").addEventListener("click", barista);

function restauration() {
  document.getElementById("img").src = "./images/imgrestor.jpg";
  document.getElementById("title").innerHTML = "RESTAURATION";
  document.getElementById("restauration").style.color = "#266654";
  document.getElementById("detente").style.color = "white";
  document.getElementById("barista").style.color = "white";
  document.getElementById("openspace").style.color = "white";
  document.getElementsByClassName("txt")[0].innerHTML =
    "Nos plats sont concoctés à partir de produits frais et locaux.<br><br>Le menu sera affiché chaque semaine devant le restaurant ainsi que sur notre page instagram.<br/><br/><strong>OUVERTURE : 12H - 14H</strong>";
  document.getElementsByClassName("italic")[0].innerHTML = "";
}

document.getElementById("restauration").addEventListener("click", restauration);
