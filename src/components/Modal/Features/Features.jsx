import { DetailsBox } from './Features.styled';
import { IconList } from 'components/IconList/IconList';
import { VehicleDetails } from './VehicleDetails/VehicleDetails';

export const Features = ({ camper }) => {
  return (
    <DetailsBox>
      <IconList camper={camper} />
      <VehicleDetails camper={camper} />
    </DetailsBox>
  );
};
