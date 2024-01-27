import "jest";
import { get_movies } from "../javascript/get-movies";


describe("Get Movies API", () => {

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it("should return a list of movies", async () => {

    global.fetch.mockResolvedValue({
      text: () => Promise.resolve(JSON.stringify({ results: ["movie1", "movie2", "movie3", "movie4", "movie5"] }))
    });

    const movies = await get_movies();
    expect(movies).toBeDefined();
    expect(movies.length).toBeGreaterThan(0);
  })

  it("should return an error if the API is down", async () => {
    const errorMessage = "API is down"
    global.fetch.mockRejectedValue(new Error(errorMessage));

    try {
      await get_movies();
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toBe("API is down");
    }
  });
})