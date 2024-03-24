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
import { GalleryList } from '../Modal.styled';

import sprite from '../../../helpers/icons/icons.svg';

export const CamperInfo = ({ campers }) => {
  return (
    <>
      <CamperName style={{ lineHeight: '1.25', marginBottom: '10px' }}>
        {campers.name}
      </CamperName>

      <RatingLocationBox style={{ marginBottom: '16px' }}>
        <RatingWrap>
          <svg width={16} height={16}>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          {campers.rating}({campers.reviews.length} Reviews)
        </RatingWrap>

        <LocationWrap>
          <DetailsIcons width={16} height={16}>
            <use href={`${sprite}#icon-map-pin`}></use>
          </DetailsIcons>
          {campers.location}
        </LocationWrap>
      </RatingLocationBox>

      <CamperPrice style={{ marginBottom: '24px' }}>
        ${campers.price}
      </CamperPrice>

      <GalleryList>
        {campers.gallery.map(picture => (
          <li key={picture} style={{ width: '320px', height: '310px' }}>
            <CatalogImage src={picture} alt="camper" width={320} />
          </li>
        ))}
      </GalleryList>

      <CamperDescription
        style={{ width: 'unset', height: 'unset', color: '#475467' }}
      >
        {campers.description}
      </CamperDescription>
    </>
  );
};
