//IMPORT IMAGE
import aboutus from '../../assets/aboutus.png'
//FUNCTIONAL IMPORT

//STYLE
import {MainContainer} from './style'

const Aboutus = ({id}) =>{
    return(
        <MainContainer id={id}>
            <img src={aboutus} alt='meal' className='meal'/>
            <div className = 'description'>

                <h2>About us</h2>
                <h3>An affectionate kitchen, passionate about what we do.
                    Leading to your best moments, the best of meals.</h3>
                <p>cooking has always been very present in my life. 
                    My mother is an older sister of 11 children, she always helped my grandmother
                    in the kitchen and became the best cook for her daughters. And when my mother 
                    started working abroad, I was 11 years old, cooking started to enter my life:
                    I stayed at night with my brother, and I started cooking, and like everyone else,
                    I started making noodles. made pasta mainly with tomato, basil and cheese.
                    When I turned 28, I decided to drop everything and become a chef.</p>
            </div>
        </MainContainer>
    )
}

export default Aboutus
