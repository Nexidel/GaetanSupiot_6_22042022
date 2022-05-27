//Mettre le code JavaScript lié à la page photographer.html

// faire un fetch recup l'id pour json

async function getPhotographer(id) {
    // Penser à remplacer par les données récupérées dans le json
    return fetch("./data/photographers.json")
    // return reponse.json()    
    .then(response => response.json())
    // return data  
    .then(data =>  {
        let dataUser = data.photographers.find(item => item.id == id)
        let mediaUser = data.media.filter(item => item.photographerId == id)
        console.log('data',dataUser)
        console.log('media',mediaUser)

        let photographer =  new Photographer(dataUser.id, dataUser.name, dataUser.portait, dataUser.price, dataUser.tagline, mediaUser.media)
        // setName & getName encapsulation orienté objet, visibilité 
        return photographer;
    })
    
}

class Photographer {
    constructor(id, name, portrait, country, price, tagline, media) {
        this.name = name
        this.portrait = portrait
        this.country = country
        this.price = price
        this.tagline = tagline
        this.media = media
    }
}


async function init(id) {
    const photographer = await getPhotographer(id);
}

window.onload = function getData() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    console.log(id)
    init(id)
}

// let photographer = new Photographer(name, portrait, country, price, tagline)
// console.log(photographer)
