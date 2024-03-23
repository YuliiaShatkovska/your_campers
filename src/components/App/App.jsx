import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { getCampers } from '../../redux/campers/operations';
// import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('../../pages/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage'));
const FavoritePage = lazy(() => import('../../pages/FavoritePage'));

export const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCampers());
  // }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorite" element={<FavoritePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
