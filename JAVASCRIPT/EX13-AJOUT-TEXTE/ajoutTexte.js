
//Todo : DE BASE

// function ajouterTexte(pseudo, duTexte) {
//     const identifiant = document.createElement('p');
//     identifiant.innerText = pseudo + "-" + duTexte;
//     document.body.appendChild(identifiant);
// };

// ajouterTexte("Franky", "Vincent");

//Todo : EN GRAS

function ajouterTexte(pseudo, duTexte) {

    const identifiant = document.createElement('p');

    const pseudoSpan = document.createElement('span');
    pseudoSpan.innerText = pseudo;
    pseudoSpan.style.fontWeight = 'bold';

    identifiant.appendChild(pseudoSpan);

    identifiant.append("-"+ duTexte);

    document.body.appendChild(identifiant);
};

ajouterTexte("Franky", "Vincent");
ajouterTexte("Daniel", "Garcia");
ajouterTexte("Jarry", "Borne");
ajouterTexte("JCVD", "OK");
ajouterTexte("Dongue", "Rodrigue");

//Todo : WHY NOT !

// function ajouterTexte(pseudo, duTexte, metier) {

//     const identifiant = document.createElement('p');

//     const pseudoSpan = document.createElement('span');
//     pseudoSpan.innerText = pseudo;
//     pseudoSpan.style.fontWeight = 'bold';
//     pseudoSpan.style.color = 'purple';
//     pseudoSpan.style.backgroundColor = 'yellow'

//     const metierSpan = document.createElement('span');
//     metierSpan.innerText = metier;
//     metierSpan.style.color = 'pink';
//     metierSpan.style.backgroundColor = 'purple'

//     identifiant.appendChild(pseudoSpan);

//     identifiant.append(" - " + duTexte + " - ");

//     identifiant.appendChild(metierSpan);

//     document.body.appendChild(identifiant);
// };

// ajouterTexte("Franky", "Vincent", "Chanteur");
// ajouterTexte("Daniel", "Garcia", "Danser");
// ajouterTexte("Jarry", "Borne", "Guitariste");
// ajouterTexte("JCVD", "OK", "Belge");
// ajouterTexte("Dongue", "Rodrigue","Pikachu");

