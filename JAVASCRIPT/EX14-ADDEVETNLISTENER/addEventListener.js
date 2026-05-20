const titre = document.querySelector('h1');
let isClicked = false;

titre.addEventListener('click',()=>{
titre.innerText = isClicked  ? 'Bonjour' : 'Coucou'
isClicked = !isClicked;
})