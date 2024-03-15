import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import modelgirl from '../Brand/girl model T.png'
import reviews from '../JSON/Reviews.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import Allshirts from '../JSON/shop.json'




const Wrapper = styled.div`
width: 100vw;
height: 100vh;
overflow-y:scroll ;
position: relative;

::selection{
  background: #1d71b9;
  color: white;
}





`

const Background = styled.div`
width: 100%;
height: 90vh;
background: #f3f1f6;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); 
background: radial-gradient(circle at 75% 40%, #1d71b9 20%, white 20%);
box-shadow: 0px 0px 10px rgba(0,0,0,0.1);



.showcase-name{
  display: grid;
  place-content: center;

  >p,h3,button{
    padding:2px;
  }

  > p{
    font-size: 1rem;
    color: grey;
    font-weight: 500;
  }

  > h3{
    font-size: 2rem;
  }

  button{
    background: black;
    color: white;
    border: none;
    width: 14rem;
    height: 2.5rem;


    &:hover{
      color: grey;
      transition: all 0.3s ease;
    }
    @media screen and (max-width: 769px){
    width: 100%;
  }
  }


}
.showcase-model{
  display: grid;
  place-content: center;


  img{
     height: 100%;
      
  }

}




@media screen and (max-width: 831px) {
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr;
  text-align: justify;
  background: radial-gradient(circle at 10% 70%, #1d71b9 43%, white 43%);
}
`

const PopularTshirts = styled.div`
width: 100%;
height: auto;
background: white;

@media screen and (min-width: 1200px){
  height: calc(auto - 6rem);
  padding: 6rem;

}



.title-popularshirt{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 20vh;      



  .popular-tshirt-sc{
    text-transform: uppercase;
    font-weight: 500;
    font-size: medium;
    color: grey;
  }

}

.popular-tshirts{
 padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  place-items: center;
  gap: 30px;


  .popular-tshirt-img{
    width: 250px;
    height: 250px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  }

 


}

.popular-tshirt-color{
 display: flex;
 gap: 5px;
}


.color-option{
  width: 20px;
  height: 20px;
  border:1px solid lightgray;

  &:hover{
    border: 1px solid black;
    transition: all 0.3s ease;
  }
}

.popular-tshirt-name,.popular-tshirt-color,.popular-tshirt-gender{
  margin:1px;
}

.popular-tshirt-name{
  cursor: pointer;
}

.popular-tshirt-color{
  cursor: pointer;
}

.popular-tshirt-gender{
  text-transform: uppercase;
  font-size: smaller;
  color: grey;

}

.popular-tshirt-price{
  color: darkgray;
}

.popular-tshirt-size{
  padding-top: 10px;
  display: flex;
  gap: 10px;
  
  button{
    border: 2px solid lightgrey;
    background: none;
    min-width: 30px;

    &:hover{
      border: 2px solid grey;
      transition: all 0.3s ease;
      color: white;
      background: grey;
    }

    &:focus{
      background: grey;
      color: white;
      border: none;
      outline: none;
    }
  }
}

`


const ShowPage = styled.div`
height: auto;
width: 100%;
display: flex;
flex-wrap: wrap;
padding: 8rem;
text-align: center;

@media screen and (max-width:768px){
padding: 3rem;
}

button{
    background: black;
    color: white;
    border: none;
    width: 40%;
    height: 2.5rem;


    &:hover{
      color: grey;
      transition: all 0.3s ease;
    }

    @media screen and (max-width:768px){
      width: 100%;
    }
  }


.showtshirt1{
  flex: 1 2 100px;
  margin: 0.5rem;
 width: 100%;
  
}

.showtshirt2{
  flex: 1 2 100px;
  margin: 0.5rem;
   width: 100%;
 
}

.Page3Tshirt1{
 width: 100%;
  height: auto;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
}


.Page3Tshirt2{
width: 100%;
  height: 100%;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
}



`


const NewCollection = styled.div`
  width: 100%;
  height: 80vh;  
  background: url(${process.env.PUBLIC_URL}/newcollection1.avif);
  background-repeat: no-repeat;
  background-size: cover;  
  background-attachment: fixed;  
  position: relative;  
  z-index: 0;  
  overflow: auto;  



.new-collection-banner{
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  p{
    text-transform: uppercase;
    font-weight: 700;
  }

  h4{
    font-style: italic;
    text-transform: capitalize;
    font-size: 2.5rem;
  }

  h5{
    text-transform: capitalize;
    font-style: oblique;
    font-size: 1.5rem;
  }

  >p,h4,h5{
    color: white;
    padding: 5px;
  }

  
button{
    background: black;
    color: white;
    border: none;
    width: 20%;
    height: 2.5rem;
    opacity: 1;

    &:hover{
      color: grey;
      transition: all 0.3s ease;
    }


    @media screen and (max-width:768px){
      width: 70%;
    }
  }

}

@media screen and (max-width: 768px){
  text-align: center;
  background: url(${process.env.PUBLIC_URL}/CollectionMobile.avif); 
    background-size: contain;
    background-repeat: no-repeat;
    background-attachment: fixed;
}


`

const SummerBanner = styled.div`
height: calc(100vh - 10rem);
width: calc(100% - 10rem);
margin: 5rem;
background: linear-gradient(to right, #f3f1f6 50%, white 50%);
display: grid;
grid-template-columns: repeat(auto-fit,minmax(400px,1fr));


@media screen and (max-width:768px){
display: grid;
grid-template-columns:1fr;
margin: 0;
width: 100%;
}


img{
  width: 50%;
  height: auto;
}

  
button{
    background: black;
    color: white;
    border: none;
    width: 50%;
    height: 2.5rem;
    opacity: 1;

    &:hover{
      color: grey;
      transition: all 0.3s ease;
    }


    @media screen and (max-width:768px){
      width: 100%;
    }
  }

  .summer-banner-content{
    display: flex;
    flex-direction: column;
      align-items: center;
      justify-content: center;
  }

  .summer-banner-pose{
      display: flex;
      align-items: center;
      justify-content: center;
      
  }
`

const OnSaleTshirt = styled.div`
width: 100%;
height: auto;
background: white;

@media screen and (min-width: 1200px){
  height: calc(auto - 6rem);
  padding: 6rem;

}




.title-OnSaleshirt{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 20vh;      



  .OnSale-tshirt-sc{
    text-transform: uppercase;
    font-weight: 500;
    font-size: medium;
    color: grey;
  }

}

.OnSale-tshirts{
 padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  place-items: center;
  gap: 30px;



  .OnSale-tshirt-img{
    width: 250px;
    height: 250px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  }

 


}

.OnSale-tshirt-color{
 display: flex;
 gap: 5px;
}


.color-option{
  width: 20px;
  height: 20px;
  border:1px solid lightgray;

  &:hover{
    border: 1px solid black;
    transition: all 0.3s ease;
  }
}

.OnSale-tshirt-name,.OnSale-tshirt-color,.OnSale-tshirt-gender{
  margin:1px;
}

.OnSale-tshirt-name{
  cursor: pointer;
}

.OnSale-tshirt-color{
  cursor: pointer;
}

.OnSale-tshirt-gender{
  text-transform: uppercase;
  font-size: smaller;
  color: grey;

}

.OnSale-tshirt-price{
  color: darkgray;
}

.OnSale-tshirt-size{
  padding-top: 10px;
  display: flex;
  gap: 10px;
  
  button{
    border: 2px solid lightgrey;
    background: none;
    min-width: 30px;

    &:hover{
      border: 2px solid grey;
      transition: all 0.3s ease;
      color: white;
      background: grey;
    }

    &:focus{
      background: grey;
      color: white;
      border: none;
      outline: none;
    }
  }
}

`


const Review = styled.div`
width: calc(100%);
height: calc(auto - 4rem);
padding: 4rem;
text-align: center;
transition: all 0.3s ease;

button{
  border: none;
  outline: none;
  background: lightgray;
  color: darkgrey;
  text-transform: uppercase;
  font-weight: 600;
  font-size: small;
  transition: all 0.3s ease;

  &:hover{
    color: white;
    transition: all 0.3s ease;
  }
}
`

const Products = styled.div`
height: auto;
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
place-content: center;
place-items: center;
transition:all 0.3s ease;

 

 @media screen and (max-width: 860px){
  grid-template-columns: 1fr;
  display: grid;
  gap: 2rem;
}


.mens-product{
  position: relative;

}

.womens-product{
  position: relative;
}

.men-pro-img{
  width: 400px;
  height: 600px;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
 @media screen and (max-width: 768px){
  width: 250px;

}

}

.women-pro-img{
  width: 400px;
  height: 600px;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
 @media screen and (max-width: 768px){
  width: 250px;

}

}

.menprod,.womenprod{
  position: absolute;
background: white;
color: black;
bottom: 10px;
left: 50%;
transform: translateX(-50%);
width: 80%;
height: 50px;
text-align: center;
cursor: pointer;

 
}

`
const StyledLink = styled(Link)`
text-decoration: none;
color: darkgray;

&:hover{
  color: black;
  text-decoration: none;
}
`

const StyledNavigateLink = styled(Link)`
text-decoration: none;
color: black;

&:hover{
  text-decoration: none;
  color: black;
}


`


export default function HomePage() {

  const [showMore, setShowMore] = useState(false)
  const [hoverMenProduct, setHoverMenProduct] = useState(false);
  const [hoverWomenProduct, setHoverWomenProduct] = useState(false);

  const hoverMenProductEnter = () => {
    setHoverMenProduct(true);
  };

  const hoverMenProductLeave = () => {
    setHoverMenProduct(false);
  };

  const hoverWomenProductEnter = () => {
    setHoverWomenProduct(true);
  };

  const hoverWomenProductLeave = () => {
    setHoverWomenProduct(false);
  };


  const Navigate = useNavigate()

  const ClickToShop = () =>{
     Navigate('/shop')
  }

  const PopularShirtsDisplay = Allshirts.filter(items => items.category === 'popular')
  const OnShirtsDisplay = Allshirts.filter(items => items.category === 'onsale')




  return (
    <Wrapper className='container-fluid' >
      <Header />
      <Background>
        <div className="showcase-name">
          <p>WOMEN</p>
          <h3>Sleek. Contemporary.</h3>
          <h3>Incredible.</h3>
          <button onClick={ClickToShop}>Shop Collection</button>
        </div>


        <div className="showcase-model">
          <img className='img-fluid' src={modelgirl} alt="model1" />
        </div>

      </Background>

      <PopularTshirts>
        <div className="title-popularshirt">
          <p className='popular-tshirt-sc'>summer collection</p>
          <h3>Popular T-Shirts</h3>
        </div>

        <div className="popular-tshirts">
          {
            PopularShirtsDisplay.map((shirts, index) => (
              <div key={index} style={{background:'whitesmoke',cursor:'pointer'}}>
                 <StyledNavigateLink key={index} to={`/shop/product/${shirts.id}`} >

                <img className='popular-tshirt-img' src={process.env.PUBLIC_URL + '/' + shirts.shirtImage} alt={shirts.id} />
                <p className='popular-tshirt-gender'>{shirts.gender}</p>
                <h4 className='popular-tshirt-name'>{shirts.shirt}</h4>
                <p className='popular-tshirt-price'>{shirts.price}</p>
                <div className="popular-tshirt-color">  
                {shirts.colors.map((color, index) => (
                  <div
                  key={index}
                  className="color-option"
                  style={{ backgroundColor: color }}
                  />
                  ))}
              </div>
              <div className="popular-tshirt-size">
          {shirts.size.map((size, index) => (
            <button  key={index}>{size}</button>
            ))}
        </div>
            </StyledNavigateLink>
              </div>
            ))
          }
        </div>
      </PopularTshirts>

      <ShowPage>
        
         <div className="showtshirt1">
            <img className=' Page3Tshirt1' src={process.env.PUBLIC_URL + '/Page3Tshirt1.avif'} alt="Page3Tshirt1" />
            <p style={{color:"grey" ,fontWeight:'500',paddingTop:'1rem'}}>MEN  WOMEN</p>
            <p style={{fontSize:'1.5rem',fontWeight:'200'}} >Fashion is what you buy, style is what you do with it.</p>
            <button onClick={ClickToShop} >Shop Now</button>
         </div>


         <div className="showtshirt2">
             <img className=' Page3Tshirt2' src={process.env.PUBLIC_URL + '/Page3Tshirt2.avif'} alt="Page3Tshirt2" />
         </div>

      </ShowPage>

      <NewCollection>

        <div className="new-collection-banner">
          <p>new collection</p>
          <h4>be different in your own way!</h4>
          <h5>find your unique style.</h5>
          <button onClick={ClickToShop}>Shop Collection</button>
        </div>


      </NewCollection>

      <SummerBanner>
         <div className="summer-banner-pose">
          <img src={process.env.PUBLIC_URL + '/springsummer.avif'} alt="summer-banner-pose" />
         </div>


         <div className="summer-banner-content">
         <p style={{fontWeight:'600'}}>WOMEN</p>
          <h3 style={{textTransform:'capitalize'}}>Spring Summer Collection</h3>
          <h6 style={{fontWeight:'300'}} >Discover a vibrant array of styles that embrace the essence of femininity and grace. From flowing dresses to chic separates, our collection celebrates the spirit of the season with effortless elegance and timeless sophistication. Explore now and elevate your wardrobe with pieces that inspire confidence and radiate beauty.</h6>
          <button onClick={ClickToShop}>See Whole Collection</button>
         </div>

      </SummerBanner>
      <OnSaleTshirt>
      <div className="title-OnSaleshirt">
          <p className='OnSale-tshirt-sc'>summer collection</p>
          <h3>On Sale T-Shirts</h3>
        </div>
        <div className="OnSale-tshirts">

      {OnShirtsDisplay.map((shirt, index) => (
        <div key={index} style={{ background: 'whitesmoke',cursor:'pointer' }}>
           <StyledNavigateLink key={index} to={`/shop/product/${shirt.id}`} >

          <img className='OnSale-tshirt-img' src={process.env.PUBLIC_URL + '/' + shirt.shirtImage} alt={shirt.id} />
          <p className='OnSale-tshirt-gender'>{shirt.gender}</p>
          <h4 className='OnSale-tshirt-name'>{shirt.shirt}</h4>
          <p className='OnSale-tshirt-price'>{shirt.price}</p>
          <div className="OnSale-tshirt-color">
            {shirt.colors.map((color, colorIndex) => (
              <div
              key={colorIndex}
              className="color-option"
              style={{ backgroundColor: color }}
              />
              ))}
          </div>
          <div className="OnSale-tshirt-size">
            {shirt.size.map((size, sizeIndex) => (
              <button  key={sizeIndex}>{size}</button>
            ))}
          </div>
              </StyledNavigateLink>
        </div>
      ))}
      </div>``
      </OnSaleTshirt>

      <Review>
         <h3>Customer Reviews</h3>
         {
            reviews.map((item,index) =>(
              <div key={index} style={{display:showMore || index === 0 ? 'block' : 'none'}}>
                <p style={{fontStyle:'italic'}}>{item.review}</p>
                <p  style={{fontStyle:'italic'}} >{item.star}</p>
                <p style={{fontStyle:'italic'}}>{item.username}</p>
              </div>
            ))
         }
         { reviews.length > 1 && (
        <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show less' : 'Show more'} 
        <FontAwesomeIcon icon={showMore ? faArrowUp : faArrowDown} />
      </button>
         )
         }
      </Review>

      <Products >

      <div className="mens-product" onMouseEnter={hoverMenProductEnter} onMouseLeave={hoverMenProductLeave}>
        <img className='men-pro-img' src={process.env.PUBLIC_URL + '/mens-product.avif'} alt="mens-product" />
        <div className='menprod'>
        <StyledLink to="/men-tshirts">
          <p style={{ padding: '0', margin: '0', fontWeight: '500' }}>MEN</p>
          
          <p className='mp' style={{ padding: '0', margin: '0', fontWeight: '600' }}>5 Products</p>
          </StyledLink>
        </div>
      </div>

      <div className="womens-product" onMouseEnter={hoverWomenProductEnter} onMouseLeave={hoverWomenProductLeave}>
        <img className='women-pro-img' src={process.env.PUBLIC_URL + '/womens-product.avif'} alt="womens-product" />
        <div className='womenprod'>
          <StyledLink to='/women-tshirts'>
          <p style={{ padding: '0', margin: '0', fontWeight: '500' }}>WOMEN</p>
          <p className='wmp' style={{ padding: '0', margin: '0', fontWeight: '600' }}>5 Products</p>
        </StyledLink>
        </div>
      </div>


      </Products>
      <Footer/>
    </Wrapper>
  )
}


{
 

}
