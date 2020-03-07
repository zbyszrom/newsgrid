import React from 'react'
import {Link} from'gatsby'
import Ent1 from '../images/articles/ent1.jpg'
import Ent2 from '../images/articles/ent2.jpg'
import Sport from '../images/articles/sports1.jpg'
import Tech1 from '../images/articles/tech1.jpg'
import Tech2 from '../images/articles/tech2.jpg'


const EditorPics = ()=>{
    return (
        <section>
            <h2>Editor Picks</h2>
            <div>
              <article>
                <img src = {Ent1} alt = ""></img>
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
                <img src ={Tech1}/><div>
                <button>Technology</button>
                <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
                </div>
              </article>
              <article>
                <img src ={Sport}/><div>
                <button>Sports</button>
                <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>    
                </div>
              </article>
              <article>
                <img src ={Tech2}/><div>
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
                <img src ={Ent2}/>
                <div>
                <button>Entertainment</button>
                <h3>
                    <Link to = '/article'>Lorem ipsum dolor sit amet</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil beatae ea autem. Doloribus.</p>
                </div>
              </article>   
            </div>            
            </section>
    )
}
export default EditorPics