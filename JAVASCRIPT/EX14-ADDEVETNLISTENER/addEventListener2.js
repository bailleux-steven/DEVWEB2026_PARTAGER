let titre = document.getElementsByTagName('h1')[0];
console.log(titre);

let allBtn = document.getElementsByClassName('btnExo');
console.log(allBtn);

allBtn[0].addEventListener('click',()=>{
    //Pour AJOUTER
    titre.classList.add('styleTitre');
})

allBtn[1].addEventListener('click',()=>{
    //Pour SUPPRIMER
    titre.classList.remove('styleTitre');
})

allBtn[2].addEventListener('click',()=>{
    //Pour REPRODUIRE
    titre.classList.toggle('styleTitre');
})

