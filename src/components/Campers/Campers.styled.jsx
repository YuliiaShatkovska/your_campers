import styled from 'styled-components';

export const CatalogImage = styled.img`
  object-fit: cover;
  height: 310px;
  border-radius: 10px;
`;

export const CamperName = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const RatingWrap = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration-line: underline;
`;

export const LocationWrap = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CamperDescription = styled.p`
  width: 400px;
  height: 24px;
  overflow: hidden;
  margin-bottom: 24px;
`;

export const IconsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const IconItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  background: #f2f4f7;
  mix-blend-mode: multiply;
  /* min-width: 126px; */
  padding: 12px 18px;
`;

export const IconText = styled.p`
  font-weight: 500;
  line-height: 1.25;
`;

export const DetailsIcons = styled.svg`
  stroke: currentColor;
`;

export const CamperPrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
`;
