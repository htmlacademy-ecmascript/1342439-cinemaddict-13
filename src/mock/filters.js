import {watchList, watched, favorite} from "../utils.js";

const filtredFilms = {
  watchlistFilms: (films) => films.filter((film) => watchList(film)).length,
  watchedFilms: (films) => films.filter((film) => watched(film)).length,
  favoriteFilms: (films) => films.filter((film) => favorite(film)).length,
};

export const makeFilter = function (films) {
  return Object.entries(filtredFilms).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films)
    };
  });
};
