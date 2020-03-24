import React from 'react'
import {Link} from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import styled from "styled-components"
import { FaCentercode } from 'react-icons/fa'

const getImage = graphql`
query {
    Bcg: file(name: {eq: "featured"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
}
`
const SBackgroundImage = styled(BackgroundImage)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  height: 50vh;
  color: white;
  `
  const Content =styled.div`
  margin-left: 25%;
  `
 const Button = styled(Link)`
  display: inline-block;
  border: none;
  background: var(--primary);
  color: #fff;
  padding: 0.5rem 1.5rem;
  &:hover {
    background: var(--secondary);
    color: var(--dark);
  }
 `
const Showcase = ()=> {

    const data = useStaticQuery(getImage)
    const backgroundFluid = data.Bcg
    const backgroundFluidImageStack = [backgroundFluid.childImageSharp.fluid, 'linear-gradient(rgba(64, 64, 64, 0.60), rgba(64, 64, 64, 0.60))'].reverse()
    

    return(
      <div className= ''>
        <div className =''>
        <SBackgroundImage
        fluid = {backgroundFluidImageStack} className = '' >
            <Content>
            <h1>Some Sports Article</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus rerum officia quibusdam mollitia deserunt animi soluta laudantium. Quam sapiente a dolorum magnam necessitatibus quis tempore facere totam. Dolor, sequi distinctio!</p>
            <Button to = ''> Read more</Button>
            </Content>
          </SBackgroundImage>
          </div>
      </div>  

    )
}
export default Showcase
