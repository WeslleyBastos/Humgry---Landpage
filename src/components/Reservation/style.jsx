import styled from "styled-components";

export const MainContainer= styled.div`
  display:flex;
    flex-direction: column-reverse;
    margin: 10%;
    text-align: justfied;
    align-items: center;
    justify-content: space-between;
    width: 80vw;

    .send-reserve{
        
    }
    button{
        background-color: blue;
    }

    .meal{
        margin: 10%;
        width: 60%;

    }
    .description{
        h2{
            font-size:4em;
            line-height: 70px;
            font-weight: bold;

        }
        h3{
            line-height: 20px;
            margin-bottom: 1rem;
            text-transform: uppercase;

        }
        p{
            
            color: var(--gray);
        }
        
        button{
            font-size: 1em;
            text-transform: uppercase;
            border-radius: 11px;
            background-color: var(--yellow);
            width: 140px;
            height: 50px;
            margin: 1rem 0rem;
            font-weight: bold;
            font-family: 'Halant';

        }
        
    }
   
    @media (min-width:768px){

        display:flex;
        flex-direction: row-reverse;
        text-align: justfied;
        align-items: start;
        justify-content: space-between;

        .description{
            h2{
                line-height: 100px;
            }
        }

        .meal{
            margin: 0 0 0 6rem;
            width: 35%;
    
        }
    }
`