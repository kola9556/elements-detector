let data;

fetch('./data.json')
  .then((response) => response.json())
  .then((obj) => {
    data = obj;
  });

console.log(data);

const loadImage = () => {
  let imageToLoad = document.getElementById('displayed-image');
<<<<<<< HEAD
  data.images.map((img) => {
    if (img.name === 'cocker') {
      return (imageToLoad.src = img.src);
=======
  imageToLoad.src = data.images.map((img) => {
    if (img.name === 'cocker') {
      return img.src;
>>>>>>> b675f371a82c5c1a03f6e043d92910f974e09a27
    }
  });
};
