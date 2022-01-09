import React, {useState} from 'react';
import * as Style from './styled.js';

const MovieRow = ({title,items})=>{

    //Lógica do Carousel 
    const [scrollX,setScrollX] = useState(-400);

    const moveScrollLeft = ()=>{
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x > 0){
            x=0;
        }
        setScrollX(x);
    }

    const moveScrollRight = ()=>{
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = items.results.length * 150;
        
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;

        }

        setScrollX(x);
    }
    // Fim Lógica do Carousel
    return(
        <Style.MovieRow>
            <h2>{title}</h2>
            <Style.BtnEsquerda>
               <div className="esquerda" onClick={moveScrollLeft}>V</div>
               <div className="direita" onClick={moveScrollRight}>V</div>
            </Style.BtnEsquerda>
           
            <Style.ListMovies style={{marginLeft: scrollX, width: items.results.length * 150}}>

                {items.results.map((item,key)=>(
                    
                    <div className="containerMovie" key={key}>
                        <img src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>    
                   
                    
                ))}
            </Style.ListMovies>
        </Style.MovieRow>
    );
}

export default MovieRow;