let page = window.location.pathname.split("/").pop();
let liens = document.querySelectorAll("nav a");
 
for (let i = 0; i < liens.length; i++) {
    let lien = liens[i];
    let cible = lien.getAttribute("href").split("/").pop();
 
    if (cible === page) {
        lien.classList.add("actif");
    }
}




let formulaire = document.querySelector(".formu form");
 
if (formulaire) {
    formulaire.addEventListener("submit", function (e) {
        e.preventDefault(); // on bloque l'envoi réel
       alert("Votre message a bien été envoyé. Merci !");
        formulaire.reset();
    });
}