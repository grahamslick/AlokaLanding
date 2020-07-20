import React, { useState, useRef } from 'react';
import Box from 'common/src/components/Box';
import Container from 'common/src/components/UI/Container';
import Button from 'common/src/components/Button';
import Input from 'common/src/components/Input';
import Checkbox from 'common/src/components/Checkbox';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import PropTypes from 'prop-types';
import { submitContactForm } from '../../../services/contact.service';

const Contact = ({ sectionWrapper }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [intention, setIntention] = useState([]);
  const [shouldAddToMailingList, setShouldAddToMailingList] = useState(true);

  const nameRef = useRef();
  const subjectRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const possibleIntentions = [
    { value: 'GENERAL_CONTACT', label: 'General Contact' },
    { value: 'APP_INQUIRY', label: 'App Inquiry' },
    { value: 'STORE_INQUIRY', label: 'Store Inquiry' },
    { value: 'EVENT_QUESTION', label: 'Event Question' },
    { value: 'INVESTMENT', label: 'Investment Opportunities' },
    { value: 'OTHER', label: 'Other' },
  ];

  const onSubmitClicked = async () => {
    const formVal = {
      name,
      subject,
      email,
      message,
      intentions: intention.map((selection) => selection.value),
      shouldAddToMailingList,
    };
    try {
      await submitContactForm(formVal);
      clearContactForm();
      alert('Thanks for your interest!');
    } catch (error) {
      console.error(error);
      alert('There was an error submitting your request.');
    }
  };

  const clearContactForm = () => {
    setName(null);
    nameRef.current.clearValue();
    setSubject(null);
    subjectRef.current.clearValue();
    setEmail(null);
    emailRef.current.clearValue();
    setMessage(null);
    messageRef.current.clearValue();
  };

  const animatedSelectors = makeAnimated();

  return (
    <Box {...sectionWrapper} className="contact" id="contactSection">
      <Container>
        <Box className="contactWrapper">
          <form>
            <Input
              ref={nameRef}
              inputType="text"
              placeholder="Full Name"
              onChange={setName}
            />
            <Input
              ref={emailRef}
              inputType="email"
              placeholder="Email Address"
              onChange={setEmail}
            />
            <Input
              ref={subjectRef}
              inputType="text"
              placeholder="Subject"
              onChange={setSubject}
            />
            <Input
              ref={messageRef}
              inputType="textarea"
              placeholder="Message"
              onChange={setMessage}
            />
            <Select
              options={possibleIntentions}
              defaultValue={intention}
              isMulti
              name="Intention"
              components={animatedSelectors}
              onChange={setIntention}
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
