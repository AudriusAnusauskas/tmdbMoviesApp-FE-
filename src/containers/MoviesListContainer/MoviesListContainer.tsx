import React from 'react';
import { useQuery } from 'react-query';
import { fetchStatus } from 'api/health';

const MoviesListContainer: React.FunctionComponent = () => {
  const { data: healthy } = useQuery('status', fetchStatus);
  return (
    <div>
      <h2>Movie List</h2>
      <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
    </div>
  );
};

export default MoviesListContainer;
