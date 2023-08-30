import { useState, useEffect, useCallback } from 'react';

import './Gallery.scss';
import image1 from '../../images/food1.jpeg';
import image2 from '../../images/food2.jpeg';
import image3 from '../../images/food3.jpeg';
import image4 from '../../images/food4.jpeg';
import image5 from '../../images/food5.jpeg';
import image6 from '../../images/food6.jpeg';
import image7 from '../../images/food7.jpeg';
import image8 from '../../images/food8.jpeg';
import image9 from '../../images/food9.jpeg';

import Modal from '../Modal/Modal';

const imagesList = [
  {
    id: 1,
    imgSrc: image1,
    title: 'Plate of food',
    description: `I'm a very delicious plate of food.`,
  },
  {
    id: 2,
    imgSrc: image2,
    title: 'Drinks',
    description: `I'm a very cool drink.`,
  },
  {
    id: 3,
    imgSrc: image3,
    title: 'Soup',
    description: `I'm a very yellow Soup.`,
  },
  {
    id: 4,
    imgSrc: image4,
    title: 'Pasta',
    description: `I'm almost a Pasta.`,
  },
  {
    id: 5,
    imgSrc: image5,
    title: 'Croissants',
    description: `We're a delicious Croissants.`,
  },
  {
    id: 6,
    imgSrc: image6,
    title: 'Ramen',
    description: `Itadakimasu!`,
  },
  {
    id: 7,
    imgSrc: image7,
    title: 'Smoothie',
    description: `I'm a very smooth smoothie.`,
  },
  {
    id: 8,
    imgSrc: image8,
    title: 'Creme brulé',
    description: `I'm a crunchy and soft Creme brulé.`,
  },
  {
    id: 9,
    imgSrc: image9,
    title: 'Pancakes',
    description: `We're a fluffies Pancakes.`,
  },
];

function Gallery() {
  const [image, setImage] = useState();
  const currentIndex = image
    ? imagesList.findIndex((img) => img.id === image.id)
    : undefined;

  useEffect(() => {
    document.body.addEventListener('keyup', detectKeyUp);

    return () => document.body.removeEventListener('keyup', detectKeyUp);
  }, [image]);

  const handleNextClick = () => {
    if (currentIndex < imagesList.length - 1) {
      setImage(imagesList[currentIndex + 1]);
    } else {
      setImage(imagesList[0]);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setImage(imagesList[currentIndex - 1]);
    } else {
      setImage(imagesList[imagesList.length - 1]);
    }
  };

  const closeModal = () => {
    setImage();
  };

  const detectKeyUp = (e) => {
    if (e.key === 'ArrowRight') {
      console.log('right arrow key: ', e.key);
      handleNextClick();
    } else if (e.key === 'ArrowLeft') {
      console.log('left arrow key: ', e.key);
      handlePrevClick();
    } else if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div className='gallery container'>
      <div className='gallery-list'>
        {imagesList.map((image) => (
          <div key={image.id}>
            <img
              onClick={() => setImage(image)}
              src={image.imgSrc}
              alt={image.title}
            />
          </div>
        ))}

        <Modal
          isOpen={!!image}
          onClose={closeModal}
          content={image}
          prev={handlePrevClick}
          next={handleNextClick}
        />
      </div>
    </div>
  );
}

export default Gallery;
