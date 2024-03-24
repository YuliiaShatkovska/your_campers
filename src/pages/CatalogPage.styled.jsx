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
  margin-bottom: 50px;
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

export const LoadMoreBtn = styled.button`
  display: block;
  margin: 0 auto;
  padding: 16px 32px;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);

  color: #101828;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.08px;

  &:hover,
  &:focus {
    border-color: #e44848;
  }
`;
