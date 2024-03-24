import styled from 'styled-components';

export const TabsList = styled.ul`
  display: flex;
  gap: 40px;

  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
`;

export const Tab = styled.button`
  color: #101828;
  padding: 0;
  padding-bottom: 24px;
  font-size: 20px;
  position: relative;
  font-weight: 600;
  line-height: 1.2;

  &.active {
    border-bottom: 5px solid #e44848;
  }
`;

export const TabsContentBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 44px;
`;
