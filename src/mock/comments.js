import {getRandomInteger} from "../utils.js";

const randomEmoji = function () {
  const emojies = [`smile`, `sleeping`, `puke`, `angry`];

  const RandomIndex = getRandomInteger(0, emojies.length - 1);

  return emojies[RandomIndex];
};

const generateCommentDescription = function () {
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

  const MAX_DESCRIPTION_TEXT = 5;

  for (let i = 0; i < getRandomInteger(1, MAX_DESCRIPTION_TEXT); i++) {
    description.add(descriptionText[getRandomInteger(0, descriptionText.length)]);
  }

  return Array.from(description).join(` `);
};

const getcomment = () => {
  return {
    comment: generateCommentDescription(),
    emoji: randomEmoji(),
    author: `author`,
    date: `date`
  };
};

export const makeComments = () => {
  return new Array(getRandomInteger(0, 9)).fill().map(getcomment);
};
