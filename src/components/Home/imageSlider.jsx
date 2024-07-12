import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css'; // Custom CSS for ImageSlider component

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500, // Adjusted speed for smoother transition
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Increased autoplay speed
    };

    return (
        <Slider {...settings}>
            <div>
                <img className='img-slide' src="https://www.touchstoneinfotech.com/wp-content/uploads/2022/10/ecommerce-banner.jpg" alt="Image 1" />

            </div>
            <div>
                <img className='img-slide' src="https://previews.123rf.com/images/arrow/arrow1508/arrow150800011/43834601-online-shopping-e-commerce-flat-design-concept-banner-background.jpg" alt="Image 2" />

            </div>
            <div>
                <img className='img-slide' src="https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg" alt="Image 3" />

            </div>
        </Slider>
    );
};

export default ImageSlider;
