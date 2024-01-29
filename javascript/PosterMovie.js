import { get_movie } from "./get-movie.js";
import { transformToMinutes, createImag, createTitle } from "./utils/utils.js"

const createDescription = (movie) => {

    const container = document.createElement("div");
    container.className = "description-container";

    const createTitleWithDash = (titleText) => {
        const titleElement = document.createElement("h2");
        titleElement.innerHTML = titleText;

        const dashElement = document.createElement("hr");
        dashElement.className = "dashed-line";
        container.appendChild(dashElement);

        container.appendChild(titleElement);
    };

    const titleName = "Name"
    const titleNameElement = document.createElement("h2");
    titleNameElement.innerHTML = titleName
    container.appendChild(titleNameElement)

    const nameOfMovie = movie.originalTitleText.text
    const nameOfMovieElement = document.createElement("p");
    nameOfMovieElement.innerHTML = nameOfMovie
    container.appendChild(nameOfMovieElement)


    createTitleWithDash("Sinopsis");
    const sinopsisDescription = "when a littler of dalmatian puppies are abducted byu the minions of Cruella de Vil, the parents must find them before she uses them for a diabolical fashion statement."
    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = sinopsisDescription
    container.appendChild(descriptionElement)


    createTitleWithDash("Genres");
    const genres = movie.genres.genres.map((genres) => genres.text)
    const genresElement = document.createElement("p");
    genresElement.innerHTML = genres
    container.appendChild(genresElement)


    createTitleWithDash("Duration");
    const duration = transformToMinutes(movie.runtime.seconds)
    const durationElement = document.createElement("p");
    durationElement.innerHTML = duration
    container.appendChild(durationElement)

    return container
}


get_movie("tt0055254").then((movie) => {

    const container = document.createElement("div");
    container.className = "single-movie-poster-container";

    const leftContainer = document.createElement("div");
    leftContainer.className = "left-container";

    const rightContainer = document.createElement("div");
    rightContainer.className = "right-container";

    const titleElement = createTitle(movie);
    leftContainer.appendChild(titleElement);

    const imgElement = createImag(movie);
    leftContainer.appendChild(imgElement);

    const descriptionElement = createDescription(movie);
    rightContainer.appendChild(descriptionElement);

    container.appendChild(leftContainer);
    container.appendChild(rightContainer);

    const element = document.getElementById("movie-details");
    element.appendChild(container);

})
