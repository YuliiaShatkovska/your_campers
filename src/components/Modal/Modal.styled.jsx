import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  pointer-events: auto;
  z-index: 999;
  background-color: rgba(17, 18, 19, 0.4);
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background-color: #fff;
  max-width: 982px;
  padding: 40px;
  height: 900px;
  overflow: scroll;
`;

export const GalleryList = styled.ul`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 36px;
  right: 40px;
`;
