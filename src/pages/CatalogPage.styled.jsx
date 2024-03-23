import styled from 'styled-components';

export const CatalogWrap = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  gap: 32px;
`;

export const CatalogList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 860px;
`;

export const CatalogItem = styled.li`
  padding: 24px;
  width: 800px;
  display: flex;
  gap: 24px;

  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background: #fff;

  position: relative;
`;
