const genresOfInterest = [
  "id",
  "name",
  "description",
  "image",
  "genres",
  "seasons",
  "episodes",
  "created_at",
  "updated_at",
];

const groupByCategory = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

export const useGetShowList = async () => {
  const allShows = await $fetch("https://api.tvmaze.com/shows");
  return allShows.map((show) => groupByCategory(show, genresOfInterest));
};
