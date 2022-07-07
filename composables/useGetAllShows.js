const requiredProperties = [
  "name",
  "summary",
  "image",
  "genres",
  "seasons",
  "episodes",
  "created_at",
  "updated_at",
];

const transformObjectByKeys = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

export const useGetShowList = async () => {
  const allShows = await $fetch("https://api.tvmaze.com/shows");
  return allShows.map((show) =>
    transformObjectByKeys(show, requiredProperties)
  );
};
