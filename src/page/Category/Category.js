import React, { useEffect, useState } from 'react'
import "./Category.scss"
import CategoryCard from '../../component/CategoryCard/CategoryCard'
import { fetchCategoryList } from '../../apis/fetchCategoryList'

const Category = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCategoryList = async () => {
    try {
      const categoryList = await fetchCategoryList();
      setCategories(categoryList);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className='category-list'>
      <h2 className='category-list-title'>Danh sách thể loại</h2>
      {categories.map((category) => {
        return (
          <CategoryCard key={category.Genre} category={category} />
        )
      })}
    </div>
  )
}

export default Category