import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, CloseBtn, GalleryList, ModalWrap } from './Modal.styled';
import sprite from '../../helpers/icons/icons.svg';
import {
  CamperDescription,
  CamperName,
  CamperPrice,
  CatalogImage,
  DetailsIcons,
  LocationWrap,
  RatingLocationBox,
  RatingWrap,
} from 'components/Campers/Campers.styled';
import { Tabs } from './Tabs/Tabs';
import { CamperInfo } from './CamperInfo/CamperInfo';

export const Modal = ({ onClose, campers }) => {
  const backdropClose = e => {
    e.currentTarget === e.target && onClose();
  };

  const escClose = e => {
    e.code === 'Escape' && onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', escClose);
    return () => document.removeEventListener('keydown', escClose);
  });

  return createPortal(
    <Backdrop onClick={backdropClose}>
      <ModalWrap>
        <CamperInfo campers={campers} />

        <Tabs camper={campers} />

        <CloseBtn type="button" onClick={onClose}>
          <svg width={32} height={32} style={{ stroke: 'currentcolor' }}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </CloseBtn>
      </ModalWrap>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
};
