// import { useSelector } from 'react-redux';
// import { selectCampers } from '../../redux/campers/selectors';
import { useState } from 'react';
import sprite from '../../helpers/icons/icons.svg';
import {
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

export const Campers = ({ camper }) => {
  const [showMadal, setShowMadal] = useState(false);

  const toggleModal = () => {
    setShowMadal(prev => !prev);
  };
  // const campers = useSelector(selectCampers);

  // const onClickToFavorite = () => {};

  return (
    <>
      <div style={{ width: '290px', height: '310px' }}>
        <CatalogImage
          src={camper.gallery[0]}
          alt="camper"
          // width={200}
        />
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
        <CamperPrice>${camper.price}</CamperPrice>
        <button type="button">
          <DetailsIcons width={24} height={24}>
            <use href={`${sprite}#icon-heart`}></use>
          </DetailsIcons>
        </button>
      </div>

      {showMadal && <Modal onClose={toggleModal} campers={camper} />}

      {/* <ul>
        {campers.map(camper => (
          <li key={camper._id}>
            <img src={camper.gallery[0]} alt="" />
            <p>{camper.name}</p>
            <p>
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-star`}></use>
              </svg>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
            <p>
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              {camper.location}
            </p>
            <p>{camper.description}</p>
           
          </li>
        ))}
      </ul> */}
    </>
  );
};
