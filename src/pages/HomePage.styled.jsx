import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const HomeWrap = styled.div`
  max-width: 100vw;
  height: 100vh;

  background-color: #2e2f42;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url('https://images.unsplash.com/photo-1591091221408-63351f26777a?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const HomeText = styled.p`
  color: #f2f4f7;
  width: 500px;
  text-align: center;
  transform: translateZ(0);
`;

export const TextBox = styled.div`
  transform: translateZ(0);
`;

export const TextWrap = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  position: relative;
`;

export const HomeTitle = styled.h1`
  color: rgba(242, 244, 247, 0.4);
  text-align: center;
`;

export const HomeLink = styled(NavLink)`
  width: 180px;
  text-align: right;
  color: #f2f4f7;
  opacity: 0.5;

  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1.2);
    text-shadow: 2px 2px #475467;
  }
`;
