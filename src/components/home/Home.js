import React, { useEffect } from 'react'
import MovieListing from '../movielisting/MovieListing'
import MovieApi from '../../common/apis/MovieApi'
import { APIKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import addMovies from '../../features/movies/moviesSlice'
function Home() {
  const movieText = 'harry';
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log('Error', err);
        })
      // console.log("The response from API is ", response);
      dispatch(addMovies(response.data));
    };
    fetchMovies()
  }, [dispatch]);
  return (
    <div>
      <MovieListing />
    </div>
  )
}

export default Home