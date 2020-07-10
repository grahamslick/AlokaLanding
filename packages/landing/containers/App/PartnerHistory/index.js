import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/src/components/Box';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import PartnerHistoryWrapper, { CounterUpArea } from './partnerHistory.style';
import MeditationImg from 'common/src/assets/image/app/program_meditation.svg';
import YogaImg from 'common/src/assets/image/app/program_yoga.svg';
import BreathworkImg from 'common/src/assets/image/app/program_breathwork.svg';
import SelfcareImg from 'common/src/assets/image/app/program_selfcare.svg';
import BackgroundImg from 'common/src/assets/image/app/partner-bg.png';

const PartnerHistory = ({
  row,
  col,
  cardStyle,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
}) => {
  return (
    <PartnerHistoryWrapper id="program">
      <Image
        src={BackgroundImg}
        className="backgroungImg"
        alt="backgroungImg"
      />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col} style={{ flexDirection: 'column' }}>
            <Text content="PROGRAM" {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading content="Develop your Routine" {...title} />}
              description={
                <Text
                  content="Aloka combines Meditation, Yoga, Breathwork and Selfcare into a practice that you'll enjoy exploring and turning into a consistent routine. You have options, for instance there are many types of Yoga (Ashtanga, Iyengar, Hatha, Kundalini, Bhakti, Tai Chi, Qigong, Yin, Restorative, Chair Yoga, etc.) choose what resonates with you and build your personalized Aloka program."
                  {...description}
                />
              }
            />
          </Box>
          <Box className="col" {...col} {...cardArea}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <Image src={MeditationImg} alt="Meditation" />
                <Text content="Meditation" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={YogaImg} alt="Yoga" />
                <Text content="Yoga" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={BreathworkImg} alt="Breathwork" />
                <Text content="Breathwork" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={SelfcareImg} alt="Selfcare" />
                <Text content="Selfcare" />
              </Card>
            </CounterUpArea>
          </Box>
        </Box>
      </Container>
    </PartnerHistoryWrapper>
  );
};

// Partner style props
PartnerHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

PartnerHistory.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  cardStyle: {
    p: '53px 40px 35px',
    borderRadius: '10px',
    boxShadow: '0px 8px 20px 0px rgba(16, 66, 97, 0.07)',
  },
  title: {
    fontSize: ['24px', '26px', '30px', '36px', '48px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '490px', '490px'],
  },
  description: {
    fontSize: '16px',
    color: '#343d48',
    lineHeight: '2.1',
    mb: '33px',
  },
  sectionSubTitle: {
    as: 'span',
    textAlign: 'left',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#DB9A5D',
    mb: '10px',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  cardArea: {
    pl: [0, 0, '40px', 0, 0],
  },
  backgroungImg: {
    marginTop: ['200px'],
  },
};

export default PartnerHistory;
