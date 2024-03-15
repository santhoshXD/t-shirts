import React, { useState } from 'react';
import styled from 'styled-components';
import shop from '../JSON/shop.json';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useCart } from '../App';


const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
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

  `

const Description = styled.div`
  width: calc(100%);
  height: calc(auto  - 200px);
  padding-left: 200px;
  padding-right: 200px;
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
 

  @media screen and (min-width:768px) and (max-width:1080px ){
    grid-template-columns: 1fr 1fr;
    padding-left: 100px;
    padding-right: 100px;
  }

  @media screen and (max-width: 768px ){
    grid-template-columns: 1fr;
    padding-left: 20px; 
    padding-right: 20px;
     
  }

  .description-img{
     


    .main-product{

    }
      
    img{

     width: 100%;
     height: 600px;
      
     &:hover{
      
       cursor: zoom-in;
     }
    }


  }

  .extra-images{
 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    height: calc(100% - 600px);
 
    
    img{
      width: 150px;
      height: 150px;
      cursor: pointer !important;
    }
    
    @media screen and (max-width: 768px){
      grid-gap: 10px;
      padding-top: 10px;

    }
  }

  .description-details{
 

  }


  .description-tshirt-color{
    display: flex;
    gap: 10px;
  }
  .description-color-option{
    width: 25px;
    height: 25px;
    display: flex;
    border: 2px solid lightgrey;
    cursor: pointer;
  }

  .description-tshirt-size{
    padding-top: 10px;
    display: flex;
    gap: 10px;

    button{
      background: lightgrey;
      border: 2px solid lightgray;
      outline: none;
      color: white;

      &:focus{
        border: 2px solid lightgrey;
        background: transparent;
        color: grey;
        transition: all 0.3s ease;
      }


    }
  }

  .quantity{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 10%;
    gap: 10px;
    border: 2px solid lightgrey;
    color: grey;
    font-size: 1.2rem;

    .count{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: smaller;
    }

    .decrease{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    
    .increase{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      
      
    }
  }


  .count-cart{
    display: flex;
    align-items: center;
    gap: 20px;


    button{
      width: 10rem;
      height: 2rem;
      background: black;
      color: white;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }

  .AdditionalInformation{


    ul{
      display: flex;
      gap: 10px;
    }
    .additional-info-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;  
  height: 50%;
}

.additional-info-table th,
.additional-info-table td {
  border: 2px solid lightgrey;
  padding: 8px;
 
  
}

th{
  color: black;
}

td{
  color: grey;
  text-transform: capitalize;
}

.color-list,
.size-list {
  list-style-type: none;
  padding: 0;
}

.color-list li,
.size-list li {
  margin-bottom: 5px; 
}
  }
`

const StyledLinkCategory = styled(Link)`
text-decoration: none;
color: grey;


&:hover{
  text-decoration: none;
  color: grey;
  
}

`


const ProductDetails = () => {

  const [count, setCount] = useState(0)

  const {AddToCart} = useCart()

  const { id } = useParams();

  const product = shop.find((item) => item.id === parseInt(id));
  

  const getCategoryMenWomen = (gender) => {
    if (gender.toLowerCase() === 'men') {
      return '/men-tshirts';
    } else {
      return '/women-tshirts';
    }
  };

  const handleAddToCart = () => {
    AddToCart(product);
    alert("Item added to cart, Please check it in Cart!");
  };


  const[selectedImage, setSelectedImage] = useState(product.shirtImage)
 
   

  return (
    <Wrapper>
      <Header />

      <Description>
        <div className="description-img">
          <div main-product >

          <img src={process.env.PUBLIC_URL + '/' + selectedImage} alt={product.shirt} />
          </div>

          <div className='extra-images'>
             {
              product.extraImages.map((image,index) =>(
                <img key={index} src={process.env.PUBLIC_URL + '/' + image}  style={{
                  border: selectedImage === image ? '2px solid orange' : 'none' 
                }}  onClick={() => setSelectedImage(image)} />
              ))
             }
             <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora veritatis nostrum ducimus ut earum magni alias unde quis dolorem adipisci obcaecati vero blanditiis architecto quod nobis aperiam, inventore eaque sed.</div>
          </div>


        </div>

        <div className="description-details">
          <p style={{ textTransform: 'uppercase', fontWeight: '600', fontSize: 'smaller', color: 'grey' }}>{product.gender}</p>
          <h6 style={{ fontSize: '1.8rem' }}>{product.shirt}</h6>
          <p>{product.price} <span style={{ color: 'lightgray', textTransform: 'uppercase', fontSize: 'small' }}>& {product.shipping}</span> </p>
          <p>{product.description}</p>
          <div className="description-tshirt-color">
            {product.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="description-color-option"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="description-tshirt-size">
            {product.size.map((size, sizeIndex) => (
              <button key={sizeIndex}>{size}</button>
            ))}
          </div>
          <hr />
          <div className="count-cart">

            <div className="quantity">
              <div className='decrease' onClick={() => count > 0 && setCount(count - 1)}>-</div>
              <div className='count'>{count}</div>
              <div className='increase' onClick={() => setCount(count + 1)} >+</div>
            </div>

            <div>
              <button onClick={handleAddToCart}  >Add to cart</button>
            </div>

          </div>
          <hr />
          <div style={{ display: 'flex', gap: '5px', paddingBottom: '10px' }}><p>Category:</p> <span style={{ color: 'grey', fontWeight: '600', cursor: 'pointer' }}> <StyledLinkCategory to={getCategoryMenWomen(product.gcategory)} >{product.gender}</StyledLinkCategory> </span></div>
          <hr />
          <div>
            <div className="productDescription">
              <h4>ABOUT THE PRODUCT</h4>
              <p>{product.productDescription}</p>
            </div>
            <div className="productDetails">

              <p> {product.productDetails.material}</p>
              <p> {product.productDetails.weight}</p>
              <p> {product.productDetails.features.join(', ')}</p>
            </div>
            <hr />
            <div className="sizeAndFit">
              <h4>SIZE & FIT</h4>
              <p> {product.sizeAndFit.modelSize}</p>
              <p> {product.sizeAndFit.fit}</p>
            </div>
            <hr />
            <div className="deliveryAndReturns">
              <p><strong>Free Delivery:</strong> {product.deliveryAndReturns.freeDelivery}</p>
              <p><strong>Returns:</strong> {product.deliveryAndReturns.returns}</p>
              <p><strong>Shipping Label:</strong> {product.deliveryAndReturns.shippingLabel}</p>
            </div>
            <div className="AdditionalInformation">
              <h5>Additional Information</h5>
              <table className="additional-info-table">
    <thead>
      <tr>
        <th>Colors</th>
        <th>Size</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <ul className="color-list">
            {product.colors.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </td>
        <td>
          <ul className="size-list">
            {product.size.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
            </div>
          </div>
        </div>
      </Description>




     <Footer/>
    </Wrapper>
  );
};

export default ProductDetails;
