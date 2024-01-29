import { OPTIONS, API_MOVIE_ID_URL } from "./constants.js";

export const get_movie = async (movieId) => {

    try {
        const response = await fetch(`${API_MOVIE_ID_URL}${movieId}?info=base_info`, OPTIONS);
        const result = await response.text();
        const parsedResult = JSON.parse(result).results;
        return parsedResult;
    }

    catch (error) {
        throw new Error("API is down");
    }
}
