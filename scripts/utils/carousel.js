function displayCarousel(media) {
    const carousel_modal = document.getElementById("carousel_modal");
    carousel_modal.style.display = "block";
    let source = media.getAttribute("src");
    mediaSrc = document.getElementById("mediaCarousel")
    mediaSrc.src = source;
    let name = media.getAttribute("alt");
    let index = media.getAttribute("data-index");
    mediaSrc.setAttribute("media-index", index);
    document.getElementById("mediaName").innerHTML = name;
}

function closeCarousel() {
    const carousel_modal = document.getElementById("carousel_modal");
    carousel_modal.style.display = "none";
    debugger
    document.getElementById("mediaCarousel").setAttribute("media-index", "");
}

function nextMedia() {
    let media = document.getElementById("mediaCarousel")
    console.log("-Next Media-")
    let index = media.getAttribute("media-index");
    index = Number(index) + 1;
    console.log("index", index)
    if (document.querySelector(`[data-index="${index}"]`) != null) {
        let next = document.querySelector('[data-index="' + index + '"]').getAttribute("src");
        mediaSrc.src = next
        media.setAttribute("media-index", index);
        index = media.getAttribute("media-index");
        console.log("new index", index)
    }
}
function previousMedia() {
    let media = document.getElementById("mediaCarousel")
    console.log("-Previous Media-")
    let index = media.getAttribute("media-index");
    index = Number(index) - 1;
    console.log("index", index)
    if (document.querySelector(`[data-index="${index}"]`) != null) {
        let next = document.querySelector('[data-index="' + index + '"]').getAttribute("src");
        mediaSrc.src = next
        media.setAttribute("media-index", index);
        index = media.getAttribute("media-index", index);
        console.log("new index", index)
    }
}