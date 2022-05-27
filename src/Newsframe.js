import React from "react";


function NewsFrame(props){
    const {title, url ,urlToImage, author ,content 
        ,description, publishedAt ,source } = props.news
    // const {name,id} = source
    // var link = url.split('/')[2]
    // console.log(link)
    // console.log(description)
    // if (description.length == 0){
    //     description = 'no description'
    // }
    // console.log(props.news)
    return(
        <>  
        <article className="news_article"  >
        
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Source: {url.split('/')[2]}</p>
            <a href={url}>Source Link</a>
            <img className="newsimg" src={urlToImage}/>
            {/* <p>{source.name}</p> */}
            <p>{author}</p>
        </article>  
        </>
    )
}

export default NewsFrame;