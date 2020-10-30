const { ConsoleWriter } = require('istanbul-lib-report');

let data;

fetch('./data.json')
  .then((response) => response.json())
  .then((obj) => {
    data = obj;
  });
console.log(data);

const loadImage = () => {
  let imageToLoad = document.getElementById('displayed-image');
  imageToLoad.src =
    'https://previews.123rf.com/images/pfotenweltfoto/pfotenweltfoto1712/pfotenweltfoto171200154/92576217-black-cocker-spaniel-is-lying-in-the-park.jpg';
};
