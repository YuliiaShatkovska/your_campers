import { Container } from 'components/App/App.styled';
import { CatalogWrap } from './CatalogPage.styled';
import { Filter } from 'components/Filter/Filter';
import { Campers } from 'components/Campers/Campers';

const CatalogPage = () => {
  return (
    <Container>
      <CatalogWrap>
        <Filter />
        <Campers />
      </CatalogWrap>
    </Container>
  );
};

export default CatalogPage;
