$liste = document.getElementById("liste");
$texte = document.getElementById("texte");
$ajouter = document.getElementById("btnAjout");
$annuler = document.getElementById("btnAnnul");


var tableau = ["Bob", "Julien", "Roger"];

function afficherListe() {
    elements = "";
    for (i = 0; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    liste.innerHTML = elements;
}

function ajouter() {
  tableau.push(texte.value);
  document.getElementById("texte").value=""
  afficherListe();
}

function annuler() {
  tableau.pop();
  afficherListe();
}

$ajouter.onclick =  ajouter;
$annuler.onclick =  annuler;

afficherListe();




