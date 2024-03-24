import { useState } from 'react';
import sprite from '../../helpers/icons/icons.svg';
import {
  AddToFavoriteBtn,
  CamperDescription,
  CamperName,
  CamperPrice,
  CatalogImage,
  DetailsIcons,
  IconItem,
  IconText,
  IconsList,
  LocationWrap,
  RatingLocationBox,
  RatingWrap,
} from './Campers.styled';
import { Button } from 'components/Filter/Filter.styled';
import { Modal } from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/campers/selectors';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/campers/campersSlice';
import { PiCurrencyEur } from 'react-icons/pi';

export const Campers = ({ camper }) => {
  const [showMadal, setShowMadal] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowMadal(prev => !prev);
  };

  const favorites = useSelector(selectFavorite);

  const isCardFavorite = favorites.find(fav => fav._id === camper._id);

  const onClickToFavorite = () => {
    isCardFavorite
      ? dispatch(removeFromFavorites(camper._id))
      : dispatch(addToFavorites(camper));
  };

  return (
    <>
      <div style={{ width: '290px', height: '310px' }}>
        <CatalogImage src={camper.gallery[0]} alt="camper" />
      </div>

      <div>
        <CamperName>{camper.name}</CamperName>

        <RatingLocationBox>
          <RatingWrap>
            <svg width={16} height={16}>
              <use href={`${sprite}#icon-star`}></use>
            </svg>
            {camper.rating}({camper.reviews.length} Reviews)
          </RatingWrap>

          <LocationWrap>
            <DetailsIcons width={16} height={16}>
              <use href={`${sprite}#icon-map-pin`}></use>
            </DetailsIcons>
            {camper.location}
          </LocationWrap>
        </RatingLocationBox>

        <CamperDescription>{camper.description}</CamperDescription>

        <IconsList>
          <IconItem>
            <DetailsIcons width={20} height={20} style={{ fill: '#101828' }}>
              <use href={`${sprite}#icon-users`}></use>
            </DetailsIcons>
            <IconText>{camper.adults} adults</IconText>
          </IconItem>

          <IconItem>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-man2`}></use>
            </svg>
            <IconText>{camper.transmission}</IconText>
          </IconItem>

          <IconItem>
            <DetailsIcons width={20} height={20} style={{ fill: '#101828' }}>
              <use href={`${sprite}#icon-petrol`}></use>
            </DetailsIcons>
            <IconText>{camper.engine}</IconText>
          </IconItem>

          <IconItem>
            <DetailsIcons width={20} height={20}>
              <use href={`${sprite}#icon-kitchen`}></use>
            </DetailsIcons>
            <IconText>kitchen</IconText>
          </IconItem>

          <IconItem>
            <DetailsIcons width={20} height={20}>
              <use href={`${sprite}#icon-bed`}></use>
            </DetailsIcons>
            <IconText>{camper.details.beds} beds</IconText>
          </IconItem>

          <IconItem style={{ gap: '4px' }}>
            <svg
              width={28}
              height={28}
              style={{
                paddingTop: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <use href={`${sprite}#icon-ac`}></use>
            </svg>
            <IconText>AC</IconText>
          </IconItem>
        </IconsList>

        <Button
          onClick={toggleModal}
          type="button"
          style={{ padding: '16px 40px', width: '166px' }}
        >
          Show more
        </Button>
      </div>

      <div
        style={{
          position: 'absolute',
          right: '24px',
          display: 'flex',
          gap: '11px',
        }}
      >
        <CamperPrice>
          <PiCurrencyEur size={26} style={{ fill: '#101828' }} />
          {camper.price}
        </CamperPrice>
        <AddToFavoriteBtn
          type="button"
          aria-label="Add to favorites"
          $isFavorite={!!isCardFavorite}
          onClick={onClickToFavorite}
        >
          <DetailsIcons width={24} height={24}>
            <use href={`${sprite}#icon-heart`}></use>
          </DetailsIcons>
        </AddToFavoriteBtn>
      </div>

      {showMadal && <Modal onClose={toggleModal} campers={camper} />}
    </>
  );
};
