//IMAGEM
import vitelos from '../../assets/vitelos.png'
import souce from '../../assets/souce.png'
//FUNCTIONAL-COMPONENTS

import Navbar from "../Nav/Navbar";
// STYLED-COMPONENTS

import {HeaderContainer } from "./style";

const Header = ({id}) => {
    return(
    <div>
    <HeaderContainer id={id}>
     <Navbar/>
        <div className="head-line">
            <h3>Week's special</h3>
            <h2>Vitelo's</h2>
        </div>
        <figure>
            <img src={vitelos} alt='burger' className='burger'/>
            <img src={souce} alt='burger' className='souce' />
        </figure>
        <div className='grabit'>
            <h2>30%</h2>
            <p>Discount</p>
            <button>Buy it</button>
        </div>
        <div className='description'>
            <p>Real Hamburguer</p>
            <p>320g veal meet</p>
            <p>100% fresh</p>
            <p>100% fresh</p>
        </div>
    </HeaderContainer>
    </div>

    )
}

export default Header