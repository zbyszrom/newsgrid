import React from 'react'
import {Link} from 'gatsby'
import Image from "gatsby-image"

const PhotoArticle = (props)=>{
    return(
    <>
     {/* <Image fluid = '' /> */}  
       <button>{props.text}</button>
       <h3>
          <Link to = ''>
          Lorem ipsum dolor sit amet  
          </Link>  
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
    </>
    )
}
export default PhotoArticle