import {watchList, watched, favorite} from "../utils.js";

const filtredFilms = {
  Watchlist: (films) => films.filter((film) => watchList(film)).length,
  Watched: (films) => films.filter((film) => watched(film)).length,
  Favorite: (films) => films.filter((film) => favorite(film)).length,
};

export const makeFilter = function (films) {
  return Object.entries(filtredFilms).map(([filterName, countFilms]) => {
    return {
      name: filterName,
      count: countFilms(films)
    };
  });
};
