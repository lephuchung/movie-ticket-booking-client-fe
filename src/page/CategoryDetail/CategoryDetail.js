import React from 'react'
import "./CategoryDetail.scss"
import { useParams } from 'react-router';
import MovieList from '../../component/MovieList/MovieList';
import { movies } from '../Data';

const CategoryDetail = () => {
  const { categoryName } = useParams()
  console.log("categoryName: ", categoryName);
  return (
    <div className='category-detail-page-container'>
      <MovieList genre={categoryName} movies={movies} all={true} />
    </div>
  )
}

export default CategoryDetail