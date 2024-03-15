import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import data from '../JSON/header.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faClose, faSearch, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import shirts from '../JSON/shop.json'
import { useCart } from '../App'





const { menu1, menu2, mobilemenu1 } = data

const StyLedLink = styled(Link)`
color: black;
text-decoration: none;
cursor: pointer;
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
        position: relative;

        &:hover {
            color: #1d71b9;
        }

        &:hover::after {
            content: '';
            position: absolute;
            bottom: -26px; 
            width: 100%;
            height: 2px;
            background-color: #1d71b9;
            transition: width 0.3s ease; 
        }
        
        &:after {
            content: '';
            position: absolute;
            bottom: -26px; 
            width: 0;
            height: 2px;
            background-color: grey;
            transition: width 0.3s ease; 
        }

        @media screen and (max-width:1285px){
            display: none;
        }


&:hover{
    text-decoration: none;
    color: #1d71b9;
    transition: all 0.3s ease;
}

&.active-link{
    color: #1d71b9 ;
    border: 2px solid grey;
}


`

const Wrapper = styled.div`
height: 10vh;
width: 100%;
display: flex;
justify-content: space-around;
text-transform: uppercase;
position: relative;
 




.menu1{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;


}



    
    
    p{
       

    }


    .menu-icon{
       opacity: 1;
      transition: transform 0.5s ease, opacity 0.5s ease;

        @media screen and (min-width:1285px){
            display: none;
        }
    }
    .menu-icon.close {
     transform: rotate(90deg); 
     opacity: 0.5;

  }



.menu2{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
  


    .search-icon{
         cursor: pointer;
         
    }

    .cart-icon{
        cursor: pointer;
    }

    button{
        border: none;
        outline: none;
        background: none;
        

        &:hover {
            color: grey;
            transition: all 0.3s ease;
        }

        @media screen and (max-width:831px){
            display: none;
        }

       
    }


    .profile-log{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background:  #1d71b9;
        color: white;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        transition: all 0.3s ease;
 
    }
}

.brand{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    cursor: pointer;

    img{
        width: 100px;
        height: auto;
    }

}




`



const MobileMenu = styled.div`
   width: 80%;
  height: 90vh;
  position: absolute;
  top: 10vh;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  transition: all 0.3s ease;
  z-index: 999;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
 

        
`

const StyLedLinkMobile = styled(Link)`
height: 3rem;
        background: #1d71b9;
        color: white;
        border-bottom: 1px solid white;
        border-right: 1px solid white;
        display: flex;
        align-items: center;
        padding-left: 1rem;


        cursor: pointer;

        &:hover{
            color: white;
            background: red;
            transition: all 0.3s ease;
        }


  .close{
    display: flex;

  }

   @media screen and (min-width:1285px){
            display: none;
        }

`

const CartMenu = styled.div`
position: absolute;
top: 0;
  right: ${props => props.isCartOpen ? '0' : '-300px'};
  background: white;
  width: 25vw;
  height: 100vh;
  transition: all 0.3s ease;
  border-left: 2px solid lightgray;
 
  

.title-cart{
 
    height: 5%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 15px;

  div{
    text-transform: uppercase;
    font-size: small;
    font-weight: 500;
  }
}

.cart-items{
 height: 80%;
 width: 100%;

 text-transform: capitalize;
 gap: 2rem;
 
 div{
     display: flex;  
    align-items: center;
    cursor: pointer;
   width: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  
   
 }

 img{
    height: 70px;
    width: 70px;

 }


 .cart-shirt-price{
    display: flex;
    flex-direction: column;
    width: 100%;

    p{
        padding: 0;
        margin: 0;
    }
 
 }

 .no-products-found{
    color: #1d71b9;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
 }

}

.cart-shopping{
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
     
  
}

@media screen and (max-width: 768px){
    width: 100%;
}

@media screen and (min-width: 768px) and (max-width: 1200px){
    width: 100%;
}

`

const StyledNavigateLink = styled(Link)`
        color: white;
        background: black;
 
        width: 80%;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;

        &:hover{
            text-decoration: none;
            color: white;
        }
`

const ProfileMenu = styled.div`
height: 5vh;
width: 10%;
background:  #1d71b9;
color: white;
position: absolute;
top: 100%;
right: 0;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
transition: all 0.3s ease;

@media screen and (max-width: 768px){
    width: 30%;
}


.logout-profile{
 
    cursor: pointer;
}

`
const SearchContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  .search-bar {
    width: 80%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      width: 70%;
      height: 60%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
      outline: none;

      &:focus {
        border-color: #1d71b9;
      }
    }

    button {
      width: 15%;
      height: 60%;
      padding: 0.5rem;
      border: none;
      border-radius: 5px;
      background-color: #1d71b9;
      color: white;
      font-size: 1rem;
      cursor: pointer;

      &:hover{
        background: transparent;
        color: #1d71b9;
        border: 2px solid #1d71b9;
        transition: all 0.3s ease;
      }


      @media screen and (max-width: 768px){
        display: none;
      }
    }
  }

  .shirt-sorting-container {
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;

    .shirt-sorting {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      justify-content: center;
      align-items: center;
    }

   div {
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
      padding: 1rem;
      border-radius: 5px;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-10px);
      }
    }
  }


  .search-close{
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.3s ease;
    transform: rotate(90deg);
    color: #1d71b9;

    &:hover{
        transform: rotate(180deg);

    }
   
  }

 

  



 
`


const StyledNavigateLink2 = styled(Link)`
text-decoration: none;
color: black;

&:hover{
  text-decoration: none;
  color: black;
}
`


export default function Header() {

    const { cart } = useCart()

    const [isOpen, setIsOpen] = useState(false)

    const handleMenuOpen = () => {
        setIsOpen(!isOpen)
    }

    const [isActive, setIsActive] = useState(null);

    const handleActiveLink = (index) => {
        setIsActive(index);

    };

    const Navigate = useNavigate()

    const LinkToLoginPage = () => {
        Navigate('/login')
    }




    const [isCartOpen, setIsCartOpen] = useState(false)

    const openCart = () => {
        setIsCartOpen(true)
         
    }

    const closeCart = () => {
        setIsCartOpen(false)
    }


    const [loggedIn, setLoggedIn] = useState(false)
    const [firstLetter, setFirstLetter] = useState('')
    const [profileSelect, setProfileSelect] = useState(false)


    const handleProfileSelect = () => {
        setProfileSelect(!profileSelect)
    }

    useEffect(() => {
        const username = localStorage.getItem('username')
        const password = localStorage.getItem('userpassword')


        if (username && password) {
            setLoggedIn(true)

            const firstLetter = username.charAt(0).toUpperCase();
            setFirstLetter(firstLetter)
        }

    }, [])

    const [clickSearch, setClickSearch] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchShirts = (e) => {
        setSearchQuery(e)
        console.log(e)
    }

    const handleClickSearch = () => {
        setClickSearch(true)
        console.log('search icon is clicked')
    }

    const handleClickSearchClose = () => {
        setClickSearch(false)
    }



    const SearchedShirts = shirts.filter(shirt => shirt.shirt.toLowerCase().includes(searchQuery.toLowerCase()));




    return (
        <Wrapper className='container-fluid'>
            <div className="menu1">
                <FontAwesomeIcon className={`menu-icon ${isOpen ? 'close' : ''}`} onClick={handleMenuOpen} icon={isOpen ? faClose : faBars} />
                {
                    menu1.map((items, index) => (
                        <StyLedLink key={index} to={items.link} className={index === isActive ? 'active-link' : ''}
                            onClick={() => handleActiveLink(index)} >{items.items}</StyLedLink>
                    ))
                }
            </div>

            <div className="brand">
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />

            </div>

            <div className="menu2">
                {
                    menu2.map((items, index) => (

                        <FontAwesomeIcon key={index} className={items.id === 1 ? 'search-icon' : 'cart-icon'} icon={items.id === 1 ? faSearch : faCartShopping} title={items.id !== 1 ? `Cart (${cart.length})` : undefined}
                            onClick={() => {
                                if (items.id === 2) {
                                    openCart();
                                } else if (items.id === 1) {
                                    handleClickSearch();
                                }
                            }}
                        />

                    ))
                }
            
                
                {
                    loggedIn ? (
                        <div onClick={handleProfileSelect} className='profile-log' >
                            {firstLetter}
                        </div>

                    ) : (

                        <button onClick={LinkToLoginPage} >LOG IN</button>
                    )
                }

            </div>


            {
                isCartOpen &&

                <CartMenu isCartOpen={isCartOpen}>
                    <div className="title-cart">

                        <div>shopping cart</div>
                        <FontAwesomeIcon style={{ cursor: 'pointer', fontSize: '1.5rem' }} onClick={closeCart} icon={faClose} />
                    </div>
                    <hr />


                    <div className="cart-items">
                        {cart.length === 0 ? (
                            <div className='no-products-found'>No Products in the cart</div>
                        ) : (
                            cart.map((item, index) => (
                                <StyledNavigateLink2 key={index} to={`/shop/product/${item.id}`} >
                                    

                                            <div key={index}>
                                                <img src={process.env.PUBLIC_URL + '/' + item.shirtImage} alt={item.shirt} />
                                                <div className='cart-shirt-price'>
                                                    <p>{item.shirt}</p>
                                                    <p>{item.price}</p>
                                                </div>

                                            </div>
                                    
                                </StyledNavigateLink2>

                            ))
                        )}
                    </div>



                    <div className="cart-shopping">
                        <StyledNavigateLink to={'/shop'} >Continue Shopping </StyledNavigateLink>
                    </div>
                </CartMenu>

            }

            {isOpen &&

                <MobileMenu isOpen={isOpen}>




                    <div className="mobile-menu-items">
                        {
                            mobilemenu1.map((items, index) => (
                                <StyLedLinkMobile key={index} to={items.link}>{items.items}</StyLedLinkMobile>
                            ))
                        }
                    </div>

                </MobileMenu>
            }

            {
                profileSelect &&

                <ProfileMenu  >

                    <div className='logout-profile' onClick={LinkToLoginPage}>LOGOUT</div>
                    <div>
                        <FontAwesomeIcon icon={faSignOut} />
                    </div>

                </ProfileMenu>
            }

            {
                clickSearch &&
                <SearchContainer>
                    <div className="search-bar">
                        <input type="text" value={searchQuery} onChange={(e) => handleSearchShirts(e.target.value)} />
                        <button>Search</button>
                        <FontAwesomeIcon className='search-close' icon={faClose} onClick={handleClickSearchClose} />
                    </div>



                    {searchQuery ? (
                        <div className="shirt-sorting-container">
                            <div className="shirt-sorting">

                                {SearchedShirts.length > 0 ? (
                                    SearchedShirts.map((shirt, index) => (
                                        <StyledNavigateLink2 key={index} to={`/shop/product/${shirt.id}`} >
                                            <div key={index}>
                                                <img style={{ height: '100px', width: '100px' }} src={process.env.PUBLIC_URL + '/' + shirt.shirtImage} alt={shirt.name} />
                                                <p className='shop-tshirt-gender'>{shirt.gender}</p>
                                                <h4 className='shop-tshirt-name'>{shirt.shirt}</h4>
                                                <p className='shop-tshirt-price'>{shirt.price}</p>
                                            </div>
                                        </StyledNavigateLink2>
                                    ))
                                ) : (

                                    <div style={{ textAlign: 'center', color: '#1d71b9', fontWeight: '600' }}>No items found</div>

                                )}
                            </div>
                        </div>
                    ) : (
                        <p style={{ color: '#1d71b9', fontSize: '1.5rem', textTransform: 'capitalize' }}>Search whatever you want🤯.   .   .</p>
                    )}



                </SearchContainer>
            }





        </Wrapper>
    )
}
