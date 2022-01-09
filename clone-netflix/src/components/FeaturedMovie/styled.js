import Styled from 'styled-components';

export const ContainerMovie = Styled.div`
    height:87vh;


    .vertical-featured{
        width:inherit;
        height:inherit;
        background: linear-gradient(to top, #111 5%, transparent 95%)
        
    }
    .horizontal-featured{
        width:inherit;
        height:inherit;
        background: linear-gradient(to right, #111 30%, transparent);
        display:flex;
        flex-direction:column;
        justify-content: end;
        padding-left:10%;
        padding-bottom: 5%;
    }
    .featured-name{
        font-weight: bold;
        font-size:65px;
    }
    .featured-info{
        width:300px;
        display: flex;
        align-items:center;
        justify-content:space-evenly;
        font-weight: bold;
        font-size:1.3em;
        margin:20px 0px 10px 0px;
    }
    .featured-points{
        color:#46d369;
    }
    .featured-description{
        width:60%;
        margin-bottom:50px;
    }

    .featured-buttons{
        margin-bottom:50px;

        a{
            background:white;
            font-size:1.4em;
            padding: 4px 25px 4px 25px;
            border-radius:3px;
            color:#111;
            margin-left:35px;
        }
        a:nth-child(2){
            background-color:transparent;
            color:#fff;
        }
    }
    
`