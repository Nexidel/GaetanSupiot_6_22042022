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
            // console.log('data', dataUser)
            // console.log('media', mediaUser)

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
            // console.log('photographer', photographer)
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

window.onload = function getData() {
    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    // console.log(id)
    init(id)
}

function getUserDesc(photographer) {
    // 1er element de la class photograph-header
    const userDesc = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = photographer.name;
    userDesc.appendChild(h1);
    const span = document.createElement('span');
    span.textContent = photographer.city + ', ' + photographer.country;
    userDesc.appendChild(span);
    const p = document.createElement('p');
    p.textContent = photographer.tagline;
    userDesc.appendChild(p);

    return (userDesc);
}

function getUserPicture(photographer) {
    // 2eme element de la class photograph-header
    const divPicture = document.createElement('div');
    const picture = `assets/photographers/Photographers ID Photos/${photographer.portrait}`;
    const userPortrait = document.createElement('img');
    userPortrait.src = picture
    divPicture.appendChild(userPortrait);

    return (divPicture);
}

function getUserMedia(photographer) {
    const media = photographer.media;
    const mediaContainer = document.createElement('div');
    mediaContainer.classList.add('media-container');
    media.forEach((item) => {
        let srcImg;
        let img;
        let titleImg;
        let srcVideo;
        let video;
        let titleVideo;

        if (item.image) {
            srcImg = `assets/photographers/Mimi/${item.image}`;
            titleImg = `assets/photographers/Mimi/${item.title}`;
         
        } else if (item.video) {
            srcVideo = `assets/photographers/Mimi/${item.video}`;
            titleVideo = `assets/photographers/Mimi/${item.title}`;
        }
        // console.log('img', srcImg, 'video', srcVideo)
        if (srcImg !== undefined) {
            img = document.createElement('img');
            img.setAttribute('src', srcImg);
            img.setAttribute('alt', titleImg);
            mediaContainer.appendChild(img);
        }

        if (srcVideo !== undefined) {
            video = document.createElement('video');
            video.setAttribute('src', srcVideo);
            video.setAttribute('type', titleVideo);
            mediaContainer.appendChild(video);
        }
    });
   return mediaContainer;
}

async function init(id) {
    const photographer = await getPhotographer(id);
    console.log('photographer await', photographer)
    const photographersSection = document.querySelector(".photograph-header");

    const userDesc = getUserDesc(photographer);
    photographersSection.insertBefore(userDesc, photographersSection.firstChild);

    const userPortrait = getUserPicture(photographer);
    photographersSection.insertAdjacentElement('beforeend', userPortrait);


    const userMedia = getUserMedia(photographer);
    photographersSection.insertAdjacentElement('afterend',userMedia);
    console.log('userMedia', userMedia)

}