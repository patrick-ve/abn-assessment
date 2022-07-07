const genres = ["Action", "Drama", "Comedy", "Thriller", "Romance"];

// Function that groups array of objects based on genres
export const useGroupByGenre = (shows) => {
  return genres.map((genre) => {
    return {
      genre,
      shows: shows.filter((show) => show.genres.includes(genre)),
    };
  });
};
