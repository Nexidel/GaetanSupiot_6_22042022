function photographerFactory(data) {
    const { name, portrait, city, country, price, tagline } = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute('alt', '')
        img.setAttribute("src", picture)
        const aPhotographer = document.createElement('a')
        const h2 = document.createElement('h2');
        const divPhotographerData = document.createElement('div')
        divPhotographerData.setAttribute('id', "desc_" + name)
        const divPhotographerCity = document.createElement('p');
        const divPhotographerTagline = document.createElement('p');
        const divPhotographerPrice = document.createElement('p');
        h2.textContent = name;
        divPhotographerCity.textContent = city + " " + country
        divPhotographerTagline.textContent = tagline
        divPhotographerPrice.textContent = price + " €/jour"
        article.appendChild(aPhotographer);
        article.appendChild(divPhotographerData);
        // Ajoute un id avec le nom du photographe 
        aPhotographer.setAttribute('id', name)
        aPhotographer.appendChild(img);
        aPhotographer.appendChild(h2);
        article.appendChild(divPhotographerData);
        divPhotographerData.appendChild(divPhotographerCity);
        divPhotographerData.appendChild(divPhotographerTagline);
        divPhotographerData.appendChild(divPhotographerPrice);
        return (article);
    }
    return { name, picture, city, country, price, tagline, getUserCardDOM }
}