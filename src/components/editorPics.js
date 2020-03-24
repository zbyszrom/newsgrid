import React from 'react'
import {Link} from'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getImages = graphql `
query  {
  editorImages: allFile(filter: {relativeDirectory: {eq: "articles"}}, sort: {fields: childImageSharp___fluid___originalName}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
          id
        }
      }
    }
  }
}


`  





const EditorPics = ()=>{

  const data = useStaticQuery(getImages)
  const picImages = data.editorImages.edges

    return (
        <section>
          <div className = 'container'>
            <h2>Editor Picks</h2>
            <div>
              <article>
           
                <Img fluid = {picImages[0].node.childImageSharp.fluid} alt = ""></Img>
                <div><button>Entertainment</button>
                <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
                </div>
              </article>

              <article>
              <button>Sports</button>
              <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
              </article>

              <article>
              <Img fluid = {picImages[3].node.childImageSharp.fluid} alt = ""></Img>
                <div>
                <button>Technology</button>
                <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
                </div>
              </article>

              <article>
              <Img fluid = {picImages[2].node.childImageSharp.fluid} alt = ""></Img>
                <div>
                <button>Sports</button>
                <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>    
                </div>
              </article>

              <article>
              <Img fluid = {picImages[4].node.childImageSharp.fluid} alt = ""></Img>
                <div>
                <button>Technology</button>
                <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>    
                </div>
              </article>

              <article>
              <button>Sports</button>
              <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
              </article>

              <article>
              <Img fluid = {picImages[1].node.childImageSharp.fluid} alt = ""></Img>
                <div>
                <button>Entertainment</button>
                <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
                </div>
              </article>
                 
            </div> 
            </div>           
            </section>
    )
}
export default EditorPics