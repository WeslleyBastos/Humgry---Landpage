import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin:10%;
    text-align: center;

    img{
        margin: 0 auto;
    }

    h2{
        font-weight: bold;
        font-size: 40px;
        line-height: 50px;
        margin: 2%;
    }

    .rating{
      
    }
    .reviw1{
        margin: 8% 0%;
    }

    .side-img{
        margin-top: 2%;
        width: 100%;
    }

    @media(min-width: 768px){
        flex-direction: row-reverse;
        text-align: justify;
        margin: 5%;
        margin-left: 10%;

        img{
            margin: initial;
        }

        h2{
            margin-top: -3rem;
        }

        .rating{
            margin: 3% 4% 0 6%;
        }

        .reviw1{
            position: relative;
            flex-flow: wrap;
            display: flex;
            margin: -6.5rem 0% 9% 8rem;
        }

        .side-img{
            width: 30vw;
            height: 80vh;
        }
    }
`