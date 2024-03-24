import { Container } from 'components/App/App.styled';

import {
  HomeLink,
  HomeText,
  HomeTitle,
  HomeWrap,
  TextBox,
  TextWrap,
} from './HomePage.styled';
import { DetailsIcons } from 'components/Campers/Campers.styled';
import sprite from '../helpers/icons/icons.svg';

const HomePage = () => {
  return (
    <HomeWrap>
      <Container>
        <TextWrap>
          <TextBox>
            <HomeText>
              Explore a wide range of camper types, from cozy teardrop trailers
              to spacious motorhomes, and discover the perfect fit for your
              camping style. Our comprehensive guides provide insights into
              choosing the right camper, essential gear and equipment,
              campground recommendations, safety tips, and insider tricks for
              maximizing your outdoor enjoyment.
            </HomeText>
          </TextBox>
          <div style={{ marginLeft: 'auto' }}>
            <HomeText>
              Join a vibrant community of fellow campers, share stories and
              experiences, exchange tips and tricks, and find new friends and
              camping buddies. Stay updated with the latest trends, innovations,
              and news in the camping world through our informative articles,
              reviews, and expert interviews.
            </HomeText>
          </div>

          <div>
            <HomeText>
              Whether you're planning a weekend getaway, a cross-country road
              trip, or a wilderness expedition, our website is your ultimate
              companion for all things camping. Start your adventure today and
              embrace the beauty of nature with confidence and excitement!
            </HomeText>
          </div>

          <div
            style={{
              position: 'absolute',
              right: '50px',
              top: '100px',
              display: 'flex',
            }}
          >
            <HomeTitle>Your Campers </HomeTitle>
            <DetailsIcons
              width={24}
              height={24}
              style={{ stroke: '#f2f4f7', opacity: '0.4' }}
            >
              <use href={`${sprite}#icon-heart`}></use>
            </DetailsIcons>
          </div>

          <div
            style={{
              position: 'absolute',
              right: '150px',
              bottom: '50px',
              display: 'flex',
            }}
          >
            <HomeLink to="/catalog">
              Choose your favorite to start your jorney!
            </HomeLink>
          </div>
        </TextWrap>
      </Container>
    </HomeWrap>
  );
};

export default HomePage;
