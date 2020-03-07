import React from 'react'
import Layout from '../components/layout'
import ArticleC from '../components/article'
import Categories from '../components/categories'
import Club from '../components/club'

const Article = (props)=> {
    return(
        <Layout>
            <ArticleC/>
            <Categories/>
            <Club/>
        </Layout>
    )
}
export default Article 
