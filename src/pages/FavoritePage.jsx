import { Container } from 'components/App/App.styled';
import { useSelector } from 'react-redux';
import { selectFavorite } from '../redux/campers/selectors';
import { CatalogItem, CatalogList } from './CatalogPage.styled';
import { Campers } from 'components/Campers/Campers';
import { NavLink } from 'react-router-dom';
import { DetailsIcons } from 'components/Campers/Campers.styled';
import sprite from '../helpers/icons/icons.svg';

const FavoritePage = () => {
  const favorites = useSelector(selectFavorite);

  return (
    <Container>
      {/* <h1>favorite</h1> */}
      <CatalogList
        style={{ paddingTop: '50px', margin: '0 auto', width: '980px' }}
      >
        {favorites.length > 0 ? (
          favorites.map(fav => (
            <CatalogItem key={fav._id} style={{ width: '920px' }}>
              <Campers camper={fav} />
            </CatalogItem>
          ))
        ) : (
          <div
            style={{
              margin: '0 auto',
              paddingTop: '300px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '20px', fontWeight: '500' }}>
              Your favorites are empty.
              <br />
              <NavLink
                to="/catalog"
                style={{ color: '#E44848', fontSize: '24px' }}
              >
                Add campers you like{' '}
                <DetailsIcons width={24} height={24}>
                  <use href={`${sprite}#icon-heart`}></use>
                </DetailsIcons>
              </NavLink>
            </p>
          </div>
        )}
      </CatalogList>
    </Container>
  );
};

export default FavoritePage;
