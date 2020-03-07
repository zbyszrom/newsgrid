import React from "react"
import Layout from '../components/layout'
import Showcase from '../components/showcase'
import EditorPics from '../components/editorPics'

const IndexPage = ()=> {
    return(
        <Layout>
            <Showcase/>
            <EditorPics/>        
        </Layout>
    )
}
export default IndexPage
