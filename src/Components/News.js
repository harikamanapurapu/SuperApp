import '../Components/News.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]);
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

    console.log(newsData)
  useEffect(() => {
    const fetchData = async () => {

      const apiKey = "82d8f281191349788da6e6ad02454efa"
      const url = `https://newsapi.org/v2/everything?q=Nature`; // Replace with the API endpoint URL

      try {
        const response = await axios.get(url, {
          params: {
            apiKey: apiKey,
            // Add any other necessary parameters
          },
        });

        if (response.data && response.data.articles && Array.isArray(response.data.articles)) {
            console.log(response.data.articles)
            setNewsData(response.data.articles);
        } else {
          console.error('Invalid API response:', response);
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchData();
  }, []);

  const indexToFetch = 20; // Replace with the desired index

   const article = newsData[indexToFetch];

  useEffect(()=>{
    const date = new Date
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    setTime(strTime)
})
useEffect(()=>{
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '-' + mm + '-' + yyyy;
    setDate(formattedToday)
})

  return (
    <div>
      {article && (
      <div className='news-container'>
        <div className="news-image">
            <img src={article.urlToImage} alt="img" style={{width:"400px",height:"400px"}}/>
        </div>
        <div className="title">
            <p className="text">{article.title}</p>
            <span style={{color:"white",fontSize:"1rem",}}>{date}</span>
            <span style={{color:"white",fontSize:"1rem",}}>{time}</span>
        </div>
        <div className="content">
            <p className="con">{article.content}</p>
        </div>
    </div>

      )}
    </div>
  );
};

export default NewsComponent;




{/*function News(){
    const [News,setNews]=useState([])

    fetch("")
    .then((res)=>res.json())
    .then((result)=>{
        console.log(result)
        setNews(result.data.articles)
    })
    const indexToFetch = 0;

    const article = News[indexToFetch];
    return(
        <div className="news-container">
            {article&&
            <div>
                <div className="news-image">
                    <img src={article.urlToImage} alt="img"/>
                </div>
                <div className="title">
                    <p className="text">{article.title}</p>
                </div>
                <div className="content">
                    <p className="con">{article.content}</p>
                </div>
            </div>
                }
                    
        </div>
    )
}
export default News*/}

//https://newsapi.org/v2/everything?q=India&apiKey=82d8f281191349788da6e6ad02454efa
      // const apiKey = "82d8f281191349788da6e6ad02454efa"
      // const url = `https://newsapi.org/v2/everything?q=Nature`; // Replace with the API endpoint URL