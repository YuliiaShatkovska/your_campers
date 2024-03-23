import { Container } from 'components/App/App.styled';
import { CatalogItem, CatalogList, CatalogWrap } from './CatalogPage.styled';
import { Filter } from 'components/Filter/Filter';
import { Campers } from 'components/Campers/Campers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCampers } from '../redux/campers/operations';
import { selectCampers } from '../redux/campers/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  const campers = useSelector(selectCampers);

  return (
    <Container>
      <CatalogWrap>
        <Filter />

        <CatalogList>
          {campers.map(camper => (
            <CatalogItem key={camper._id}>
              <Campers camper={camper} />
            </CatalogItem>
          ))}
        </CatalogList>
      </CatalogWrap>
    </Container>
  );
};

export default CatalogPage;
