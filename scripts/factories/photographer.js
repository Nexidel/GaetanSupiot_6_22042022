function photographerFactory(data) {
    const { name, portrait, city, country, price, tagline, id } = data;

    if (data.name.includes(' ')){
        data.name = data.name.replace(' ', '_');
    }
    console.log(data.name)

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM(tabindexCount) {
        // Create <article>
        const article = document.createElement('article');

        //Create <a>
        const aPhotographer = document.createElement('a')
        // Set <a> attributes
        aPhotographer.setAttribute('id', 'photographer_' + id)
        aPhotographer.setAttribute('tabindex', tabindexCount)
        aPhotographer.setAttribute('aria-labelledby', name)
        aPhotographer.setAttribute('href','photographer.html?id=' + id)
        // Add <a> inside <article>
        article.appendChild(aPhotographer);

        // Create <img> inside <a>
        const img = document.createElement('img');
        // Add <img> inside <a>
        aPhotographer.appendChild(img);
        // Set <img> attrivute
        img.setAttribute('alt', name)
        img.setAttribute('id', 'artisteProfile')
        img.setAttribute("src", picture)

        // Create <h2>
        const h2 = document.createElement('h2');
        // Add name photographer to <h2>
        h2.textContent = name;
        // Add <h2> inside <a>
        aPhotographer.appendChild(h2);

        // Create <div>
        const divPhotographerData = document.createElement('aside')
        // Set <div> attributes
        divPhotographerData.setAttribute('id', "desc_" + name)
        divPhotographerData.classList.add('desc');
        divPhotographerData.setAttribute('tabindex', tabindexCount + 1)
        divPhotographerData.setAttribute('aria-labelledby', "desc_" + name)
        // Add <div> inside <article> (after <a>)
        article.appendChild(divPhotographerData);

        // Create <p> and add text into it + attribute
        const divPhotographerCity = document.createElement('p');
        divPhotographerCity.classList.add('city');
        divPhotographerCity.textContent = `${city} ${country}`
        divPhotographerCity.setAttribute('aria-labelledby', city)
        const divPhotographerTagline = document.createElement('p');
        divPhotographerTagline.textContent = tagline
        divPhotographerTagline.setAttribute('aria-labelledby', tagline)
        const divPhotographerPrice = document.createElement('p');
        divPhotographerPrice.classList.add('price');
        divPhotographerPrice.textContent = price + " €/jour"
        divPhotographerPrice.setAttribute('aria-labelledby', price + " €/jour")
        // Add <p> inside <div>
        divPhotographerData.appendChild(divPhotographerCity);
        divPhotographerData.appendChild(divPhotographerTagline);
        divPhotographerData.appendChild(divPhotographerPrice);
        return (article);
    }
    return { name, picture, city, country, price, tagline, getUserCardDOM }
}