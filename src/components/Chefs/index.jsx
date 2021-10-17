//IMAGES
import chef1 from '../../assets/chef1.png'
import chef2 from '../../assets/chef2.png'
import chef3 from '../../assets/chef3.png'
//FUNCTIONAL
import {MainContainer} from './style'

const Chefs = ({id}) =>{
    return(
        <MainContainer  id={id}>
        <div className = 'title' >
            <h2>Our Chefs</h2>
            <p>The commitment to always innovate and serve</p>
        </div>
        <div className = 'staff'>
            <img src={chef1} alt='chefs' className='chefs'/>
            <img src={chef2} alt='chefs' className='chefs'/>
            <img src={chef3} alt='chefs' className='chefs'/>
        </div>
        </MainContainer>
    )
}
export default Chefs