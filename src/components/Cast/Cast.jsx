import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastMember } from './CastMember';
import { fetchCast } from 'api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCastMembers() {
      const data = await fetchCast(movieId);
      setCast(data.cast.slice(0, 14));
    }
    fetchCastMembers();
  }, [movieId]);

  return (
    <>
      <p>Cast</p>
      <ul style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        {cast?.map(actor => {
          return <CastMember key={actor.id} castItem={actor}></CastMember>;
        })}
      </ul>
    </>
  );
};
