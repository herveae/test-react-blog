import { useState } from 'react';

const Main = ()=> {
    const[article, setArticle]=useState([
        {
            id:1,
            titre:"Web Developpement",
            text:"Apprenez facilement le developpement web avec React Js et creez des applications reactives",
            auteur:"Herve",
            date:"01/03/2023"
        },
        {
            id:2,
            titre:"Mobile developpement",
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga deleniti pariatur quas sint alias dolore eum voluptas, corrupti impedit modi delectus quam consectetur commodi provident numquam cupiditate at quasi necessitatibus.",
            auteur:"Flora",
            date:"14/04/2024"
        },
        {
            id:3,
            titre:"IoT for all",
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga deleniti pariatur quas sint alias dolore eum voluptas, corrupti impedit modi delectus quam consectetur commodi provident numquam cupiditate at quasi necessitatibus.",
            auteur:"Loic & Serge",
            date:"15/04/2024"
        },
        {
            id:4,
            titre:"IcT security",
            text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga deleniti pariatur quas sint alias dolore eum voluptas, corrupti impedit modi delectus quam consectetur commodi provident numquam cupiditate at quasi necessitatibus.",
            auteur:"Serge",
            date:"15/04/2024"
        }
    ]);

    return ( 
        <section id='article'>
            <div className="container">
                <h2>Blog</h2>
                {
                    article.map(
                        (blog)=>(
                            <div className="row">
                                <div className="col-lg-5 mx-auto mb-5 blogs" key={blog.id}>
                                    <a href="" className="blog-title d-block">{blog.titre}</a>
                                    <small className='blog-date'>publie le {blog.date}</small>
                                    <p className="blog-text">{blog.text}</p>
                                    <p className='blog-auteur'>Publie par {blog.auteur}</p>
                                </div>
                                {/* <div className="col-lg-5">
                                    <img src="src/logo.svg" alt="images"/>
                                </div> */}
                            </div>
                        )
                    )
                   }
                
            </div>
        </section>
     );
}
 
export default Main;
