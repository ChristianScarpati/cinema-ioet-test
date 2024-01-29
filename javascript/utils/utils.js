export const transformToMinutes = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;
    return `${minutes} min ${seconds} sec`;
}

export const createImag = (movie) => {
    const imag = movie.primaryImage.url
    const alternativeText = movie.primaryImage.caption.plainText
    const imgElement = document.createElement("img");
    imgElement.src = imag
    imgElement.alt = alternativeText
    imgElement.className = "poster-container-movie"

    return imgElement
}

export const createTitle = (movie) => {
    const title = movie.titleText.text
    const titleElement = document.createElement("h2");
    titleElement.innerHTML = title
    return titleElement
}