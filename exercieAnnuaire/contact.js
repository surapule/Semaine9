$liste = document.getElementById("liste");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$numero = document.getElementById("btnAjout");
$ajouter = document.getElementById("btnAjouter");
$research = document.getElementById("research");
$search = document.getElementById("search");
$result = document.getElementById("result");


contacts = [{
	prenom: 'alex',
  nom: 'Depem',
  numero: '06.25.24.21.23'
}, {
	prenom: 'John',
  nom: 'Smith',
  numero: '06.25.24.21.23'
}, {
	prenom: 'Jorge',
  nom: 'Ramirez',
  numero: '06.25.24.21.23'
}, {
	prenom: 'Jean',
  nom: 'Pain',
  numero: '06.25.24.21.23'
}];

function texteContact(contact) {
  return contact.prenom + " " + contact.nom + " Tel : " + contact.numero;
  };

function afficherListe() {
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $liste.innerHTML = elements;
};

function ajouter() {
  contacts.push( {
    prenom : prenom.value, 
    nom: nom.value, 
    numero : numero.value
  });
  
  afficherListe();
};

function rechercher() {
  recherche = $research.value;
  elements ="";
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].prenom == recherche || contacts[i].nom == recherche || contacts[i].numero == recherche) {
      elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
  }
  $result.innerHTML = elements;
}

$ajouter.onclick = ajouter;
$search.onclick = rechercher;
afficherListe();



