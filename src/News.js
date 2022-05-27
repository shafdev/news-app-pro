import axios from "axios";
import { useEffect, useState } from "react"
import NewsFrame from "./Newsframe";


function News(){
    const [search,setSearch] = useState({topic:'India',category:'sports'})
    const [news,setNews] = useState([])

    // var date = new Date()
    // var year = date.getFullYear()
    // var day = date.getDate()
    // var month = date.getMonth()+1
    // var month = (month.toString().length)===1 ? 
    //             `0${month}`:`${month}`
    // var day = (day.toString().length)===1 ? 
    //               `0${day}`:`${day}`
    // var datestring = `${year}-${month}-${day}`
    // console.log(datestring)
    // console.log(search.category)
    // var url = 'https://newsapi.org/v2/everything?' +
    // `q=${search.topic}&` +
    // `from=${datestring}&` +
    // 'sortBy=popularity&' +
    // 'apiKey=c410f240269d4d2ca76407f196169a7b';

    // key='c6e71a296e8d6448cad4939c74e85e5f0'
    //key2 'apiKey=c410f240269d4d2ca76407f196169a7b' 
    // key3 : 2ef7012b678140579ba81caca5c07313
    //key4: d01b19d0c62748d595e6f3fe005403a1
    // https://newsapi.org/v2/everything?q=entertainment&apiKey=d01b19d0c62748d595e6f3fe005403a1
    // https://newsapi.org/v2/top-headlines/sources?apiKey=d01b19d0c62748d595e6f3fe005403a1
    // https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d01b19d0c62748d595e6f3fe005403a1
    
    // var url = `https://newsapi.org/v2/top-headlines?country=in&category=${search.category}&apiKey=d01b19d0c62748d595e6f3fe005403a1`
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
        console.log(e.target.name)
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
    // const [category,setCaregory] = useState()
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Topic'
                name='topic'
                onChange={handleChange}    
                value={search.topic}                                  
            />
            {/* value={myCar}onChange={handleChange} */}

            <select  
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

            <button>Search News</button>
        </form>
            <div>
            {news.map((item) =>{
                return(<div key={item.url}>
                         <NewsFrame  news = {item}/>
                    </div>
                )
            }
            )}
                
            </div>
            
            {/* hello world */}
        </>
    )
}


export default News;