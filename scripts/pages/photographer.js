//Mettre le code JavaScript lié à la page photographer.html

// faire un fetch recup l'id pour json

async function getPhotographer(id) {
    // Penser à remplacer par les données récupérées dans le json
    return fetch("./data/photographers.json")
        // return reponse.json()    
        .then(response => response.json())
        // return data  
        .then(data => {
            let dataUser = data.photographers.find(item => item.id == id)
            let mediaUser = data.media.filter(item => item.photographerId == id)
            console.log('data', dataUser)
            console.log('media', mediaUser)

            // Créer un objet avec les données récupérées
            let photographer = {
                name: dataUser.name,
                portrait: dataUser.portrait,
                city: dataUser.city,
                country: dataUser.country,
                price: dataUser.price,
                tagline: dataUser.tagline,
                media: mediaUser
                // Pas besoin de l'id car déjà dans l'objet
            }
            
            console.log('photographer', photographer)
            // setName & getName encapsulation orienté objet, visibilité 
            return photographer;
        })
}

// Abandon de la class car je galère avec les getters & setters (pas compris)
// class Photographer {
//     constructor(id, name, portrait, country, price, tagline, media) {
//         this.id = id
//         this.name = name
//         this.portrait = portrait
//         this.country = country
//         this.price = price
//         this.tagline = tagline
//         this.media = media
//     }
// }

async function init(id) {
    const photographer = await getPhotographer(id);
    console.log('photographer await', photographer)
}

window.onload = function getData() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    console.log(id)
    init(id)
}

// let photographer = new Photographer(name, portrait, country, price, tagline)
// console.log(photographer)
