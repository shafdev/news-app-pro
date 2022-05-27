import axios from "axios";
import { useEffect, useState } from "react"
import NewsFrame from "./Newsframe";


function News(){
    const [search,setSearch] = useState({category:'sports'})
    const [news,setNews] = useState([])

    
    var url = `https://news-back-vic.herokuapp.com/${search.category}`
    async function getNews(){
        try{
            var result =  await axios.get(url);
        console.log(result.data.articles)
            if(result.data.articles){
                setNews(result.data.articles)
            }if(!result.data.articles){
                getNews()
            }
            

        }catch(err){
            throw new Error(err);
            console.log(err)
        }  
    }
    
    // console.log(news)
    
    const handleChange =(e)=>{
        // console.log(e.target.value)
        // console.log(e.target.name)
        setSearch(prev=>{
            return{
                ...prev,
                [e.target.name]:e.target.value,
            }
        })
        
    }
    
    useEffect(()=>{
        getNews()
    },[])

    

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('submitted')
        getNews()
        // console.log(search.topic)
        
        
    }
    console.log(search)

    return(
        <>
        <form onSubmit={handleSubmit}>
            <select  className="select"
                name = 'category'
                value={search.category} 
                onChange={handleChange}>
                    <option value="business" >Business</option>
                    <option value="health" >Health</option>
                    <option value="sports" >Sports</option>
                    <option value="entertainment" >Entertainment</option>
                    <option value="general" >General</option>
                    <option value="technology" >technology</option>
                    <option value="science" >science</option>
            </select>

            <button className="click-btn">Search</button>
        </form>
            <div className='news'>
            {news.map((item) =>{
                return(<div key={item.url}>
                         <NewsFrame  news = {item}/>
                    </div>
                )
            }
            )}
                
            </div>
            
        </>
    )
}


export default News;