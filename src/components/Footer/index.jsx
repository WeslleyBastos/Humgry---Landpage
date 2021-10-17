//IMAGES
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import insta from '../../assets/insta.png'
//FUNCTIONAL
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

//STYLE
import {UpperContainer, LowerContainer} from './style'

const Footer = ({id}) => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('Humgry_services', 'template_ramy8uq', e.target, 'user_lrAGlZfFaxuC1BSJ48m9m')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const handleClick = () => toast.success('Thanks for subscribing!')
    return (
    <div>
        <UpperContainer  id={id}>
            <div className='newslatter'>
                <h2> Join </h2> <h1>Humgry</h1> <h2> Newslatter</h2>
                <p>Receive amazing offers every week
                and news directly from our kitchen!</p>
            </div>
            <div className='subscribe'>
            <form onSubmit={sendEmail}>
                <ToastContainer />
                <input placeholder='your best e-mail' className='news' name='email'/>
                <br></br>
                <button
                onClick={handleClick}
                className='join'
                type="submit"
                value="Send"
                >Join now!</button>
            </form>
            </div>
        </UpperContainer>

        <LowerContainer>
            <div className='social-media'>
                <h4>contact us:</h4>
                <img src={insta} alt = 'insta'/>
                <img src={facebook} alt = 'facebook'/>
                <img src={twitter} alt = 'twitter'/>
            </div>
            <div className='schedule'>
                <h4>Open</h4>
                <p className='time'> MON - THURSDAY: 8 AM - 8 PM
                    SATURDAYS: 9AM - 4PM
                    SUNDAYS: CLOSED</p>
            </div>
            <div className='adress'>
                <h4>Location</h4>
                    <p className='local'>+55 (11) 2475-6969
                    Rua Athenas, Jd. Paulista
                    São Paulo - SP
                    </p>
            </div>
        </LowerContainer>
    </div>
    )
}

export default Footer
