import { Field, Formik } from 'formik';
import {
  Button,
  CheckBox,
  CheckboxLabel,
  CheckboxText,
  CheckboxWrap,
  FormWrap,
  IconPin,
  InputWrap,
  LacationLabel,
  LocationInput,
} from './Filter.styled';

import sprite from '../../helpers/icons/icons.svg';

export const Filter = () => {
  const handleSubmit = event => {
    console.log(event);
  };
  return (
    <>
      <Formik
        initialValues={{
          location: '',
        }}
        onSubmit={handleSubmit}
      >
        <FormWrap>
          <InputWrap>
            <LacationLabel htmlFor="location">Location</LacationLabel>
            <LocationInput id="location" name="location" placeholder="City" />
            <IconPin width={18} height={20}>
              <use href={`${sprite}#icon-map-pin`}></use>
            </IconPin>
          </InputWrap>

          <p
            style={{
              color: '#475467',
              fontWeight: '500',
              marginBottom: '14px',
            }}
          >
            Filters
          </p>

          <CheckboxWrap>
            <CheckboxText id="checkbox-group">Vehicle equipment</CheckboxText>
            <CheckBox role="group" aria-labelledby="checkbox-group">
              <CheckboxLabel>
                <Field type="checkbox" name="checked" value="AC" />
                <svg
                  width={32}
                  height={32}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: '12px',
                  }}
                >
                  <use href={`${sprite}#icon-ac`}></use>
                </svg>
                <p>AC</p>
              </CheckboxLabel>

              <CheckboxLabel>
                <Field type="checkbox" name="checked" value="Automatic" />
                <svg
                  width={32}
                  height={32}
                  style={{
                    marginBottom: '8px',
                  }}
                >
                  <use href={`${sprite}#icon-man`}></use>
                </svg>
                <p>Automatic</p>
              </CheckboxLabel>

              <CheckboxLabel>
                <Field type="checkbox" name="checked" value="Kitchen" />
                <svg
                  width={32}
                  height={32}
                  style={{ stroke: 'currentcolor', marginBottom: '8px' }}
                >
                  <use href={`${sprite}#icon-kitchen`}></use>
                </svg>
                <p>Kitchen</p>
              </CheckboxLabel>

              <CheckboxLabel>
                <Field type="checkbox" name="checked" value="TV" />
                <svg
                  width={32}
                  height={32}
                  style={{ stroke: 'currentcolor', marginBottom: '8px' }}
                >
                  <use href={`${sprite}#icon-tv`}></use>
                </svg>
                <p>TV</p>
              </CheckboxLabel>

              <CheckboxLabel>
                <Field type="checkbox" name="checked" value="Shower/WC" />
                <svg
                  width={32}
                  height={32}
                  style={{ stroke: 'currentcolor', marginBottom: '8px' }}
                >
                  <use href={`${sprite}#icon-shower`}></use>
                </svg>
                <p>Shower/WC</p>
              </CheckboxLabel>
            </CheckBox>
          </CheckboxWrap>

          <CheckboxWrap>
            <CheckboxText id="my-radio-group">Vehicle type</CheckboxText>
            <CheckBox role="group" aria-labelledby="my-radio-group">
              <CheckboxLabel>
                <Field type="radio" name="picked" value="Van" />
                <svg
                  width={40}
                  height={28}
                  style={{
                    stroke: 'currentcolor',
                    fill: 'currentcolor',
                    marginBottom: '8px',
                  }}
                >
                  <use href={`${sprite}#icon-van`}></use>
                </svg>
                <p>Van</p>
              </CheckboxLabel>
              <CheckboxLabel>
                <Field type="radio" name="picked" value="Fully Integrated" />
                <svg
                  width={40}
                  height={28}
                  style={{
                    stroke: 'currentcolor',
                    fill: 'currentcolor',
                    marginBottom: '8px',
                  }}
                >
                  <use href={`${sprite}#icon-fulle`}></use>
                </svg>
                <p style={{ textAlign: 'center' }}>Fully Integrated</p>
              </CheckboxLabel>
              <CheckboxLabel>
                <Field type="radio" name="picked" value="Alcove" />
                <svg
                  width={40}
                  height={28}
                  style={{
                    stroke: 'currentcolor',
                    fill: 'currentcolor',
                    marginBottom: '8px',
                  }}
                >
                  <use href={`${sprite}#icon-alcove`}></use>
                </svg>
                <p>Alcove</p>
              </CheckboxLabel>
            </CheckBox>
          </CheckboxWrap>

          <Button type="submit">Search</Button>
        </FormWrap>
      </Formik>
    </>
  );
};
