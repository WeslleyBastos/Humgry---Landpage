import styled from "styled-components";
import yellowbg from '../../assets/yellowbg.png'

export const UpperContainer = styled.div`
    background-color: var(--yellow);
    width: 100vw;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;

    .newslatter{
        margin: 3% 10%;
        width: 200px;
        display:flex;
        flex-wrap: wrap;

        h2{
            font-size:20px;
            font-weight: bold;

        }
        
        h1{
            font-size: 43px;
            font-weight: 400;
            margin: -7% 3%;
        }

    }
    .subscribe{
        margin: 0 auto;
        margin-bottom: 5%;
        padding: 20px;
        background-color: var(--red);
        width: 300px;
        height: 115px;
        border-radius: 23px;

        .news{
            width: 265px;
            border: solid 2px var(--white);
            background: transparent;
            padding: 5px;
            border-radius: 50px;

            &:hover{
                background: var(--white);
            }
        
            ::placeholder{
                font-family: 'Halant';
                color: white;
            }
        }
        .join{
            font-size: 14px;
            text-transform: uppercase;
            border-radius: 5px;
            background-color: var(--yellow);
            width: 120px;
            height: 30px;
            margin: 6% 0 0 1%;
            font-weight: bold;
            font-family: 'Halant';

        }

    }

    @media (min-width: 768px){
        background-image: url(${yellowbg});
        background-size: cover;
        background-repeat: no-repeat;


        .newslatter{
            width: 400px;

            
            h2{
                font-size: 60px;
    
            }
            
            h1{
                font-size: 105px;
                font-weight: 400;
                margin: -7% 5%;
            }
    
        }
        .subscribe{
            margin: 0 auto;
            margin: 5%;
            width: 330px;
            height: 135px;
    
            .news{
                width: 285px;
    
            }
        }
    
    }
`
export const LowerContainer = styled.div`
    background-color: var(--red);
    width: 100vw;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    
    .social-media{
        display: flex;
        flex-wrap: wrap;
        margin: 10% 0;
        width: 220px;

        h4{
            text-transform: uppercase;
            color: var(--yellow);
            font-family: 'Halant',serif;
            font-weight: 600;
            width:200px;
            text-align: center;

        }
        img{
            margin: 1% 0 0 7%;
            cursor: pointer;

        }
    }
    .schedule{
        margin: 5% 0;
        width: 240px;

        h4{
            text-transform: uppercase;
            color: var(--yellow);
            font-family: 'Halant',serif;
            font-weight: 600;
            text-align: center;
            margin-bottom: 1rem

        }
        .time{
            color: var(--white);
            text-align: center;
            font-weight: 600;

        }

    }
    .adress{
        margin: 5% 10%;
        width: 230px;

        h4{

            text-transform: uppercase;
            color: var(--yellow);
            font-family: 'Halant',serif;
            font-weight: 600;
            text-align: center;
            margin-bottom: 1rem
        }
        .local{
            color: var(--white);
            text-align: center;
            font-weight: 600;
        }

    }


    @media (min-width: 768px){
        margin: 0 auto;
        justify-content: space-around;
        
        
        .social-media{
            flex-flow: wrap;
            display: flex;
            margin: 8% 5%;
            width: 220px;
            h4{
                text-transform: uppercase;
                color: var(--yellow);
                font-family: 'Halant',serif;
                font-weight: 600;
                text-align: center;
                width:200px;
    
            }
            img{
                margin: 0 0 0 7%;
                cursor: pointer;
    
            }
        }
        .schedule{
            margin: 5% 0;
            width: 240px;
    
            h4{
                text-transform: uppercase;
                color: var(--yellow);
                font-family: 'Halant',serif;
                font-weight: 600;
                text-align: center;
                margin-bottom: 1rem
    
            }
            .time{
                color: var(--white);
                text-align: center;
                font-weight: 600;
    
            }
    
        }
        .adress{
            margin: 5% 5%;
            width: 230px;
    
            h4{
    
                text-transform: uppercase;
                color: var(--yellow);
                font-family: 'Halant',serif;
                font-weight: 600;
                text-align: center;
                margin-bottom: 1rem
            }
            .local{
                color: var(--white);
                text-align: center;
                font-weight: 600;
            }
    
        }
    }



`