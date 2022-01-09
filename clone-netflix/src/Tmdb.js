const API_KEY = '5cf4e8559cae0a763a573c840fc355f1';
const API_BASE = 'https://api.themoviedb.org/3';

/*
    Filmes que serão pegos:

*/
const basicFetch = async(endpoint)=>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async ()=>{
        return[
            { 
                slug:'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },{
                slug:'trending',
                title:'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },{
                slug:'toprated',
                title:'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },{
                slug:'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_geners=28&language=pt-BR&api_key=${API_KEY}`)
            },{
                slug:'comedy',
                title:'Comédia',
                items: await basicFetch(`/discover/movie?with_geners=35&language=pt-BR&api_key=${API_KEY}`)
            },{
                slug:'horror',
                title:'Terror',
                items: await basicFetch(`/discover/movie?with_geners=27&language=pt-BR&api_key=${API_KEY}`)
            },{
                slug:'romance',
                title:'Romance',
                items: await basicFetch(`/discover/movie?with_geners=10749&language=pt-BR&api_key=${API_KEY}`)
            },{
                slug:'documentary',
                title:'Documentario',
                items: await basicFetch(`/discover/movie?with_geners=99&language=pt-BR&api_key=${API_KEY}`)
            }

        ];
    },
    getMovieInfo: async (movieId,type) =>{
        let info = {};

        if(movieId){
            // eslint-disable-next-line default-case
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
            }
        }
        return info;
    }
}