import React, { useEffect, useState } from 'react'
import "./CategoryCard.scss"
import { Link } from 'react-router-dom'
import { getRandomGradient } from '../../utils/getRandomGradient';

const CategoryCard = ({ category }) => {
    const [bgColor, setBgColor] = useState('');
    console.log("bgColor", bgColor);

    useEffect(() => {
        setBgColor(getRandomGradient());
    }, []);
    return (
        <Link to={`/category/${category.name}`} className='category-card-link'>
            <div className='category-card' style={{ background: bgColor }}>
                {category.name}
            </div>
        </Link>
    )
}

export default CategoryCard