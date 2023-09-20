import { ReviewItem } from './ReviewItem';

export const Reviews = ({ results }) => {
  return (
    <ul>
      {results?.map(review => {
        return <ReviewItem key={review.id} review={review}></ReviewItem>;
      })}
    </ul>
  );
};
