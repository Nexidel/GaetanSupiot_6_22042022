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
    const h2 = document.createElement('h2');
    h2.textContent = photographer.name;
    userDesc.appendChild(h2);
    const span = document.createElement('span');
    span.classList.add('city');
    span.textContent = photographer.city + ', ' + photographer.country;
    userDesc.appendChild(span);
    const p = document.createElement('p');
    p.classList.add('tagline');
    p.textContent = photographer.tagline;
    userDesc.appendChild(p);

    return (userDesc);
}

function getUserPicture(photographer) {
    // 2eme element de la class photograph-header
    const divPicture = document.createElement('div');
    divPicture.classList.add('imgProfile');
    const picture = `assets/photographers/Photographers ID Photos/${photographer.portrait}`;
    const userPortrait = document.createElement('img');
    userPortrait.src = picture
    divPicture.appendChild(userPortrait);

    return (divPicture);
}

function getFilter() {
    // Crétation du filter
    const filterContainer = document.createElement('div');
    filterContainer.classList.add('filter-container');
    const filterText = document.createElement('p');
    filterText.textContent = 'Trier par';
    filterContainer.appendChild(filterText);
    const filter = document.createElement('select');
    const option1 = document.createElement('option');
    option1.textContent = 'Populartié';
    const option2 = document.createElement('option');
    option2.textContent = 'Date';
    const option3 = document.createElement('option');
    option3.textContent = 'Titre';
    filter.appendChild(option1);
    filter.appendChild(option2);
    filter.appendChild(option3);
    filterContainer.appendChild(filter);

    // console.log('filter', filterContainer)
    return (filterContainer);
}


function getUserMedia(photographer) {
    const media = photographer.media;
    const mediaContainer = document.createElement('div');
    mediaContainer.classList.add('media-container');
    media.forEach((item) => {
        // console.log('item', item)
        let srcImg;
        let img;
        let titleImg;
        let srcVideo;
        let video;
        let titleVideo;
        if (item.image) {   
            srcImg = `assets/photographers/Mimi/${item.image}`;
            titleImg = item.title;
         
        } else if (item.video) {
            srcVideo = `assets/photographers/Mimi/${item.video}`;
            titleVideo = item.title;
        }
        // console.log('img', srcImg, 'video', srcVideo)
        if (srcImg !== undefined) {
            // Créer un élement img et lui ajouter un attribut src et un alt
            img = document.createElement('img');
            img.setAttribute('src', srcImg);
            img.setAttribute('alt', titleImg);
            // Créer un élement p et lui ajouter le titre du media
            imgName = document.createElement('p');
            imgName.textContent = titleImg;
            imgLike = document.createElement('i');
            imgLike.classList.add('fas');
            // Créer une div pour le titre et le like
            const mediaTitle = document.createElement('div');
            mediaTitle.classList.add('media-desc');
             // Créer un élement div pour l'image et les desc
            const mediaElement = document.createElement('div');
            mediaElement.classList.add('media-img');
            // Ajouter l'élement img dans la div media
            mediaElement.appendChild(img);
            // Ajouter l'élement p dans la div desc
            mediaTitle.appendChild(imgName);
            mediaTitle.appendChild(imgLike);
            // Ajouter la div media dans la div media-img
            mediaElement.appendChild(mediaTitle);
            // Ajouter la div media-img dans la div media-container
            mediaContainer.appendChild(mediaElement);
        }

        if (srcVideo !== undefined) {
            // Créer un élement video et lui ajouter un attribut src et un type
            video = document.createElement('video');
            video.setAttribute('src', srcVideo);
            video.setAttribute('type', titleVideo);
            // Créer un élement p et lui ajouter le titre du media
            videoName = document.createElement('p');
            videoName.textContent = titleVideo;
            videoLike = document.createElement('i');
            videoLike.classList.add('fas');
            // Créer une div pour le titre et le like
            const mediaTitle = document.createElement('div');
            mediaTitle.classList.add('media-desc');
            // Créer un élement div pour la vidéo et les desc
            const mediaElement = document.createElement('div');
            mediaElement.classList.add('media-video');
            // Ajouter l'élement video dans la div media
            mediaElement.appendChild(video);
            // Ajouter l'élement p et le i  dans la div desc
            mediaTitle.appendChild(videoName);
            mediaTitle.appendChild(videoLike);
            // Ajouter la div media dans la div media-video
            mediaElement.appendChild(mediaTitle);
            // Ajouter la div media-video dans la div media-container
            mediaContainer.appendChild(mediaElement);
        }
    });
   return mediaContainer;
}

async function init(id) {
    const photographer = await getPhotographer(id);
    // console.log('photographer await', photographer)
    const photographersSection = document.querySelector(".photograph-header");

    const userDesc = getUserDesc(photographer);
    photographersSection.insertBefore(userDesc, photographersSection.firstChild);

    const userPortrait = getUserPicture(photographer);
    photographersSection.insertAdjacentElement('beforeend', userPortrait);
    
    const userMedia = getUserMedia(photographer);
    photographersSection.insertAdjacentElement('afterend',userMedia);
    console.log('userMedia', userMedia)

    const filter = getFilter();
    photographersSection.insertAdjacentElement('afterend',filter);
}