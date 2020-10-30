let data;

fetch('./data.json')
  .then((response) => response.json())
  .then((obj) => {
    data = obj;
  });

console.log(data);

const loadImage = () => {
  let imageToLoad = document.getElementById('displayed-image');
  data.images.map((img) => {
    if (img.name === 'cocker') {
      return (imageToLoad.src = img.src);
    }
  });
};
