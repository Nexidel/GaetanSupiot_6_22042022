function photographerFactory(data) {
    const { name, portrait, city, country, price, tagline } = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        // Create <article>
        const article = document.createElement('article');

        //Create <a>
        const aPhotographer = document.createElement('a')
        // Set <a> attributes
        aPhotographer.setAttribute('id', name)
        aPhotographer.setAttribute('tabindex', '3')
        // Add <a> inside <article>
        article.appendChild(aPhotographer);

        // Create <img> inside <a>
        const img = document.createElement('img');
        // Add <img> inside <a>
        aPhotographer.appendChild(img);
        // Set <img> attrivute
        img.setAttribute('alt', name)
        img.setAttribute("src", picture)

        // Create <h2>
        const h2 = document.createElement('h2');
        // Add name photographer to <h2>
        h2.textContent = name;
        // Add <h2> inside <a>
        aPhotographer.appendChild(h2);

        // Create <div>
        const divPhotographerData = document.createElement('div')
        // Set <div> attributes
        divPhotographerData.setAttribute('id', "desc_" + name)
        divPhotographerData.setAttribute('tabindex', "4")
        // Add <div> inside <article> (after <a>)
        article.appendChild(divPhotographerData);

        // Create <p> and add text into it
        const divPhotographerCity = document.createElement('p');
        divPhotographerCity.textContent = `${city} ${country}`
        const divPhotographerTagline = document.createElement('p');
        divPhotographerTagline.textContent = tagline
        const divPhotographerPrice = document.createElement('p');
        divPhotographerPrice.textContent = price + " €/jour"
        // Add <p> inside <div>
        divPhotographerData.appendChild(divPhotographerCity);
        divPhotographerData.appendChild(divPhotographerTagline);
        divPhotographerData.appendChild(divPhotographerPrice);
        return (article);
    }
    return { name, picture, city, country, price, tagline, getUserCardDOM }
}