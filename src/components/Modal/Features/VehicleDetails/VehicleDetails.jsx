import { DetailList, DetailsItem, Text } from './VehicleDetails.styled';

export const VehicleDetails = ({ camper }) => {
  return (
    <>
      <Text>Vehicle Details</Text>

      <DetailList>
        <DetailsItem>
          <p>Form</p>
          <p>{camper.form}</p>
        </DetailsItem>
        <DetailsItem>
          <p>Length</p>
          <p>{camper.length}</p>
        </DetailsItem>
        <DetailsItem>
          <p>Width</p>
          <p>{camper.width}</p>
        </DetailsItem>
        <DetailsItem>
          <p>Height</p>
          <p>{camper.height}</p>
        </DetailsItem>
        <DetailsItem>
          <p>Tank</p>
          <p>{camper.tank}</p>
        </DetailsItem>
        <DetailsItem>
          <p>Consumption</p>
          <p>{camper.consumption}</p>
        </DetailsItem>
      </DetailList>
    </>
  );
};
