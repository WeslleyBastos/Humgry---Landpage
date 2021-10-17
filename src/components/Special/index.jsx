//IMAGES
import menu1 from '../../assets/menu1.png'
import menu2 from '../../assets/menu2.png'
import menu3 from '../../assets/menu3.png'
import menu4 from '../../assets/menu4.png'
import menu5 from '../../assets/menu5.png'
import menu6 from '../../assets/menu6.png'
import menu7 from '../../assets/menu7.png'

//FUNCTIONAL
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useState, useEffect } from 'react'

//STYLE
import {MainContainer} from './style'


const Special = ({id}) => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
  
    const updateMedia = () => {
      setDesktop(window.innerWidth > 1000);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div>
          {isDesktop ? (

            <MainContainer id={id}>
            <div classname='title'>
                <h2> Special Menu</h2>
                <p> Our all-day favorites for all moments!</p>
            </div>
            <Carousel
                plugins={[
                'infinite',
                'arrows',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 4
                }
                },
            ]}
                >
                <img src={menu1} alt='carroussel'/>
                <img src={menu2} alt='carroussel'/>
                <img src={menu3} alt='carroussel'/>
                <img src={menu4} alt='carroussel'/>
                <img src={menu5} alt='carroussel'/>
                <img src={menu6} alt='carroussel'/>
                <img src={menu7} alt='carroussel'/>
            </Carousel>
            </MainContainer>
            
          ) : (
            <MainContainer id={id}>
            <div classname='title'>
                <h2> Special Menu</h2>
                <p> Our all-day favorites for all moments!</p>
            </div>
            <Carousel
            plugins={[
                'infinite',
                'arrows',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 1
                }
                },
            ]}
            >
                <img src={menu1} alt='carroussel'/>
                <img src={menu2} alt='carroussel'/>
                <img src={menu3} alt='carroussel'/>
                <img src={menu4} alt='carroussel'/>
                <img src={menu5} alt='carroussel'/>
                <img src={menu6} alt='carroussel'/>
                <img src={menu7} alt='carroussel'/>
            </Carousel>
            </MainContainer>
          
          )}
        </div>
      );
}

export default Special