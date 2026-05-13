let notesTibo = [0,3,4,6,18,19,4]
let somme = 0

function calculerMoyenne(notes) {
    for(let i = 0; i <notes.length; i++) {
        somme = somme + notes[i];
    }
    return somme/notes.length
}
console.log ("La moyenne des notes de Tibo est : " + calculerMoyenne(notesTibo));

//INFOS WEB
//for(var i = 0; i < notes.length; i++){/* boucle pour additionner les notes */
        //somme += notes[i];

//PSEUDO CODE
//notes ← [12, 15, 8, 19] 
//somme ← 0 
//POUR i de 0 à longueur(notes) - 1 somme ← somme + notes[i] 
//FIN POUR moyenne ← somme / longueur(notes) 
//AFFICHER moyenne