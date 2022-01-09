import {ResetCSS} from './components/global/resetcss';
import React, {useState,useEffect} from 'react';
import Tmdb from './Tmdb';
import FeaturedMovie from './components/FeaturedMovie';
import MovieRow from './components/Movierow';

function App() {

  const [movieList,setMovieList] = useState([]);
  const [featuredData,setFeaturedData] = useState(null);

  useEffect(()=>{
    const loadAll = async()=>{
      //Pegando a listagem de Filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegando o filme de cartaz
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
      setFeaturedData(chosenInfo);
      
    }

    loadAll();
  }, []);
  
  return (
    <div className="App">
      <ResetCSS />
      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }
      { movieList.map((item,key)=>(
        <MovieRow title={item.title} items={item.items} key={key}/>
      ))}
      
    </div>
  );
}

export default App;
