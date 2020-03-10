import React from 'react'
import {Link} from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const getImage = graphql`
query {
    Bcg: file(name: {eq: "featured"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
}
`


const Showcase = ()=> {

    const data = useStaticQuery(getImage)

    return(
        <BackgroundImage
        fluid = {data.Bcg.childImageSharp.fluid} className = ''>
            <div className =''>
            <h1>Some Sports Article</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus rerum officia quibusdam mollitia deserunt animi soluta laudantium. Quam sapiente a dolorum magnam necessitatibus quis tempore facere totam. Dolor, sequi distinctio!</p>
            <Link to = ''> Read more</Link>
            </div>
          </BackgroundImage>  

    )
}
export default Showcase
