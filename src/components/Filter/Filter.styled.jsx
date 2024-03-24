import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormWrap = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding-bottom: 50px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  margin-bottom: 32px;
`;

export const LacationLabel = styled.label`
  color: rgba(16, 24, 40, 0.6);
  font-weight: 500;
`;

export const StyledInput = styled(Field)`
  padding: 18px 18px 18px 38px;
  border-radius: 10px;
  background-color: #f7f7f7;
  color: #101828;
  opacity: 0.6;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  width: 100%;

  &:focus {
    opacity: 1;
  }
`;

export const IconPin = styled.svg`
  fill: none;
  stroke: #101828;
  position: absolute;
  left: 16px;
  top: 50px;
  opacity: 0.8;
`;

export const CheckboxWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
`;

export const CheckboxText = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
`;

export const CheckBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  mix-blend-mode: multiply;
  padding: 12px;
  width: 94px;
  cursor: pointer;

  &:focus,
  &:hover,
  &:checked {
    border-color: #e44848;
  }
`;

export const Button = styled.button`
  background-color: #e44848;
  color: #fff;
  padding: 16px 60px;
  border-radius: 200px;
  width: 172px;

  &:focus,
  &:hover {
    background-color: #d84343;
  }
`;
