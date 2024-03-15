import { faEnvelope, faEye, faEyeSlash, faLock, faSignIn, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'



const Wrapper = styled.div`
height: 100vh;
width: 100%;
display: flex;
`

const ShoppingImage = styled.div`
height: 100%;
width: 50%;

img{
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 768px){
display: none;
}
`

const LoginForm = styled.div`
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;



.input-login{
    width: 40%;
    height: 7%;
    border: 2px solid #1d71b9;
    color: #1d71b9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    
    
    input{
        border: none;
        outline: none;
        color: #1d71b9;
        width: 100%;
        height: 100%;
        padding-left: 1rem;
        background: transparent;
    }

    .pass-icon{
        padding-right: 1rem;
        cursor: pointer;
    }
}


.forgetpassword{

    a{
        color: #1d71b9;

        &:hover{
            text-decoration: none;
        }
    }
}

.button-login{
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 15%;
    height: 5%;
    background: #1d71b9;
    cursor: pointer;
    color: white;
    font-size: 1.1rem;

    
    button{
        background: none;
        border: none;
        outline: none;
        color: white;
        font-weight: 400;
        width: 100%;
        height: 100%;
    }
}

@media screen and (max-width: 768px){
height: 100%;
width: 100%;
background: radial-gradient(circle at right top, #1d71b9 20%, white 20%);
 

.input-login{
width: 80%;
}

.button-login{
    width:50%;
}
 
}

@media screen and (max-width: 300px){
text-align: center;
 
}
`

const NavigateLoginShop = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
background: none;
        border: none;
        outline: none;
        color: white;
        font-weight: 400;
        width: 100%;
        height: 100%;


        &:hover{
            text-decoration: none;
            color: lightgrey;
        }

`

 


export default function LoginPage() {

    const [username, setUserName] = useState('santhosh123@gmail.com')
    const [userPassword, setUserPassword] = useState('santhosh123')
    const [error, setError] = useState(null)


    const [showpass, setShowPass] = useState(false)
 

    const ShowPassWord = () => {
        setShowPass(!showpass)
    }

    



    const Navigate = useNavigate()
    const handleLogin = () => {
        if (username === '' || userPassword === '') {
            setError('Please enter both username and password');
        } else {
            if (username !== 'santhosh123@gmail.com' || userPassword !== 'santhosh123') {
                setError('*Please enter correct username and password*');
            } else {
                Navigate('/');
                localStorage.setItem('username', username)
                localStorage.setItem('userpassword', userPassword)
            }
        }
    }


    function handleKeyPress(event){
       if(event.key === 'Enter'){
        Navigate('/')
       }
    }




    return (
        <Wrapper>

            <ShoppingImage>
                <img src={process.env.PUBLIC_URL + '/LoginImage.jpg'} alt="" />


            </ShoppingImage>

            <LoginForm>
                <h3 style={{color:'#1d71b9'}}>Welcome to Tshirt Classic!</h3>
                <p>Discover Your Style, Shop with Smiles!</p>


                <div className="input-login">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input type="email" placeholder='username' value={username} onChange={(e) => { setUserName(e.target.value); console.log(e.target.value) }}
                    />
                </div>


                <div className="input-login">
                    <FontAwesomeIcon icon={faLock} />
                    <input type={showpass ? 'text' : 'password'} placeholder='password' value={userPassword} onChange={(e) => { setUserPassword(e.target.value); console.log(e.target.value) } } onKeyPress={handleKeyPress} />
                    <FontAwesomeIcon className='pass-icon' onClick={ShowPassWord} icon={showpass ? faEye : faEyeSlash} />
                </div>

                <div className="forgetpassword">
                    <a href='#'>Forget Password?</a>

                </div>
                <div className="error-login">
                    <p style={{color:'red',fontWeight:'500'}}>{error}</p>
                </div>

                <div className="button-login">
                    <button onClick={handleLogin}  >Submit</button>
                    <FontAwesomeIcon style={{ paddingRight: '1rem' }} icon={faSignIn} />
                </div>

            </LoginForm>
 
        </Wrapper>
    )
}
