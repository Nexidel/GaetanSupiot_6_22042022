    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        return fetch("./data/photographers.json")
            // return reponse.json()    
            .then(response => response.json())
            // return data  
            .then(data => data)

        // et bien retourner le tableau photographers seulement une fois 
        
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        // { photographers } | Déconstruit l'objet
        console.log(photographers)
        displayData(photographers);
    };
    
    init();
    