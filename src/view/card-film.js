import {favorite, watched, watchList} from "../utils";

export const createCardFilmTemplate = ({poster, title, rating, year, time, genre, description, comments, isWatchList, isWatched, isFavorite}) => {
  const commentsCount = comments.length;

  const commentsName = commentsCount === 1 ? `Comment` : `Comments`;


  return `
  <article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${time}</span>
      <span class="film-card__genre">${genre}</span>
    </p>
    <img src="${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${commentsCount} ${commentsName}</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchList(isWatchList)}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watched(isWatched)}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${favorite(isFavorite)}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

