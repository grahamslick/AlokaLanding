import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Container from 'common/src/components/UI/Container';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import data from 'common/src/data/App/TestimonialSlider';
import SliderDes from '../sliderDescription';
import Image1 from 'common/src/assets/image/app/abt_banyan_bonsai.jpg';
import Image2 from 'common/src/assets/image/app/abt_krishna.jpg';
import Image4 from 'common/src/assets/image/app/abt_moldavite.png';
import Image3 from 'common/src/assets/image/app/abt_conch.png';
import Image5 from 'common/src/assets/image/app/abt_merkaba.png';

const images = [
  {
    thumbnail: `${Image1}`,
    thumbnailAlt: 'thumb one',
    description: <SliderDes data={data.testimonials[0]} />,
  },
  {
    thumbnail: `${Image2}`,
    thumbnailAlt: 'thumb two',
    description: <SliderDes data={data.testimonials[1]} />,
  },
  {
    thumbnail: `${Image3}`,
    thumbnailAlt: 'thumb three',
    description: <SliderDes data={data.testimonials[2]} />,
  },
  {
    thumbnail: `${Image4}`,
    thumbnailAlt: 'thumb four',
    description: <SliderDes data={data.testimonials[3]} />,
  },
  {
    thumbnail: `${Image5}`,
    thumbnailAlt: 'thumb five',
    description: <SliderDes data={data.testimonials[4]} />,
  },
];

const TestimonialSection = ({ sectionWrapper, row, sectionSubTitle }) => {
  return (
    <Box
      {...sectionWrapper}
      className="testimonialSlider"
      id="testimonialSection"
    >
      <Container>
        <Box className="testimonialDesWrapper">
          <ImageGallery
            items={images}
            originalClass="Testimonial-img"
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </Box>
      </Container>
    </Box>
  );
};

TestimonialSection.propTypes = {
  sectionWrapper: PropTypes.object,
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: '0px',
    pb: ['20px', '80px', '0px', '200px', '200px'],
  },

  sectionSubTitle: {
    content: 'ABOUT',
    as: 'span',
    display: 'block',
    textAlign: ['center', 'left'],
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: '#1a73e8',
    textTransform: 'uppercase',
    mb: '10px',
  },
};

export default TestimonialSection;
