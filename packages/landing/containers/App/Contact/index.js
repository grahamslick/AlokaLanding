import React, { useState } from 'react';
import Box from 'common/src/components/Box';
import Container from 'common/src/components/UI/Container';
import Button from 'common/src/components/Button';
import Input from 'common/src/components/Input';
import Checkbox from 'common/src/components/Checkbox';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import PropTypes from 'prop-types';

const Contact = ({ sectionWrapper }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [intention, setIntention] = useState(null);
  const [shouldAddToMailingList, setShouldAddToMailingList] = useState(true);

  const possibleIntentions = [
    { value: 'GENERAL_CONTACT', label: 'General Contact' },
    { value: 'APP_INQUIRY', label: 'App Inquiry' },
    { value: 'STORE_INQUIRY', label: 'Store Inquiry' },
    { value: 'EVENT_QUESTION', label: 'Event Question' },
    { value: 'INVESTMENT', label: 'Investment Opportunities' },
    { value: 'OTHER', label: 'Other' },
  ];

  const onSelectionUpdate = (selections) => {
    let intentions = [];
    if (selections) {
      intentions = selections.map((selection) => selection.value);
    }
    setIntention(intentions);
  };

  const onSubmitClicked = () => {
    const formVal = {
      name,
      subject,
      email,
      message,
      intention,
      shouldAddToMailingList,
    };
    console.log(formVal);
  };

  const animatedSelectors = makeAnimated();

  return (
    <Box {...sectionWrapper} className="contact" id="contactSection">
      <Container>
        <Box className="contactWrapper">
          <form>
            <Input
              inputType="text"
              placeholder="Full Name"
              onChange={setName}
            />
            <Input
              inputType="email"
              placeholder="Email Address"
              onChange={setEmail}
            />
            <Input
              inputType="text"
              placeholder="Subject"
              onChange={setSubject}
            />
            <Input
              inputType="textarea"
              placeholder="Message"
              onChange={setMessage}
            />
            <Select
              options={possibleIntentions}
              isMulti
              name="Intention"
              components={animatedSelectors}
              onChange={onSelectionUpdate}
            />
            <Box>
              <Checkbox
                labelText="Add me to the mailing list"
                onChange={setShouldAddToMailingList}
                isChecked={shouldAddToMailingList}
              />
            </Box>
            <Button title="Submit" onClick={onSubmitClicked}>
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

Contact.propTypes = {
  SectionWrapper: PropTypes.object,
};

Contact.defaultProps = {
  sectionWrapper: {
    as: 'section',
    width: '700px',
    left: '200px',
  },
};

export default Contact;
