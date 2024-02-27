import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
  const settings = {
    Infinity: false,
    slidesToShow: 3, // Altere este valor conforme necessário para controlar quantos slides são exibidos ao mesmo tempo
    slidesToScroll: 4,
    vertical: false,
    centerMode: true,
    centerPadding: '20px',
 };

  return (
  <div className="carousel-container">
  <Slider {...settings}>
    {images.map((image, index) => (
      <div key={index}>
        <img src={image} alt={`Slide ${index + 1}`} />
      </div>
    ))}
  </Slider>
</div>
);
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
