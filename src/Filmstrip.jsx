import React from 'react';
import Slider from 'react-slick';

const FilmStrip = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipeToSlide: true,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: '400px' }}>
      <Slider {...settings}>
        <div>
          <img src="image1.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="image3.jpg" alt="Image 3" />
        </div>
        {/* Diğer resimler buraya eklenebilir */}
      </Slider>
    </div>
  );
};

export default FilmStrip;