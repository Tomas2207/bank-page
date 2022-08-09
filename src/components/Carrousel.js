import { useEffect, useRef, useState } from 'react';

const slidesData = [
  {
    title: 'Save your salary in the safest bank in the world',
    text: 'Online Bank is the safest place you can put your money on, just take a look at our clients opinion',
    image: 'images/pexels-andrea-piacquadio-859265.jpg',
  },
  {
    title: 'Travel anywhere with us',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque minima voluptatum esse saepe eius eos asperiores officiis beatae! Officiis temporibus unde tenetur quam. Beatae, aut?',
    image: 'images/travel.jpg',
  },
  {
    title: 'Stability over anything else',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque minima voluptatum esse saepe eius eos asperiores ',
    image: 'images/countryside.jpg',
  },
];

const delay = 4500;

const Carrousel = () => {
  const [indexx, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    console.log('effect');
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [indexx]);
  return (
    <div className="carrousel">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-indexx * 100}%, 0, 0)` }}
      >
        {slidesData.map((info, index) => {
          return (
            <div
              className="my-slide"
              key={index}
              style={{
                backgroundImage: `url("${info.image}")`,
              }}
            >
              <div className="slide-content">
                <div className="carrousel-content">
                  <div className="text-box">
                    <h2 className="info-title">{info.title}</h2>
                    <p>{info.text}</p>
                  </div>
                  <button className="carrousel-btn">Know more</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="slideshowDots">
        {slidesData.map((_, idx) => {
          return (
            <div
              key={idx}
              className={`slideshowDot${indexx === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carrousel;
