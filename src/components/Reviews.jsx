import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'servicies/getMovies';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getMovieReviews = async movieId => {
      try {
        const response = await getReviews(movieId);
        if (response.results) {
          setReviews(response.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMovieReviews(movieId);
  }, [movieId]);
  console.log(reviews);
  return (
    reviews && (
      <div>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
export default Reviews;
