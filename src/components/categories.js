import React from 'react'
import {FaChevronRight} from 'react-icons/fa' 

const Categories = ()=>{
    return(
        <article>
        <h2>Categories</h2>
        <ul >
            <li><a href="#"><FaChevronRight/>Sports</a></li>
            <li><a href="#"><FaChevronRight/>Entertainment</a></li>
            <li><a href="#"><FaChevronRight/>Technology</a></li>
            <li><a href="#"><FaChevronRight/>Fashion</a></li>
            <li><a href="#"><FaChevronRight/>Shopping</a></li>
          </ul>
          </article>
    )
}
export default Categories