import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
const {categoryName} = useParams();
  return (
    <div>
      <h1>{categoryName}</h1>
    </div>
  )
}

export default CategoryPage