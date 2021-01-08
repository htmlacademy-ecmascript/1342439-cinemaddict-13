import {getRandomInteger} from "../utils.js";
import {getRandomIndex} from "../utils.js";
import {makeComments} from "./comments.js";

const posters = [
  `./images/posters/made-for-each-other.png`,
  `./images/posters/popeye-meets-sinbad.png`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/the-dance-of-life.jpg`,
  `./images/posters/the-great-flamarion.jpg`,
  `./images/posters/the-man-with-the-golden-arm.jpg`
];

const titles = [
  `Soul`,
  `Home alone`,
  `Interstelar`,
  `Queen's gambit`,
  `The christmas chronicles`,
  `Santa Clouse`,
  `Klaus`,
  `Let it snow`,
  `The holiday calender`,
  `Christmas wedding`
];

const time = [
  `1h 56m`,
  `1h 28m`,
  `2h 04m`,
  `1h 47m`,
  `1h 18m`,
  `2h 29m`,
  `58m`
];


const genre = [
  `Science-Fiction`,
  `Fantasy`,
  `Horror`,
  `Action`,
  `Thriller`,
  `Dark Drama`,
  `Mystery`
];


const makeDescription = function () {
  const descriptionText = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];

  const description = new Set();

  const MAX_DESCRIPTION_SENTANSES = 5;

  for (let i = 0; i < getRandomInteger(1, MAX_DESCRIPTION_SENTANSES); i++) {
    description.add(descriptionText[getRandomInteger(0, descriptionText.length)]);
  }

  return Array.from(description).join(` `);
};

const directors = [
  `Dodo Abashidze`,
  `George Abbott`,
  `Jim Abrahams`,
  `Abiola Abrams`,
  `Leon Abrams`,
  `Ivan Abramson`,
  `Hany Abu-Assad`,
  `Tengiz Abuladze`,
  `Herbert Achternbusch`,
  `Andrew Adamson`,
  `Maren Ade`,
];

const generateActors = function () {
  const allActors = [
    `Tom Hanks`,
    `Leonardo DiCaprio`,
    `Jack Nicholson`,
    `Marlon Brando`,
    `Anthony Hopkins`,
    `Johnny Depp`,
    `Samuel L. Jackson`,
    `Morgan Freeman`,
    `Will Smith`
  ];

  const actors = new Set();

  for (let i = 0; i < getRandomInteger(3, allActors.length); i++) {
    actors.add(allActors[getRandomInteger(0, allActors.length - 1)]);
  }

  return Array.from(actors).join(`,`);
};

const country = [
  `USA`,
  `Germany`,
  `Canada`,
  `China`,
  `France`,
  `Italy`
];

export const makeFilm = function () {
  return {
    poster: getRandomIndex(posters),
    time: getRandomIndex(time),
    title: getRandomIndex(titles),
    year: getRandomInteger(1997, 2019),
    rating: getRandomInteger(2, 10),
    genre: getRandomIndex(genre),
    commentsNumber: getRandomInteger(0, 5),
    description: makeDescription(),
    comments: makeComments(),
    age: `+` + getRandomInteger(0, 18),
    director: getRandomIndex(directors),
    actors: generateActors(),
    country: getRandomIndex(country),
    isWatched: Boolean(getRandomInteger(0, 1)),
    isWatchList: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};
