import * as Styled from './styled'

const FeaturedMovie = ({item})=>{
    let date = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    return(
        <Styled.ContainerMovie style={{
            backgroundSize: 'cover',
            bakgroundPosition:'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="vertical-featured">
            <div className="horizontal-featured">
                <div className="featured-name">{item.original_name}</div>
                <div className="featured-info">
                    <div className="featured-points">{item.vote_average}</div>
                     <div className="featured-year">{date.getFullYear()}</div>
                    <div className="featured-seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !==1? 's' : ' '}</div>
                </div>
                <div className="featured-description"> {item.overview}</div>
                <div className="featured-buttons">
                    <a href={`/watch/${item.id}`}>Assistir</a>
                    <a href={`/add/${item.id}`}>+ Minha Lista</a>
                </div>
                <div className="featured-genres">
                    <strong>Gêneros: </strong>{genres.join(', ')}
                </div>
            </div>
            </div>
        </Styled.ContainerMovie>
    );
}

export default FeaturedMovie;