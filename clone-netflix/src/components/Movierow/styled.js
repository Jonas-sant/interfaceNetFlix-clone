import styled from 'styled-components';

export const MovieRow = styled.div`
overflow-x: hidden;
    h2{
        font-size:1.4em;
        font-weight:700;
        margin:0px 0px 0px 30px;

    }
    &:hover .esquerda,
    &:hover .direita{
        opacity:1;
    }
`;
export const BtnEsquerda = styled.div`
    
    width:30px;
    height:30px;
    font-size:30px;
    font-weight:bold;
    color:white;

    div{
        z-index:999;
        transform: rotate(90deg);
        background-color:white;
        color:#fff;
        background-color: transparent;
        cursor:pointer;
        width:200px;
        display:flex;
        justify-content: center;
        opacity:0;
        transition: all 0.2s ease-in-out;
    }

    .esquerda{
        position:relative;
        
        top:125px;
        left:-80px;
        background-color:rgba(0,0,0,0.5);
    }
    .direita{
        background-color:rgba(0,0,0,0.5);
        width:200px;
        display:flex;
        justify-content: center;
        position:relative;
        top:92px;
        left:1230px;
        transform:rotate(-90deg);
    }
`
export const ListMovies = styled.div`
    box-sizing: border-box;
    margin-left:30px;
    transition: all 0.2s ease-in-out;
    

    .containerMovie{
        display:inline-block;
        width:150px;
        

        img{
            width:100%;
            transform: scale(0.9);
            transition: all 0.2s;
            
            &:hover{
                transform:scale(1)
            }
        }
        
    }
`;
