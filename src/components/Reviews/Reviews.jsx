import { ReviewItem } from './ReviewItem';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviewsItems() {
      const data = await fetchReviews(movieId);
      setReviews(data.results.slice(0, 5));
    }
    fetchReviewsItems();
  }, [movieId]);

  return (
    <ul>
      {reviews?.map(review => {
        return <ReviewItem key={review.id} review={review}></ReviewItem>;
      })}
    </ul>
  );
};
