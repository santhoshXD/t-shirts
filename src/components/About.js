import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'


const Wrapper = styled.div`
width: 100%;
height: 100vh;
overflow-y: scroll;

::-webkit-scrollbar {
  width: 12px;  
}

 
::-webkit-scrollbar-track {
  background: white;  
}

 
::-webkit-scrollbar-thumb {
  background: lightgrey;  
  border-radius: 6px; 
}

 
::-webkit-scrollbar-thumb:hover {
  background: darkgrey;  
  cursor: pointer;
}


.about-image{
    width: 100%;
    height: auto;
    
}
`

const AboutTitle = styled.div`
height: auto;
width: 100%;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-style: italic;
font-size: 1.1rem;

P{
    max-width: 65rem;
}

@media screen and (max-width: 768px){
    height: auto;
}

`


const AboutImage = styled.div`
background: url(${process.env.PUBLIC_URL}/about-image.avif);
background-repeat: no-repeat;
background-size: cover;  
background-attachment: fixed;
width: 100%;
height: 80%;
display: flex;
align-items: center;
justify-content: center;



.mission{
flex: 1;

p{
    text-transform: uppercase;
    font-weight: 500;
    color: white;
    
}


h3{
    color: white;
}
}

.mission-about{
    flex: 1;
}


@media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    

    .mission{
        flex: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
    .mission-about{
        flex: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}


`

const StyledHr = styled.hr`
border: 1px solid black;
width: 10%;

`


export default function About() {
    return (
        <Wrapper className='container-fluid'>
            <Header />

            <AboutTitle>
                <h3>About</h3>
                <StyledHr /> 
                <p  >Welcome to T-shirt Classic Store , your ultimate destination for trendy and stylish t-shirts!

                    At T-shirt Classic Store, we believe that fashion is a form of self-expression, and what better way to express yourself than through your wardrobe? We curate a wide range of t-shirts for men and women, designed to suit every style, occasion, and mood. </p>

                <p>

                    Our mission is to provide you with high-quality, comfortable, and affordable t-shirts that make you look and feel great. Whether you're into classic designs, bold graphics, or minimalist styles, we have something for everyone.

                    We are committed to sustainability and ethical practices. Our t-shirts are made from premium materials, sourced responsibly to minimize environmental impact. We prioritize fair labor practices and support local artisans and small businesses in our supply chain.
                </p>
                <p>

                    Customer satisfaction is our top priority. We strive to provide exceptional customer service and ensure that your shopping experience with us is seamless and enjoyable.

                    Join us in embracing individuality, creativity, and positivity through the power of fashion. Explore our collection today and discover your new favorite t-shirts at T-shirt classic Store!
                </p>


            </AboutTitle>

            <AboutImage>
                <div className="mission">
                    <p >The Mission</p>
                    <h3>Our mission is to provide unparalleled quality and style, redefining the standard for t-shirt apparel.</h3>

                </div>


                <div className="mission-about">
                    <p style={{color:'white',fontStyle:'italic',fontSize:'1.1rem'}}>At our core, we are dedicated to delivering premium quality and timeless style with every garment we create.

                        We strive to empower individuals to express themselves authentically through our carefully crafted designs, fostering a sense of confidence and individuality in every wearer.
                        Driven by a commitment to sustainability, we prioritize eco-friendly materials and ethical production practices, ensuring that our products not only look good but also contribute positively to the world around us.</p>

                </div>

            </AboutImage>
           <Footer/>
        </Wrapper>
    )
}
