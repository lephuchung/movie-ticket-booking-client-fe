import React, { useEffect, useState } from 'react'
import "./CategoryCard.scss"
import { Link, useNavigate } from 'react-router-dom'
import { getRandomGradient } from '../../utils/getRandomGradient';
import { getGenreTranslation } from '../../language/translateCategory';

const CategoryCard = ({ category }) => {
    const navigate = useNavigate();
    const [bgColor, setBgColor] = useState('');

    const handleOnclickCategoryDetail = () => {
        navigate(`/category/${category.Genre}`)
    }

    useEffect(() => {
        setBgColor(getRandomGradient());
    }, []);

    return (
        <div
            className='category-card'
            style={{ background: bgColor }}
            onClick={() => { handleOnclickCategoryDetail() }}
        >
            {getGenreTranslation(category.Genre)}
        </div>
    )
}

export default CategoryCard