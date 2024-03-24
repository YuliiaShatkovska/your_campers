import { Form, Formik } from 'formik';
import * as yup from 'yup';
import {
  FormContainer,
  FormInputWrap,
  FormText,
  FormTitle,
} from './BookingForm.styled';
import { Button, StyledInput } from 'components/Filter/Filter.styled';

import sprite from '../../../helpers/icons/icons.svg';
import { DetailsIcons } from 'components/Campers/Campers.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  date: yup.date().required(),
  comment: yup.string(),
});

const initialsValues = { name: '', email: '', date: '', comment: '' };

export const BookingForm = () => {
  const handleSubmit = e => {
    console.log(e);

    window.location.reload();
  };

  return (
    <FormContainer>
      <FormTitle>Book your campervan now</FormTitle>
      <FormText>Stay connected! We are always ready to help you.</FormText>

      <Formik
        initialValues={initialsValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form style={{ width: '400px' }}>
          <FormInputWrap>
            <StyledInput name="name" placeholder="Name" required />
          </FormInputWrap>

          <FormInputWrap>
            <StyledInput
              name="email"
              placeholder="Email"
              type="email"
              required
            />
          </FormInputWrap>

          <FormInputWrap>
            <StyledInput name="date" placeholder="Booking date" required />
            <DetailsIcons
              width={20}
              height={20}
              style={{ position: 'absolute', top: '16px', right: '0' }}
            >
              <use href={`${sprite}#icon-calendar`}></use>
            </DetailsIcons>
          </FormInputWrap>

          <FormInputWrap>
            <StyledInput
              name="comment"
              placeholder="Comment"
              as="textarea"
              style={{
                outline: 'none',
                border: 'none',
                height: '114px',
              }}
            />
          </FormInputWrap>

          <Button
            type="submit"
            style={{ width: '160px' }}
            onSubmit={handleSubmit}
          >
            Send
          </Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
