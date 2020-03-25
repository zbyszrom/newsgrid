import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Button from './Button'

const Article = styled.article`
    background: ${props => props.color};
    color: white;
`

const Club = ()=> {
return(

<Article >
<h2>Join Our Club</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, id?</p>
<Button to=''>Join Now</Button>
</Article>
)
}
export default Club


