import React from 'react'
import "./Category.scss"
import CategoryCard from '../../component/CategoryCard/CategoryCard'
import { categories } from '../Data'

const Category = () => {
  return (
    <div className='category-list'>
      <h2 className='category-list-title'>Danh sách thể loại phim</h2>
      {categories.map((category) => {
        return (
          <CategoryCard category={category} />
        )
      })}
    </div>
  )
}

export default Category