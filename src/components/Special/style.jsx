import styled from "styled-components";
import yellowbg from '../../assets/yellowbg.png'

export const MainContainer = styled.div`
    background-color: var(--yellow);
    color: var(--black);
    width:100vw;
    height: 100vh;
    margin-bottom: 4%;
        
        h2{
            font-size: 40px;
            font-weight: 600;
            padding: 3% 5%;
    
        }
        p{
        font-size: 18px;
        padding: 0% 5%;
        margin-bottom: 5%;
        font-weight: bold;
        }
    
    .BrainhubCarousel__arrows {
        background-color: var(--red);

    &:hover{
        background-color: var(--red);
        opacity: 0.8;
        }
    }


    @media(min-width: 768px){
        background-image: url(${yellowbg});
        background-size: cover;
        background-repeat: no-repeat;
        margin-bottom: 4%;

        h2{
            font-size: 45px;
            padding: 2% 3%;
    
        }
        p{
            font-size: 18px;
            padding: 0% 3%;
            margin-top: -3%;
            font-weight: bold;
        }
    }
`