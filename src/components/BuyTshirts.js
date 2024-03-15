import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import shop from '../JSON/shop.json'
import { Link } from 'react-router-dom'
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



.title-page{
  @media screen and (min-width: 768px) and (max-width: 1200px) {
  display: none;
}

  @media screen and (max-width: 768px){
  display: none;
}
}


.showing-result-shop{

  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  color: grey;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
  height: 10%;
}

  @media screen and (max-width: 768px){
  height: 10%;
}
}

.Home-shop{
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  

  .h-s{
    display: flex;    
  }

  @media screen and (min-width: 768px) and (max-width: 1200px){
  height: 10%;

}

  @media screen and (max-width: 768px){
   height: auto;
}


}


`

const StyledLinkShop = styled(Link)`
color: black;
text-decoration: none;


&:hover{
  text-decoration: none;
  color: grey;
  transition: all 0.3s ease;
}
`
const ShopResults = styled.div`
width: 100%;
height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  place-items: center;
  gap: 50px;
  

  .shop-tshirt-img{
    width: 250px;
    height: 300px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  }





.shop-tshirt-name,.shop-tshirt-color,.shop-tshirt-gender{
  margin:1px;
  
}

.shop-tshirt-name{
  cursor: pointer;
}

.shop-tshirt-color{
  cursor: pointer;
}

.shop-tshirt-gender{
  text-transform: uppercase;
  font-size: smaller;
  color: grey;

}

.shop-tshirt-price{
  color: darkgray;
}

.shop-tshirt-size{
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



.shop-tshirt-color{
  display: flex;
  gap: 5px;
  cursor: pointer;
}

.shop-color-option{
  width: 20px;
  height: 20px;
  border:1px solid lightgray;
 
  &:hover{
    border: 1px solid black;
    transition: all 0.3s ease;
  }
}

`
const NoMoreShop = styled.div`
width: 100%;
height: 20%;
display: flex;
align-items: center;
justify-content: center;

.no-more-shop{
  color: grey;
  border: 2px solid lightgrey;
  height: 2.5rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
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


const BuyTshirts = () => {



  return (
    <Wrapper className='container-fluid'>
        <Header/>
        <div className="Home-shop">
          <div className='h-s'>
           <StyledLinkShop to={"/"} >Home</StyledLinkShop>
           <p>/shop</p>
          </div>

       <div className="title-page">
        <h1>Shop</h1>
       </div>

       </div>  
       <div className="showing-result-shop">Showing 1 - 8 of 10 results</div>

   

    <ShopResults>
    {shop.map((shirt, index) => (
      
      <div key={index} style={{ background: 'whitesmoke',  cursor: 'pointer' }} >
          <StyledNavigateLink key={index} to={`/shop/product/${shirt.id}`} >
          <img className='shop-tshirt-img'  src={process.env.PUBLIC_URL + '/' + shirt.shirtImage} alt={shirt.id} />
          <p  className='shop-tshirt-gender'>{shirt.gender}</p>
          <h4 className='shop-tshirt-name'>{shirt.shirt}</h4>
          <p className='shop-tshirt-price'>{shirt.price}</p>
            </StyledNavigateLink>
          <div className="shop-tshirt-color">
            {shirt.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="shop-color-option"
                style={{ backgroundColor: color }}
                />
            ))}
          </div>
          <StyledNavigateLink key={index} to={`/shop/product/${shirt.id}`} >
          <div className="shop-tshirt-size">
            {shirt.size.map((size, sizeIndex) => (
              <button key={sizeIndex}>{size}</button>
              ))}
          </div>
          </StyledNavigateLink>
        </div>
      ))}

    </ShopResults>

    <NoMoreShop>
       <div className="no-more-shop">
        No more products to show
       </div>
  

    </NoMoreShop>
    <Footer/>

    </Wrapper>
  )
}

export default BuyTshirts
