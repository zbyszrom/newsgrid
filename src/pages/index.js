import React from "react"
import Layout from '../components/layout'
import Showcase from '../components/showcase'
import Article from '../components/article'
import PhotoArticle from '../components/photoArticle'

const IndexPage = ()=> {
    return(
        <Layout>
            <Showcase/>
            <section>
            <h2>Editor Picks</h2>
            <PhotoArticle text={"entertainment"}/>
            <Article text={"sports"}/>
            <PhotoArticle text={"technology"}/>
            <PhotoArticle text={"sports"}/>
            <PhotoArticle text={"technology"}/>
            <Article text={"sports"}/>
            <PhotoArticle text={"entertainment"}/>
            
            </section>
            
        </Layout>
    )
}
export default IndexPage
