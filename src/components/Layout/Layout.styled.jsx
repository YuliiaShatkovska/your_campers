import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 900;
  background-color: #f2f4f7;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const LinkWrap = styled.div`
  display: flex;
  gap: 16px;
`;

export const HeaderLink = styled(NavLink)`
  color: #475467;
  font-size: 18px;

  &:hover,
  &:focus {
    color: #e44848;
  }
`;
