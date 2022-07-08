const desiredKeys = ["name", "summary", "image", "genres", "rating", "id"];

const transformObjectByKeys = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

export const useFetchAllShows = async () => {
  const allShows = await $fetch("https://api.tvmaze.com/shows");
  return allShows.map((show) => transformObjectByKeys(show, desiredKeys));
};
