import Header from '../Header'
import Aboutus from '../Aboutus'
import PhotoGalery from '../PhotoGalery'
import Reservation from '../Reservation'
import Chefs from '../Chefs'
import Reviws from '../Reviws'
import Special from '../Special'
import Footer from '../Footer'

const Home = () =>{

    return (
    <div>
            <Header id="section1"/>
            <Aboutus id="section2"/>
            <Special id="section3"/>
            <PhotoGalery/>
            <Reservation id="section4"/>
            <Chefs id="section5"/>
            <Reviws/>
            <Footer id="section6"/>
    </div>
    )
}
export default Home