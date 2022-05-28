import React from "react";
import { useState } from "react";

function NewsFrame(props){
    const {title, url ,urlToImage, author ,content 
        ,description, publishedAt ,source } = props.news

    const defaultImageUrl = 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'


    const [readMore, setReadMore] = useState(false);
    const handledescription = ()=>{
        setReadMore(!readMore)
    }

    return(
        <>  
        <hr/>
        <article className="news_article"  >
            <div className="news_content">
            <a href={url} className='titlea'>  
            <h2>{title}</h2>
            </a>
            <p>
             {readMore ?  description  :   description ? description.substring(0,100) :'' }

                { description? description.length > 100 ? 
                    <button onClick={handledescription} className='read-btn'>
                            {readMore ? 'less' : 'Read More'}
                    </button>
                : ' . . . ':''}
            </p>

            <a href={url} className="source-url">
            <p className="source">Source: {url.split('/')[2]}</p>
            </a>      

            <p className="author">{author}</p>
            </div>
            <img className="news_img" src={urlToImage? urlToImage: defaultImageUrl}/>
            
            
        </article>  
        </>
    )
}

export default NewsFrame;