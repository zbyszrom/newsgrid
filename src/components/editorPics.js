import React from 'react'
import {Link} from'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components" 
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
const Black = styled.article`
  background: var(--dark);
  color: #fff;
    a {
      color: white;
    }
    button {
      background: var(--secondary);
    }
`
const Red = styled.article`
  background: var(--primary);
  color: white;
  a {
      color: white;
    }
    button {
      background: var(--secondary);
    }
`
const Ent = styled.button`
  background: var(--ent);
`
const Sports = styled.button`
  background: var(--secondary);
` 
const Tech = styled.button`
  background: var(--tech);
`

const EditorPics = ()=>{

  const data = useStaticQuery(getImages)
  const picImages = data.editorImages.edges

    return (
        <section>
          <div className = 'container'>
            <h2>Editor Picks</h2>
            <div className = 'articlesContainer'>
              <article>
                <Img fluid = {picImages[0].node.childImageSharp.fluid} alt = ""></Img>
                <div>
                <Ent>Entertainment</Ent>
                <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
                </div>
              </article>

              <Black>
              <button>Sports</button>
              <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
              </Black>

              <article>
              <Img fluid = {picImages[3].node.childImageSharp.fluid} alt = ""></Img>
                <div>
                <Tech>Technology</Tech>
                <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
                </div>
              </article>

              <article>
                <div>
                <Sports>Sports</Sports>
                <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>    
                </div>
                <Img fluid = {picImages[2].node.childImageSharp.fluid} alt = ""></Img>
              </article>

              <article>
              <Img fluid = {picImages[4].node.childImageSharp.fluid} alt = ""></Img>
                <div>
                <Tech>Technology</Tech>
                <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>    
                </div>
              </article>

              <Red>
              <button>Sports</button>
              <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
              </Red>

              <article>       
                <div>
                <Ent>Entertainment</Ent>
                <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
                </div>
                <Img fluid = {picImages[1].node.childImageSharp.fluid} alt = ""></Img>
              </article>
                 
            </div> 
            </div>           
            </section>
    )
}
export default EditorPics