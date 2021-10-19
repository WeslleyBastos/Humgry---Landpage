//IMPORT IMAGE
import reservation from '../../assets/reservation.png'
//FUNCTIONAL IMPORT
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Button,
  } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

//STYLE
import {MainContainer} from './style'

const Reservation = ({id}) => {
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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    return (
    <MainContainer id={id}>
        <img src={reservation} alt='meal' className='meal'/>
            <div className = 'description'>

                <h2>Experience like no other</h2>
                <h3>An affectionate kitchen, passionate about what we do.
                    Leading to your best moments, the best of meals.</h3>
                <p>cooking has always been very present in my life. 
                    My mother is an older sister of 11 children, she always helped my grandmother
                    in the kitchen and became the best cook for her daughters. And when my mother 
                    started working abroad, I was 11 years old, cooking started to enter my life:
                    I stayed at night with my brother, and I started cooking, and like everyone else,</p>
                <button onClick={onOpen}> Reservation </button>        
            </div>
                <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                    <form onSubmit={sendEmail}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Book your table:</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Full name:</FormLabel>
                        <input 
                        type="text"
                        style={{border: 'solid 2px var(--red)', width: '100%', borderRadius: '10px', height: '40px'}}
                        ref={initialRef}
                        name ="name"/>
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel >Date:</FormLabel>
                        <input 
                        type="text"
                        style={{border: 'solid 2px var(--red)', width: '100%', borderRadius: '10px', height: '40px'}}
                        name="date" />
                      </FormControl>
                      <FormControl mt={4}>
                        <FormLabel>Hour</FormLabel>
                        <input 
                        type="text"
                        style={{border: 'solid 2px var(--red)', width: '100%', borderRadius: '10px', height: '40px'}}
                        name="hour" />
                      </FormControl>
                      <FormControl mt={4}>
                        <FormLabel>E-mail:</FormLabel>
                        <input 
                        type="email"
                        style={{border: 'solid 2px var(--red)', width: '100%', borderRadius: '10px', height: '40px'}}
                        name="email"/>
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <button 
                      type="submit"
                      value="Send"
                      className="send-reserve"
                      style={{backgroundColor: 'var(--yellow)', height: '39px', width: '80px', borderRadius: "9px", margin: "10px", fontWeight: '600'}}
                      onClick={onClose}
                      >
                        Send
                      </button>
                  
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
              </form>
          </Modal>
    </MainContainer>
    )
}

export default Reservation