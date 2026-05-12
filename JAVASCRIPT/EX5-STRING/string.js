let date = new Date().toLocaleDateString('fr-FR')

let genre = "Mr"

let prenom = "Toto"

let pizza = "Calzone"

let ingredients = ["sauce tomate"," champignon"," jambon"," mozzarella"," emmental"," et beaucoup d'amour,"]

let time = 30

let typetime = "minutes"

let adresse = "11 avenue de l'europe"

let questionMessage = "Qu'est-ce qu'une pizza a dit à une autre pizza qui lui demandait des conseils ?"

let reponseMessage = '"Suis ta pâte et tout ira bien."'

let bio = `Le ${date} : 
Bonjour ${genre} ${prenom}, votre pizza : ${pizza} composé de ${ingredients} est en cours de préparation. 
Elle vous sera livrée d'ici ${time}${typetime} au ${adresse} 
Merci d'avoir commandé chez la pizerria "Raffinata".
---
${questionMessage}
${reponseMessage}`

console.log(bio)
