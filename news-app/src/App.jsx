import { useState, useEffect } from 'react'
import './App.css';
import Header from './Header';

function App() {
  
  const[temp, setTemp] = useState(0);
  const [articles, setArticles] = useState([]);

  const KEYONE = import.meta.env.VITE_KEYONE;
  const KEYTWO = import.meta.env.VITE_KEYTWO;


const URL = `https://api.weatherapi.com/v1/current.json?key=${KEYONE}&q=03755`;
const URLTWO = `https://newsdata.io/api/1/latest?apikey=${KEYTWO}&country=us&category=technology&language=en&image=1`;


  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(json => setTemp(json.current.temp_f))
      .catch(err => console.log(err));

    fetch(URLTWO)
      .then(res => res.json())
      .then(json => setArticles(json.results || []))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Temp">
        Hanover, NH - {temp}°F
      </div>
      <div className="News">
        {articles.map((article, i) => (
          <a 
            key={i} 
            className="Article" 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {article.image_url && (
              <img src={article.image_url} alt="" className="ArticleImg" />
            )}
            <div className="ArticleText">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
export default App