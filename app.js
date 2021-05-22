// Les variables qui stock mes bouts de phrases
let homerTalks = {
    debut: [
        "Spider-cochon, spider-cochon",
        "Ouh Pinaise",
        "youaaaaah",
        "Trop bieeeen",
        "Je veux voiiiir",
    ],
    milieu: [
        "est-ce qu'y peuuuuut marcher au plafond?",
        "est-ce qu'y peuuuut faire une toile?",
        "est-ce qu'y peuuuut danser?",
        "est ce qu'y peuuuut chanter?",
        "si ce n'était pas un chocon il pourrait le faire",
    ],
    fin: [
        "bien sûr que non, c'est un cochon",
        "un jour peut-être",
        "avec un peu d'entreinement oui",
        "avec du temps et de l'exercice",
        "je ne pense pas",
    ],
};

let bartTalks = {
    debut: [
        "D'après, euuux",
        "Ay carambaaaa",
        "Mais tu sais que",
        "Bien sur",
        "Bien évidement",
    ],
    milieu: [
        "Moe explore",
        "le message est clair",
        "Lisa dit toujours",
        "si il pense que tu vas y arriver",
        "Flanders n'est paaaas capable",
    ],
    fin: [
        "Ned se plante",
        "tu as l'intelligence nécessaire et le talent",
        "il ne faut pas négliger ce que maman nous dit toujours",
        "si tu ne fais jamais rien, tu pourras pas y arriver",
        "arrêtons tout de suite cette exploration allons jouer",
    ],
};

// Objet qui reprend le contenu de mes variables (mes bouts de phrases)
class Citation {

    // Constructor méthode qui est utilisée pour créer et initialiser un objet lorsqu'on utilise le mot clé class
    constructor(talks) { 
        this.citation1 = talks.debut;
        this.citation2 = talks.milieu;
        this.citation3 = talks.fin;
    }

    /*Methode qui permet de générer une citation 
    aléatoire en prenant les éléments de mon tableau*/

    longueurElement(elt) {
        // Choisi un nombre aléatoire et l'arrondi
        let citation = Math.floor(Math.random() * elt.length);
        // Retourne la citation
        return citation;
    }

    /*Methode qui assemble les citations bout à bout
    celle-ci permet une concaténation pour former les phrases*/

    genererPhrase() {
        let citation =
            this.citation1[this.longueurElement(this.citation1)] +
            " " +
            this.citation2[this.longueurElement(this.citation2)] +
            " " +
            this.citation3[this.longueurElement(this.citation3)];
        return citation;
    }
}

// Cette fonction permet d'imprimer les citations à l'écran
function printCitations() {
    let container = document.getElementById("citations");
    let typeCitations = document.getElementById("type-generateur").value;
    let nombreCitation = document.getElementById("type-number").value;


    console.log(typeof nombreCitation);

    if (parseInt(nombreCitation) > 5){
        alert("Vous ne pouvez générer que 5 citations");
    }

    
    // Permet de clean le bloc de citation
    container.innerHTML = "";

    // Cette condition permet de choisir si Homer parle ou si Bart parle (ternaire)
    let talk = typeCitations === 1 ? homerTalks : bartTalks
    
    // Sert à générer une ou plusieurs fois une citation
    for (let i = 0; i < nombreCitation; i++) {
        let sentence = new Citation(talk).genererPhrase();
        let element = document.createElement("p");

        element.innerText = sentence;
        element.classList.add("espacement");
        container.appendChild(element);

    // J'utilise le console.log pour afficher les citations dans la console qui reprend le let sentence
        console.log(sentence);
    }

    // Action permetant à l'utilisateur de continuer à générer des citations ou stoper le programme

    // setTimeout(function () {
    //     if (confirm("Souhaitez-vous continuer ?")) {
    //         printCitations();
    //     }else{
    //         container.innerHTML = "";
    //     }
    // }, 8000);
}

// Button générer je prends l'id btn pour lui appliquer une action au click qui utilise la fonction printCitations en appuyant dessus
document.getElementById("btn").addEventListener("click", function () {
    printCitations();
});