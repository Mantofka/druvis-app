import { storage } from '../components/firebase';

export const fetchHeroImages = (dispatch, type = 'pc') => {
  let images = [];
  // If device type is pc (>840px) or if mobile (<=840px)
  const deviceType = type === 'pc' ? 'Big' : 'Small';

  storage
    .ref(`minimized/HeroImages/${deviceType}`)
    .listAll()
    .then((res) =>
      res.items.map((image) => {
        image
          .getDownloadURL()
          .then((url) => {
            images.push({ imageURL: url, imageName: image.name });
          })
          .then(() => {
            dispatch({
              type: 'FETCH_HERO_IMAGES',
              payload: images,
            });
          });
      })
    );
};

export const filteredImage = (fetchedImages, heroName) => {
  let result = fetchedImages.filter((image) =>
    image.imageName.includes(heroName)
  );
  if (result.length > 0) {
    return result[0].imageURL;
  }
};
