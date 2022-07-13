export const useSortByRating = (shows) => {
  return shows.sort((a, b) => b.rating.average - a.rating.average).slice(0, 20);
};
