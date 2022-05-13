function photographerFactory(data) {
    const { name, portrait, city, country, price, tagline} = data;

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        const dataCollect = document.createElement( 'span' );
        h2.textContent = name ;
        dataCollect.textContent = "Données du fetch : " + city + ", " + country + ", " + price + ", " + tagline
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(dataCollect);
        return (article);
    }
    return { name, picture, city, country, price, tagline, getUserCardDOM }
}