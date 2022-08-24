//Laver konstanter
let overskrift = document.querySelector("h1");
overskrift.textContent = "Billede";
overskrift.innerHTML = "<h1>noget andet</h1>";

//udskift overskrift h3
const lilleo = document.querySelector("h3");
lilleo.textContent = "Artikel overskrift";

const tekst = document.querySelector("p");
tekst.textContent = "tekst til artikler";
console.log(tekst);

//Ændring af billede
const pic1 = document.querySelector("article:nth-child(1) img");
console.log(pic1);
pic1.src = "golf.png";
pic1.alt = "en person spiller golf";

// const underoverskrift = document.querySelector("h2");
// console.log(underoverskrift);
// const foto = document.querySelector("img");
// console.log(foto);

// const footer = document.querySelector("footer");
// console.log(footer);
