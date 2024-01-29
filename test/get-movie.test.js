import { get_movie } from "../javascript/get-movie";
import { OPTIONS, API_MOVIE_ID_URL } from "../javascript/constants";
import "jest"


describe("get_movie", () => {
    it("should fetch movie data successfully", async () => {
        global.fetch = jest.fn().mockResolvedValue({
            text: () => Promise.resolve('{"title":"The Matrix"}'),
        });

        const movieId = 346345;
        const movieData = await get_movie(movieId);

        expect(global.fetch).toHaveBeenCalledWith(
            `${API_MOVIE_ID_URL}/${movieId}`,
            OPTIONS
        );

        expect(movieData.title).toBe("The Matrix");
    });

    it("should handle network errors", async () => {
        global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

        const movieId = 364689;
        await expect(get_movie(movieId)).rejects.toThrow("API is down");
    });

});
