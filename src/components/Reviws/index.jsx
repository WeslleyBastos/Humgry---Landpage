//IMAGENS
import reviws from '../../assets/reviws.png'
import persona1 from '../../assets/persona1.png'
import persona2 from '../../assets/persona2.png'
import persona3 from '../../assets/persona3.png'

//FUNCTIONAL IMPORTS


//STYLE
import {MainContainer} from './style'

const Reviws = () => {
    return (
        <MainContainer>
            <div className="rating">
                <h2> Public and critical reviews: </h2>
                        <img src={persona3} alt='side' />
                    <div className='reviw1'>
                            <h3>Martin Stonk /</h3>
                            <h3>Times Journal: food columnist</h3>
                            <p>The terms food critic, food writer, and restaurant critic can all be used to
                            describe a writer who analyzes food or restaurants and then publishes the results of their findings.</p>
                    </div>

                    <img src={persona2} alt='side' />
                    <div className='reviw1'>
                            <h3>Juliana Casagrande /</h3>
                            <h3>Digital influencer</h3>
                            <p>The terms food critic, food writer, and restaurant critic can all be used to
                            describe a writer who analyzes food or restaurants and then publishes the results of their findings.</p>
                    </div>
                    
                        <img src={persona1} alt='side'/>
                    <div className='reviw1'>
                            <h3>Luciana Avan /</h3>
                            <h3>El País: food columnist</h3>
                            <p>The terms food critic, food writer, and restaurant critic can all be used to
                            describe a writer who analyzes food or restaurants and then publishes the results of their findings.</p>
                    </div>
            </div>
            <img src={reviws} alt='side' className='side-img'/>
        </MainContainer>
    )
}

export default Reviws