import styled from 'styled-components'

export const Container = styled.div `

    height: 40px;
    height: fit-content;

    & .maior{
        flex-direction:column;
        background: rgba(0,0,0,0.4);
        border-radius: 6px;
        display: flex;
        height: 450px;
        width: 450px;
        align-items: center;
        justify-content: center;
        color: white;
    }

    & h1{
        font-size: 20px;
    }

    & .menor{
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;

    }

    & img{
        height: 60px;
        width: 60px;

    }


    & input{
        border: none;
        margin: 10px;
        padding: 5px;
        width: 200px;
        border-bottom: 2px solid white;
        background: transparent;
        color: white;
    }

    & input::placeholder{

        color: white;

    }
    
    & .buttonLogin{
        width: 200px;
        height: 30px;
        border: none;
        background: -webkit-linear-gradient(19deg, rgb(85, 62, 31), rgb(230, 179, 74));
        background: linear-gradient(19deg, rgb(85, 62, 31), rgb(230, 179, 74));
        border-radius: 6px;
        color: white;
        cursor: pointer;
        outline: none;

    }

    & .buttonLogin:active{
        background: -webkit-linear-gradient(90deg, rgb(139, 50, 15), rgb(117, 65, 49));
        background: linear-gradient(90deg, rgb(139, 50, 15), rgb(117, 65, 49));
        position: relative;
        top:5px;
    }

`