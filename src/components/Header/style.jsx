import styled from "styled-components";
import mainbg from '../../assets/mainbg.png'


export const HeaderContainer = styled.div`
    background: rgb(246,237,27);
    background: linear-gradient(180deg, rgba(246,237,27,1) 50%, rgba(227,27,14,0.99) 50%);
    width: 100vw;
    height:100vh;
    overflow-x: hidden;
    z-index: 0;

        .head-line{
            display:flex;
            flex-direction: column;
            margin: 3rem 0 0 1rem;
            font-weight: bold;

                h3{
                    font-size:1.2em
                    
                }

                h2{
                    font-size:3.5em
                }

        }
        .burger{
            position: relative;
            width: 300px;
            margin-left: 50%;
            margin-top:-5rem;
            z-index: 1;
           
        }
        .souce{
            display: none;
        }
        .grabit{
            margin: -7rem 0rem 0rem 0rem;
            text-align: justfied;
            font-weight: 600;

            h2{
                margin: 0rem 0rem 0rem 4rem;
                color: var(--white);
                font-size: 2.5em;
            }
            p{
                margin: 0rem 0rem 0rem 4rem;
                color: var(--white);
                font-size: 1em;

            }
            button{
                font-size: 1em;
                text-transform: uppercase;
                border-radius: 11px;
                background-color: var(--yellow);
                width: 120px;
                margin: 1rem 0rem;
                height: 50px;
                font-weight: bold;
                font-family: 'Halant';
                margin: 1rem 0rem 0rem 2.3rem;

            }

        }
        .description{
            p{
                display:none;
            }
           
        }


    @media(min-width: 768px){
        background-image: url(${mainbg});
        background-size: 100%;
        background-repeat: no-repeat;

        .head-line{
            margin: 3rem 0 0 3rem;

                h3{
                    font-size:1.5em
                    
                }

                h2{
                    font-weight: bolder;
                    font-size:5.5em
                }

        }

        .burger{
            position: relative;
            width: 29%;
            margin-left: 35%;
            margin-top:-10rem;
            z-index: 0;
           
        }

        .souce{
                right: 170px;
                display: block;
                position: absolute;
                top: 55px;
            }
        }

     

        .grabit{
            margin: -10rem 0rem 0rem 0rem;

            h2{
                margin: 0rem 0rem 0rem 4rem;
                color: var(--white);
                font-size: 3.5em;
            }
            p{
                margin: 0rem 0rem 0rem 4.2rem;
                font-size: 1.3em;
                font-weight: bold;

            }
            button{
                font-size: 1.3em;
                width: 140px;
                margin: 1rem 0rem 0rem 3rem;

            }
    }

`
