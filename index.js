let data;

// A kind of json data import
fetch('./data.json')
  .then((response) => response.json())
  .then((obj) => {
    data = obj;
  });

const loadBigDog = () => {
  //Delete rectangles
  document.getElementById('container').removeChild(document.getElementById('newEye'));
  document.getElementById('container').removeChild(document.getElementById('newNose'));

  // imageToLoad is a place where image will be inject to html ( id="displayed-image")
  let imageToLoad = document.getElementById('displayed-image');

  //Map throug the data from data.json
  data.images.map((img) => {
    //Check what image should be display and inject its url to html <img>
    if (img.name === 'cockerBig') {
      return (imageToLoad.src = img.src);
    }
  });
};

//The same as with loadBigDog
const loadSmallDog = () => {
  document.getElementById('container').removeChild(document.getElementById('newEye'));
  document.getElementById('container').removeChild(document.getElementById('newNose'));
  let imageToLoad = document.getElementById('displayed-image');
  data.images.map((img) => {
    if (img.name === 'cockerSmall') {
      return (imageToLoad.src = img.src);
    }
  });
};

const findNose = () => {
  //create rectangle
  let rectangle = document.createElement('DIV');
  //give rectangle id="newNose"
  rectangle.id = 'newNose';
  let findImageName = () => {
    //check which image is displayed
    let imageSrc = document.getElementById('displayed-image').src;

    //Depending from image src inject needed data to html
    data.images.map((img) => {
      if (img.src === imageSrc) {
        rectangle.style.width = img.findNose.rectangleSize.width;
        rectangle.style.height = img.findNose.rectangleSize.height;
        rectangle.style.border = '3px solid yellow';
        rectangle.style.position = 'absolute';
        rectangle.style.top = img.findNose.rectanglePosition.top;
        rectangle.style.left = img.findNose.rectanglePosition.left;
      }
    });
  };

  //Inject rectangle to html on specified in data.json position
  findImageName();
  document.getElementById('container').appendChild(rectangle);
};

//same as in findNose

const findEye = () => {
  let rectangle = document.createElement('DIV');
  rectangle.id = 'newEye';
  let findImageName = () => {
    let imageSrc = document.getElementById('displayed-image').src;
    data.images.map((img) => {
      if (img.src === imageSrc) {
        rectangle.style.width = img.findEye.rectangleSize.width;
        rectangle.style.height = img.findEye.rectangleSize.height;
        rectangle.style.border = '3px solid yellow';
        rectangle.style.position = 'absolute';
        rectangle.style.top = img.findEye.rectanglePosition.top;
        rectangle.style.left = img.findEye.rectanglePosition.left;
      }
    });
  };

  findImageName();
  document.getElementById('container').appendChild(rectangle);
};
