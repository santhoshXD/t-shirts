import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
width: 100%;
height:calc(80vh - 5rem);
padding-top: 5rem;


.subscribe-box{
    height: 80%;
    background: #f3f1f6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;


    .footer-input-div{
        display: flex;
        gap: 1rem;

        input{
            width: 30rem;
            height: 2rem;
            border: 1px solid lightgray;
            outline: none;
            color: grey;
            text-align: center;

            &:focus{
               border: 1px solid grey;
            }

            @media screen and (max-width: 768px){
                width: 20rem;
            }
        }
        
        button{
            color: white;
            background: black;
            border: none;
            outline: none;
            height: 2rem;
            width: 200px;
            
            &:hover{
                color: grey;
                transition: all 0.3s ease;
                
            }
        }
        
    }
}

.copyright-box{
    height: 20%;
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  
}


.footer-about{
display: flex;
gap: 1rem;
text-decoration: none;

a{
 text-decoration: none;
 color: black;
 font-weight: 600;


 &:hover{
    color: lightgray;
    transition: all 0.3s ease;
 }
}

li{
    list-style-type: none;
    cursor: pointer;
    
    
}
}


.footer-social-media{
    display: flex;
    align-items: center;
    justify-content: center;
gap: 1rem;
 

li{
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    cursor: pointer;
    background: lightgray;
    width: 30px;
    height: 30px;

    &:hover{
        background: transparent;
        transition: all 0.3s ease;
    }

}

}


@media screen and (max-width: 769px){
  
   height: auto;
   text-align: center;

    .footer-input-div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

       
    }

    .footer-about{
      display: flex;
      flex-direction: column;
      align-items: center;

    }
}
`


export default function Footer() {

    const[emailSub,setEmailSub] = useState('')
      


    const SubscribeEmail = () => {
        if (emailSub === '') {
            alert('Enter your email before clicking submit!');
        } else if (!isValidEmail(emailSub)) {
            alert('Please enter a valid email!');
        } else {
            alert(`Updates will be sent to ${emailSub} Happy Shopping!`);
            setEmailSub('')
        }
    };
 
    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    
  return (
    <Wrapper >
      <div className="subscribe-box">
        <div style={{textAlign: 'center'}}>

        <p>Be the first to know! Subscribe to get early access to new arrivals and insider discounts.</p>
        <p>Join our community! for updates on trends, events, and more.</p>
        </div>
        <div className='footer-input-div'>
        <input type="email" placeholder='Your email address...' value={emailSub} onChange={(e) => setEmailSub(e.target.value)} />
        <button onClick={SubscribeEmail}>Subscribe</button>
        </div>
        <ul className='footer-about'>
            <li><a href="/shop">Buy T-shirts</a></li>
            <li><a href="/men-tshirts">Men</a></li>
            <li><a href="/women-tshirts">Women</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>


          <ul className='footer-social-media'>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
          </ul>
      

      </div>

      <div className="copyright-box">
         <p>Copyright <FontAwesomeIcon icon={faCopyright} /> 2024 T-shirt Store | Powered by T-shirt Store</p>
      </div>

    </Wrapper>
  )
}
