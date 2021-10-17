import styled from "styled-components";
import redbg from '../../assets/redbg.png'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--red);
    
    .title{
        margin: 5%;
        color: var(--white);
        text-align: justify;
        font-size: 1.8em;

        h2{
            font-weight: bold;
            
        }
        p{
            font-size: 18px;
            font-weight: 600;
        }
    }

    .staff{
        display:flex;
        flex-direction: column;
        align-items: center;

        .chefs{
            align-items: center;
            width:40%;
            margin: 5%;
        }
    }

    @media(min-width: 768px){
        
        flex-direction: row;
        background-color: var(--white);
        background-image: url(${redbg});
        background-size: cover;
        background-repeat: no-repeat;

        .title{
            position: absolute;
            margin: 30px;
        }
    
        .staff{
            width: 80vw;
            height: 100vh;
            display:flex;
            flex-direction: row;
            margin-left: 4%;
            margin-top: 3%;

            
    
            .chefs{
                align-items: center;
                width: 28%;
                
            }
        }
    }
`