import axios from "axios";
import { useEffect, useState } from "react"
import NewsFrame from "./Newsframe";


function News(){
    const [search,setSearch] = useState({category:'sports'})
    const [news,setNews] = useState([])

    
    
    async function getNews(){
        var url = `https://news-back-vic.herokuapp.com/${search.category}`
        console.log(search.category)
        
        try{
            var result =  await axios.get(url);
            // console.log(result.data.articles)
            if(result.data.articles){
                setNews(result.data.articles)
                console.log('getNews called')
            }
            if(!result.data.articles){
                getNews()
                console.log('getNews called from no data')
            }
            

        }catch(err){
            throw new Error(err);
            console.log(err)
        }  
    }
    
    
    const handleChange =(e)=>{

        setSearch(prev=>{
            return{
                ...prev,
                [e.target.name]:e.target.value,
            }
        })
        // getNews()
        
    }
    
    useEffect(()=>{
        getNews()
    },[search])

    

    const handleSubmit =(e)=>{
        e.preventDefault()
        // console.log('submitted')
        getNews()
        // console.log(search.topic)
        
        
    }
    // console.log(search)

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

            {/* <button className="click-btn">Search</button> */}
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