import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import shirts from '../JSON/shop.json'
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

.Home-women{
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

const MenCollections = styled.div`
width: 100%;
height: auto;
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  place-items: center;
  gap: 50px;
  

  .womenshop-tshirt-img{
    width: 250px;
    height: 300px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  }





.womenshop-tshirt-name,.womenshop-tshirt-color,.womenshop-tshirt-gender{
  margin:1px;
  
}

.womenshop-tshirt-name{
  cursor: pointer;
}

.womenshop-tshirt-color{
  cursor: pointer;
}

.womenshop-tshirt-gender{
  text-transform: uppercase;
  font-size: smaller;
  color: grey;

}

.womenshop-tshirt-price{
  color: darkgray;
}

.womenshop-tshirt-size{
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



.womenshop-tshirt-color{
  display: flex;
  gap: 5px;
  cursor: pointer;
}

.womenshop-color-option{
  width: 20px;
  height: 20px;
  border:1px solid lightgray;
 
  &:hover{
    border: 1px solid black;
    transition: all 0.3s ease;
  }
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


const MenTshirts = () => {
  
  const MenShirts = shirts.filter(items => items.gender === 'male')
  return (
    <Wrapper className='container-fluid'>
     <Header/>
     <div className="Home-women">
          <div className='h-s'>
           <StyledLinkShop to={"/"} >Home</StyledLinkShop>
           <p>/Men</p>
          </div>

       <div className="title-page">
        <h1>Men</h1>
       </div>

       </div>  
       <div className="showing-result-shop">Showing all 6 results</div>


       <MenCollections>
       {MenShirts.map((shirt, index) => (
        <div key={index} style={{ background: 'whitesmoke',  cursor: 'pointer' }}>
          <StyledNavigateLink key={index} to={`/shop/product/${shirt.id}`} >
            
          <img className='womenshop-tshirt-img'  src={process.env.PUBLIC_URL + '/' + shirt.shirtImage} alt={shirt.id} />
          <p className='womenshop-tshirt-gender'>{shirt.gender}</p>
          <h4 className='womenshop-tshirt-name'>{shirt.shirt}</h4>
          <p className='womenshop-tshirt-price'>{shirt.price}</p>
          <div className="womenshop-tshirt-color">
            {shirt.colors.map((color, colorIndex) => (
              <div
              key={colorIndex}
              className="womenshop-color-option"
              style={{ backgroundColor: color }}
              />
              ))}
          </div>
          <div className="womenshop-tshirt-size">
            {shirt.size.map((size, sizeIndex) => (
              <button key={sizeIndex}>{size}</button>
              ))}
          </div>
              </StyledNavigateLink>
        </div>
      ))}



       </MenCollections>
       <Footer/>

    </Wrapper>
  )
}

export default MenTshirts
