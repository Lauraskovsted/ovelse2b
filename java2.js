document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Siden er loaded");
  //gør muligt at tilføje section
  let mainSection = document.querySelector("section");

  //ny article til section
  let newArticle = document.createElement("article");

  //tilføjer article til section
  mainSection.appendChild(newArticle);

  //Laver nyt billede element
  let billede2 = document.createElement("img");
  billede2.src = "golf.png";
  billede2.alt = "en person spiller golf";
  newArticle.appendChild(billede2);

  //laver ny overskrift tag
  let titel = document.createElement("h3");

  //laver tekst til ny overskrift
  let overskrifttekst = document.createTextNode("Article 3");

  //Tilføjer overskriftens tekst til overskrift
  titel.appendChild(overskrifttekst);

  //tilføjer titlen/overskriften til artiklen
  newArticle.appendChild(titel);

  //Laver text element
  let text2 = document.createElement("p");

  //Laver text indholdet
  let text2indhold = document.createTextNode("Hej med dig det her er øvelse 4");

  //Tilføjer text indholdet til text tagget (appendChild, gør at man tilføjer et barn til det man skriver før).
  text2.appendChild(text2indhold);

  //tilføjer teksten til article
  newArticle.appendChild(text2);
}

const f1 = document.querySelector("#foto1");
f1.addEventListener("click", billedeSkift);

// const tilfaeldigtTal = Math.floor(Math.random() * 11);

function billedeSkift() {
  foto1.src = "https://placeimg.com/400/300/arch?t=";
}

const artikel = document.querySelector("article");

artikel.addEventListener("mouseover", toggleShadow);
artikel.addEventListener("mouseout", toggleShadow);

function toggleShadow() {
  artikel.classList.toggle("shadow");
}
