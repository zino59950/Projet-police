// Gestionnaire d'événement pour le bouton "OH UN REVENANT"
document.getElementById("compteButton").addEventListener("click", function() {
    redirectToCompte();
});

// Gestionnaire d'événement pour le bouton "LET'S GO"
document.getElementById("letsGoButton").addEventListener("click", function() {
    redirectToInscription();
});

// Fonction pour rediriger vers la page compte.html
function redirectToCompte() {
    window.location.href = "compte.html";
}

// Fonction pour rediriger vers la page inscription.html
function redirectToInscription() {
    window.location.href = "inscription.html";
}
