import {
  DetailsIcons,
  IconItem,
  IconText,
  IconsList,
} from 'components/Campers/Campers.styled';
import sprite from '../../helpers/icons/icons.svg';

export const IconList = ({ camper }) => {
  return (
    <>
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

        <IconItem>
          <DetailsIcons width={20} height={20}>
            <use href={`${sprite}#icon-air-conditioner`}></use>
          </DetailsIcons>
          <IconText>{camper.details.airConditioner} air conditioner</IconText>
        </IconItem>

        <IconItem>
          <DetailsIcons width={20} height={20}>
            <use href={`${sprite}#icon-cd`}></use>
          </DetailsIcons>
          <IconText>CD</IconText>
        </IconItem>

        <IconItem>
          <DetailsIcons width={20} height={20}>
            <use href={`${sprite}#icon-radio`}></use>
          </DetailsIcons>
          <IconText>radio</IconText>
        </IconItem>

        <IconItem>
          <DetailsIcons width={20} height={20}>
            <use href={`${sprite}#icon-hob`}></use>
          </DetailsIcons>
          <IconText>{camper.details.hob} hob</IconText>
        </IconItem>
      </IconsList>
    </>
  );
};
