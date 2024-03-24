import { Container } from 'components/App/App.styled';
import {
  CatalogItem,
  CatalogList,
  CatalogWrap,
  LoadMoreBtn,
} from './CatalogPage.styled';
import { Filter } from 'components/Filter/Filter';
import { Campers } from 'components/Campers/Campers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCampers } from '../redux/campers/operations';
import { selectCampers, selectTotal } from '../redux/campers/selectors';

const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotal);
  const limit = 4;

  const dispatch = useDispatch();

  useEffect(() => {
    setShowLoadMore(true);

    setShowLoadMore(page < Math.ceil(total / limit));

    dispatch(getCampers({ page, limit }));
  }, [dispatch, page, total]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <Container>
      <CatalogWrap>
        <Filter />

        <div>
          <CatalogList>
            {campers.map(camper => (
              <CatalogItem key={camper._id}>
                <Campers camper={camper} />
              </CatalogItem>
            ))}
          </CatalogList>

          {showLoadMore && campers.length > 0 && (
            <LoadMoreBtn type="button" onClick={handleLoadMore}>
              Load More
            </LoadMoreBtn>
          )}
        </div>
      </CatalogWrap>
    </Container>
  );
};

export default CatalogPage;
