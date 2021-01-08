import {createMainNavigaionTemplate} from "./view/main-navigation.js";
import {createSortTemplate} from "./view/sorting.js";
import {createCardFilmTemplate} from "./view/card-film.js";
import {createFilmsTemplate} from "./view/films.js";
import {createExtraFilmsTemplate} from "./view/extra-films.js";
import {headerProfile} from "./view/header-profile.js";
import {footerStatistic} from "./view/footer-statistic.js";
import {makeFilm} from "./mock/film.js";
import {moreFilms} from "./view/more-films.js";
import {makeFilter} from "./mock/filters.js";
// import {makeFilmInformationTemplate} from "./view/film-information.js";

const TEMP_FILM_COUNT = 28;
const TEMP_FILM_ONE_STEP = 5;
const TEMP_EXTRA_FILM_COUNT = 2;
const PLACE_BEFOREEND = `beforeend`;

const films = new Array(TEMP_FILM_COUNT).fill().map(makeFilm);
console.log(films)
const filters = makeFilter(films);


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const siteHeader = document.querySelector(`.header`);
const siteFooter = document.querySelector(`.footer`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeader, headerProfile(), PLACE_BEFOREEND);
render(siteFooter, footerStatistic(films.length), PLACE_BEFOREEND);
render(siteMainElement, createMainNavigaionTemplate(filters), PLACE_BEFOREEND);
render(siteMainElement, createSortTemplate(), PLACE_BEFOREEND);
render(siteMainElement, createFilmsTemplate(), PLACE_BEFOREEND);

const siteFilmsContainer = siteMainElement.querySelector(`.films`);
const siteFilmsListContainer = siteMainElement.querySelector(`.films-list`).querySelector(`.films-list__container`);

render(siteFilmsContainer, createExtraFilmsTemplate(`Top rated`), PLACE_BEFOREEND);
render(siteFilmsContainer, createExtraFilmsTemplate(`Most commented`), PLACE_BEFOREEND);

const siteExtraFilmsListContainer = siteFilmsContainer.querySelectorAll(`.films-list--extra`);

for (let i = 0; i < Math.min(films.length, TEMP_FILM_ONE_STEP); i++) {
  render(siteFilmsListContainer, createCardFilmTemplate(films[i]), PLACE_BEFOREEND);
}

if (films.length > TEMP_FILM_ONE_STEP) {
  let renderedFilmCount = TEMP_FILM_ONE_STEP;

  render(siteMainElement.querySelector(`.films-list`), moreFilms(), PLACE_BEFOREEND);

  const filmsMoreShow = document.querySelector(`.films-list__show-more`);

  filmsMoreShow.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    films.slice(renderedFilmCount, renderedFilmCount + TEMP_FILM_ONE_STEP).forEach(() => render(siteFilmsListContainer, createCardFilmTemplate(films), PLACE_BEFOREEND));
    renderedFilmCount += TEMP_FILM_ONE_STEP;

    if (renderedFilmCount >= films.length) {
      filmsMoreShow.remove();
    }
  });
}

for (let i = 0; i < TEMP_EXTRA_FILM_COUNT; i++) {
  render(siteExtraFilmsListContainer[0].querySelector(`.films-list__container`), createCardFilmTemplate(films[i]), PLACE_BEFOREEND);
}

for (let i = 0; i < TEMP_EXTRA_FILM_COUNT; i++) {
  render(siteExtraFilmsListContainer[1].querySelector(`.films-list__container`), createCardFilmTemplate(films[i]), PLACE_BEFOREEND);
}

// render(siteFilmsContainer, makeFilmInformationTemplate(films[0]), PLACE_BEFOREEND);
