import React from "react";
import { useState } from "react";

function NewsFrame(props){
    const {title, url ,urlToImage, author ,content 
        ,description, publishedAt ,source } = props.news

    const [readMore, setReadMore] = useState(false);
    const handledescription = ()=>{
        setReadMore(!readMore)
    }

    return(
        <>  
        <article className="news_article"  >
            <a href={url} className='titlea'>  
            <h2>{title}</h2>
            </a>
            <p>
            
                {readMore ?  description  : description.substring(0,150) }

                {description.length > 150 ? 
                    <button onClick={handledescription} className='read-btn'>
                            {readMore ? 'less' : 'Read More'}
                    </button>
                : ' . . . '}
            </p>


            <p>Source: {url.split('/')[2]}</p>
            
            <img className="newsimg" src={urlToImage}/>
            
            <p>{author}</p>
        </article>  
        </>
    )
}

export default NewsFrame;