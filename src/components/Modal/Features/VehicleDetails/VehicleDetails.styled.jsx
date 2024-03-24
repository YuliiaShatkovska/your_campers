import styled from 'styled-components';

export const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);

  margin-bottom: 24px;
`;

export const DetailList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const DetailsItem = styled.li`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
