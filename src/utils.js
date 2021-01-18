export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomIndex = function (list) {
  const randomIndex = getRandomInteger(0, list.length - 1);

  return list[randomIndex];
};

export const watchList = function (isWatchList) {
  return isWatchList ? `film-card__controls-item--active` : ``;
};

export const watched = function (isWatched) {
  return isWatched ? `film-card__controls-item--active` : ``;
};

export const favorite = function (isFavorite) {
  return isFavorite ? `film-card__controls-item--active` : ``;
};
