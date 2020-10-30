let data;

fetch('./data.json')
  .then((response) => response.json())
  .then((obj) => {
    data = obj;
  });

console.log(data);

const loadImage = () => {
  let imageToLoad = document.getElementById('displayed-image');
  imageToLoad.src = data.images.map((img) => {
    if (img.name === 'cocker') {
      return img.src;
    }
  });
};
