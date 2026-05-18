const lesTxt = document.getElementsByTagName("p");
console.log(lesTxt);

const textesTab = Array.from(lesTxt);
console.log(textesTab);

textesTab.map((element) => {
    element.innerHTML = "Lol je suis Hackerman";
});

textesTab.map((element) => {
    element.style.color = "red";
});