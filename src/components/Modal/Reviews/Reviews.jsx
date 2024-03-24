import { nanoid } from 'nanoid';
import { Description, Name, ReviewsWrap } from './Reviews.styled';
import sprite from '../../../helpers/icons/icons.svg';

export const Reviews = ({ camper }) => {
  console.log(camper.reviews);
  return (
    <div>
      <ReviewsWrap>
        {camper.reviews.map(review => (
          <li key={nanoid()}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <div
                style={{
                  borderRadius: '60px',
                  backgroundColor: '#F2F4F7',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <p
                  style={{
                    color: '#E44848',
                    fontSize: '24px',
                    fontWeight: '600',
                    lineHeight: '1.25',
                  }}
                >
                  {review.reviewer_name[0]}
                </p>
              </div>

              <div>
                <Name>{review.reviewer_name}</Name>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <svg width={16} height={16}>
                    <use href={`${sprite}#icon-star`}></use>
                  </svg>
                  <p>{review.reviewer_rating} stars</p>
                </div>
              </div>
            </div>

            <div>
              <Description>{review.comment}</Description>
            </div>
          </li>
        ))}
      </ReviewsWrap>
    </div>
  );
};
