import React, { useState } from 'react';
import Box from 'common/src/components/Box';
import Container from 'common/src/components/UI/Container';
import Button from 'common/src/components/Button';
import Input from 'common/src/components/Input';

const Contact = ({ sectionWrapper }) => {
  const [test, setTest] = useState('nothing');

  const onSubmitClicked = () => console.log(test);

  return (
    <Box {...sectionWrapper} className="contact" id="contactSection">
      <Container>
        <Box className="contactWrapper">
          <form>
            <Input
              inputType="text"
              placeholder="name"
              onChange={(text) => setTest(text)}
            />
            <Button title="Submit" onClick={onSubmitClicked}>
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
