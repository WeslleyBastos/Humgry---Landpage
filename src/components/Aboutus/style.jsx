import styled from "styled-components";

export const MainContainer= styled.div`
    display:flex;
    flex-direction: column-reverse;
    margin: 10%;
    text-align: justfied;
    align-items: center;
    justify-content: space-between;
    width:80vw;

    .meal{
        margin: 10%;
        width: 60%;

    }
    .description{
        h2{
            font-size:4em;
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
        
    }
    @media (min-width:768px){

        display:flex;
        flex-direction: row;
        text-align: justfied;
        align-items: start;
        justify-content: space-between;

        .meal{
            margin: 0 4rem 0 0;
            width: 35%;
    
        }
    }
`