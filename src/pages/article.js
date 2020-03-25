import React from 'react'
import Layout from '../components/layout'
import ArticleC from '../components/article'
import Categories from '../components/categories'
import Club from '../components/club'
import SArticle from '../components/SArticle'
import Button from '../components/Button'

const Article = (props)=> {
    return(
        <Layout>
            <div className = 'container'>
            <div className = 'pageContainer'>        
            <ArticleC/>
            <div>
            <Categories/>
            <SArticle color = '#f99500'>
            <h2>Join Our Club</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, id?</p>
            <Button to=''>Join Now</Button>
            </SArticle>
            </div>
            </div>
            </div>
        </Layout>
    )
}
export default Article 
