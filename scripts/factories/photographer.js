function photographerFactory(data) {
    const { name, portrait, city, country, price, tagline, id } = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        // Create <article>
        const article = document.createElement('article');

        //Create <a>
        const aPhotographer = document.createElement('a')
        // Set <a> attributes
        aPhotographer.setAttribute('id', name)
        aPhotographer.setAttribute('tabindex', '3')
        aPhotographer.setAttribute('aria-labelledby', 'nom photographe')
        aPhotographer.setAttribute('href','photographer.html?id=' + id)
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
        divPhotographerData.setAttribute('aria-labelledby', "données photographe")
        // Add <div> inside <article> (after <a>)
        article.appendChild(divPhotographerData);

        // Create <p> and add text into it + attribute
        const divPhotographerCity = document.createElement('p');
        divPhotographerCity.textContent = `${city} ${country}`
        divPhotographerCity.setAttribute('aria-labelledby', 'ville photographe')
        const divPhotographerTagline = document.createElement('p');
        divPhotographerTagline.textContent = tagline
        divPhotographerTagline.setAttribute('aria-labelledby', 'tagline photographe')
        const divPhotographerPrice = document.createElement('p');
        divPhotographerPrice.textContent = price + " €/jour"
        divPhotographerPrice.setAttribute('aria-labelledby', 'prix photographe')
        // Add <p> inside <div>
        divPhotographerData.appendChild(divPhotographerCity);
        divPhotographerData.appendChild(divPhotographerTagline);
        divPhotographerData.appendChild(divPhotographerPrice);
        return (article);
    }
    return { name, picture, city, country, price, tagline, getUserCardDOM }
}