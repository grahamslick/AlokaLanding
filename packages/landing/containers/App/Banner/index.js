import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import Input from 'common/src/components/Input';
import FeatureBlock from 'common/src/components/FeatureBlock';
import ParticlesComponent from '../particles';
import Container from 'common/src/components/UI/Container';
import { email } from 'react-icons-kit/ionicons/email';
import { Icon } from 'react-icons-kit';
import { ic_arrow_forward } from 'react-icons-kit/md/ic_arrow_forward';
import { BannerSquareShape, BannerCircleShape } from '../app.style';
import BannerWrapper, {
  DiscountWrapper,
  DiscountLabel,
  ButtonWrapper,
  EmailInputWrapper,
} from './banner.style';

import AppScreenshot from 'common/src/assets/image/app/mobile.png';

const DomainSection = ({
  SectionWrapper,
  row,
  col,
  title,
  description,
  button,
  image,
  imageArea,
  btnStyle,
  btnStyleTwo,
  discountAmount,
  discountText,
}) => {
  return (
    <Box {...SectionWrapper} id="home">
      <ParticlesComponent />
      <BannerSquareShape />
      <BannerCircleShape />
      <Container>
        <Box {...row}>
          <Box {...col}>
            <Box>
              <DiscountWrapper>
                <DiscountLabel>
                  <Text {...discountAmount} className="discountAmount" />
                  <Text {...discountText} />
                </DiscountLabel>
              </DiscountWrapper>
            </Box>
            <FeatureBlock
              title={<Heading {...title} />}
              description={<Text {...description} />}
            />
            <EmailInputWrapper>
              <Input
                inputType="email"
                placeholder="Enter Email Address"
                iconPosition="left"
                aria-label="email"
              />
            </EmailInputWrapper>
          </Box>
          <Box {...col} {...imageArea}>
            <Image src={AppScreenshot} alt="Domain Image" {...image} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

DomainSection.propTypes = {
  SectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  btnStyle: PropTypes.object,
  btnStyleTwo: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: 'section',
    pt: '120px',
    pb: '80px',
    overflow: 'hidden',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '50%', '44%', '44%'],
    mt: '-80px',
  },
  imageArea: {
    width: ['0%', '0%', '43%', '45%', '45%'],
    ml: 'auto',
  },
  title: {
    content: 'Grow your inner light',
    fontSize: ['26px', '60px', '50px', '72px', '80px'],
    fontWeight: '1000',
    color: '#0f2137',
    letterSpacing: '-0.01px',
    mb: '20px',
    lineHeight: '1.1',
  },
  description: {
    content:
      'We’ve created an exciting program, community and event series to help guide you in deepening your connection to yourself and everything.',
    fontSize: '16px',
    color: '#888888',
    lineHeight: '33px',
    mb: '10px',
  },
  button: {
    type: 'button',
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  image: {
    ml: 'auto',
    mt: '70px',
  },
  btnStyleTwo: {
    minWidth: '156px',
    ml: '15px',
    bg: '#fff',
    color: '#DA985B',
  },
  textArea: {
    width: ['100%', '100%', '50%', '55%', '55%'],
  },
  discountAmount: {
    content: 'latest',
    fontSize: '14px',
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    bg: '#E6AB76',
  },
  discountText: {
    content: 'Sign up for beta list info',
    fontSize: '14px',
    fontWeight: '400',
    color: '#0f2137',
    mb: 0,
    as: 'span',
    ml: '9px',
  },
};

export default DomainSection;
