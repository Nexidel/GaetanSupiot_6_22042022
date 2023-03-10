var photographer = [];

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
            console.log(dataUser, id)

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
    userPortrait.setAttribute('aria-labelledby', photographer.name)
    userPortrait.src = picture
    divPicture.appendChild(userPortrait);

    return (divPicture);
}

// function getFilter() {
//     // Création du filter
//     const filterContainer = document.createElement('div');
//     filterContainer.classList.add('filter-container');
//     const filterText = document.createElement('p');
//     filterText.textContent = 'Trier par';
//     filterContainer.appendChild(filterText);
//     const selectWrapper = document.createElement('div')
//     selectWrapper.classList.add('select-wrapper')
//     const select = document.createElement('div')
//     select.classList.add('select')
//     selectWrapper.appendChild(select)
//     const selectTrigger = document.createElement('div')
//     selectTrigger.classList.add('select__trigger')
//     select.appendChild(selectTrigger)
//     const span1 = document.createElement('span')
//     span1.textContent = 'Popularité'
//     selectTrigger.appendChild(span1)
//     const arrrow = document.createElement('div')
//     arrrow.classList.add('arrrow')
//     selectTrigger.appendChild(arrrow)
//     const customOptions = document.createElement('div')
//     customOptions.classList.add('custom-options')
//     select.appendChild(customOptions)
//     // 1e option du select
//     const options1 = document.createElement('div')
//     options1.classList.add('custom-option')
//     options1.classList.add('selected')
//     options1.setAttribute('data-value', 'Popularité')
//     options1.textContent = 'Popularité'
//     customOptions.appendChild(options1)
//     // 2e option du select
//     const options2 = document.createElement('div')
//     options2.classList.add('custom-option')
//     options2.setAttribute('data-value', 'Date')
//     options2.textContent = 'Date'
//     customOptions.appendChild(options2)
//     // 3e option du select
//     const options3 = document.createElement('div')
//     options3.classList.add('custom-option')
//     options3.setAttribute('data-value', 'Titre')
//     options3.textContent = 'Titre'
//     customOptions.appendChild(options3)

//     filterContainer.appendChild(selectWrapper)

//     return (filterContainer);
// }

function getJSFilter() {
    // https://andrejgajdos.com/custom-select-dropdown/

    document.querySelector('.select-wrapper').addEventListener('click', function () {
        this.querySelector('.select').classList.toggle('open');
    })

    for (const option of document.querySelectorAll(".custom-option")) {
        option.addEventListener('click', function () {
            if (!this.classList.contains('selected')) {
                this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                this.classList.add('selected');
                this.closest('.select').querySelector('.select__trigger span').textContent = this.textContent;
                displayMedia(getUserMedia(photographer, this.getAttribute('data-value')));
            }
        })
    }

    const main = document.getElementById('main')
    main.addEventListener('click', function (e) {
        const select = document.querySelector('.select')
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    });
}


function filterMedia(media, filterBy) {
    switch (filterBy) {
        case 'Popularité':
            return media.sort((a, b) => b.likes - a.likes);
        case 'Date':
            return media.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'Titre':
            return media.sort((a, b) => a.title.localeCompare(b.title));
        default:
            return media;
    }
}

function nameShortPhotographer(photographer) {
    const nameShort = photographer.name.split(' ')
    if (nameShort[0].includes('-')) {
        nameShort[0] = nameShort[0].replace('-', ' ');
    }
    return nameShort[0];
}

function getUserMedia(photographer, filterBy) {
    let cpt = 0;
    const media = filterMedia(photographer.media, filterBy);
    console.log('media', media);
    const firstName = nameShortPhotographer(photographer)
    const mediaContainer = document.createElement('div');
    mediaContainer.classList.add('media-container');
    media.forEach((item) => {
        let srcImg;
        let img;
        let titleImg;
        let srcVideo;
        let video;
        let titleVideo;
        let like
        let imgLike
        let videoLike
        console.log('likes', imgLike)
        if (item.image) {
            srcImg = `assets/photographers/${firstName}/${item.image}`;
            titleImg = item.title;

        } else if (item.video) {
            srcVideo = `assets/photographers/${firstName}/${item.video}`;
            titleVideo = item.title;
        }
        if (srcImg !== undefined) {            
            // Créer un élement img et lui ajouter un attribut src et un alt
            img = document.createElement('img');
            img.setAttribute('src', srcImg);
            img.setAttribute('alt', titleImg);
            // Index media
            img.setAttribute('data-index', cpt++);
            // Affichage Modal
            img.setAttribute('onClick', 'displayCarousel(this)');
            // Créer un élement p et lui ajouter le titre du media
            imgName = document.createElement('p');
            imgName.classList.add('tiltle-media');
            imgName.textContent = titleImg;
            like = document.createElement('span');
            like.classList.add('like');
            like.textContent = item.likes;
            imgLike = document.createElement('i');
            imgLike.classList.add('fas', 'fa-heart');
            imgLike.setAttribute('aria-label', 'likes');
            // Créer une div pour le titre et le like
            const mediaTitle = document.createElement('aside');
            mediaTitle.classList.add('media-desc');
            // Créer un élement div pour l'image et les desc
            const mediaElement = document.createElement('div');
            mediaElement.classList.add('media-img');
            // Ajouter l'élement img dans la div media
            mediaElement.appendChild(img);
            // Ajouter l'élement p dans la div desc
            mediaTitle.appendChild(imgName);
            mediaTitle.appendChild(like);
            like.appendChild(imgLike);
            // Ajouter la div media dans la div media-img
            mediaElement.appendChild(mediaTitle);
            // Ajouter la div media-img dans la div media-container
            mediaContainer.appendChild(mediaElement);
        }

        if (srcVideo !== undefined) {
            // Créer un élement video et lui ajouter un attribut src et un type
            video = document.createElement('video');
            video.setAttribute('src', srcVideo);
            video.setAttribute('title', titleVideo);
            video.setAttribute('type', 'video/mp4');
             // Index media
            video.setAttribute('data-index', cpt++);
            // Créer un élement p et lui ajouter le titre du media
            videoName = document.createElement('p');
            videoName.classList.add('tiltle-media');
            videoName.textContent = titleVideo;
            videoLike = document.createElement('i');
            videoLike.classList.add('fas');
            like = document.createElement('span');
            like.classList.add('like');
            like.textContent = item.likes;
            videoLike = document.createElement('i');
            videoLike.classList.add('fas', 'fa-heart');
            videoLike.setAttribute('aria-label', 'likes');
            // Créer une div pour le titre et le like
            const mediaTitle = document.createElement('div');
            mediaTitle.classList.add('media-desc');
            // Créer un élement div pour la vidéo et les descs
            const mediaElement = document.createElement('div');
            mediaElement.classList.add('media-video');
            // Ajouter l'élement video dans la div media
            mediaElement.appendChild(video);
            // Ajouter l'élement p et le i  dans la div desc
            mediaTitle.appendChild(videoName);
            mediaTitle.appendChild(like);
            like.appendChild(videoLike);
            // Ajouter la div media dans la div media-video
            mediaElement.appendChild(mediaTitle);
            // Ajouter la div media-video dans la div media-container
            mediaContainer.appendChild(mediaElement);
        }
    });
    return mediaContainer;
}

// function modalForm() {
//     const modal = document.getElementById("champ_modal");
//     // Add attribute to label & input prenom
//     modal.children[0].setAttribute('for', 'prenom')
//     modal.children[1].setAttribute('type', 'text');
//     modal.children[1].setAttribute('name', 'prenom');
//     // Create Label Input nom
//     const labelNom = document.createElement('label');
//     labelNom.setAttribute('for', 'nom');
//     labelNom.textContent = "Nom";
//     const inputNom = document.createElement('input');
//     inputNom.setAttribute('type', 'text');
//     inputNom.setAttribute('name', 'nom');
//     modal.appendChild(labelNom);
//     modal.appendChild(inputNom);
//     // Create Label Input email
//     const labelEmail = document.createElement('label');
//     labelEmail.setAttribute('for', 'email');
//     labelEmail.textContent = "Email";
//     const inputEmail = document.createElement('input');
//     inputEmail.setAttribute('type', 'email');
//     inputEmail.setAttribute('name', 'email');
//     modal.appendChild(labelEmail);
//     modal.appendChild(inputEmail);
//     // Create Label Input message
//     const labelMessage = document.createElement('label');
//     labelMessage.setAttribute('for', 'message');
//     labelMessage.textContent = "Message";
//     const inputMessage = document.createElement('textarea');
//     inputMessage.setAttribute('id', 'message');
//     inputMessage.setAttribute('name', 'message');
//     inputMessage.setAttribute('wrap', 'soft');
//     modal.appendChild(labelMessage);
//     modal.appendChild(inputMessage);
//     const message = document.getElementById("message");
//     message.style.width = "100%";
// }

function displayMedia(userMedia) {
    if (document.querySelector('.media-container') !== null) {
        document.querySelector('.media-container').remove();
    }
    const photosFilter = document.querySelector(".filter-container");
    photosFilter.insertAdjacentElement('afterend', userMedia);
}

async function init(id) {
    photographer = await getPhotographer(id);
    const photographersSection = document.querySelector(".photograph-header");

    const userDesc = getUserDesc(photographer);
    photographersSection.insertBefore(userDesc, photographersSection.firstChild);

    const userPortrait = getUserPicture(photographer);
    photographersSection.insertAdjacentElement('beforeend', userPortrait);

    displayMedia(getUserMedia(photographer, 'Titre'));
    getJSFilter();

    
}