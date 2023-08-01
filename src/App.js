import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Courasel from './components/Courasel/Courasel';
import Header from './components/Header/Header';
import React, { useEffect, useState } from "react";
import LoginRegister from './components/LoginRegister/LoginRegister';
import UserProfilePage from './components/UserProfile/UserProfile';

import Cookies from 'js-cookie';
import Main from './Screens/Main.screen/Main';
import ProductDescription from './Screens/ProductDescription.screen/ProductDescription';
import Cart from './Screens/Cart.screen/Cart';
import Footer from './components/footer/Footer';

function App() {
  const [loginVisible,setLoginVisible] = useState(false);
  const [cart,setCart]=useState([])
  const closeLoginForm=()=>{
    setLoginVisible(false)
  }
  function addToCart(product){
    console.log('cart: ',cart);
    setCart([...cart,product]);
    const baseCartURL = Cookies.get('petstoreUserLogin') == "true" ? "http://104.197.228.156:5008/add_with_login":"http://104.197.228.156:5008/add_wo_login";
    const body = {
      item_id: product.id,
      count:1,
      is_active:1,
    }
    fetch(baseCartURL,{
      method:"POST",
      headers:{
        'Authorization': `Bearer${Cookies.get('petStoreToken')}`
      },
      body:body
    })
  }
  const dummySlides = [
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-Ogsb9T3SxblKraFtV9JzJZo_rUsACQz9Q&usqp=CAU",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYUmix1a2F1QtWvovjVY43L0ilsUSo-2pMQ&usqp=CAU",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWN-tQTGTPZwby3ziuEuukla9EoGNydJvj_g&usqp=CAU"
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3UMNjxnB5g912s_16UVcolzLnAsqSuctcgg&usqp=CAU",
    },
    {
      src:"data:image/jpeg;base64,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",
    }
  ];
  const base_url = "http://104.197.228.156:5002/";
  const [userToken,setUserToken] = useState(Cookies.get('petStoreToken'));
  let browserId = Cookies.get('browserId')? Cookies.get('browserId'):uuidv4()+"-";
  Cookies.set('browserId',browserId,{expires:99999999999});
  useEffect(()=>{
    const token = Cookies.get('petStoreToken')?Cookies.get('petStoreToken'):null;
    if(token!='undefined'&&token!='null'){
      //refresh token expiery
      Cookies.set('petStoreToken',token,{expires:7}); //expires in next 7 days
      console.log(Cookies.get('petStoreToken'))
    }
    else{
      //first time visitor action for cookies
      //send browser uuid to get visitor token
      // save visitor token 
      const url = base_url+'generate_token?browser_id='+browserId;

      fetch(url,{
        method: "POST",
        
        headers:{
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin': '*',
          'Accept':'*/*'
        }
    })
      .then(response=>response.status==200?response.json():{
        "message": "test_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYXNkZjEyMzQiLCJleHAiOjE2ODg0ODA2NTJ9.CJKmb_iFcCaVJbVJjGpkMNz69PLJgEp8G2UAerig1og"
    })
      .then(data=>{
        Cookies.set('petStoreToken',data.message,{expires:7});
        console.log(data);
      })
      .catch(err=>console.log(err))
      
    }
    Cookies.get('petstoreUserLogin') == 'true'? setLoginVisible(false):setLoginVisible(true);
    //this token in else will be changed on login
  },[userToken]);

  const [activeProduct,setActiveProduct] = useState("test-product-123");
  const [cartProducts,setCartProducts] = useState([{
    productName: "test",
    productId:"test_123",
    productPrice: 12,
    productQty:1
  },
  {
    productName: "test2",
    productId:"test_123",
    productPrice: 12,
    productQty:2
  }
]);

const closeLoginPopUp = ()=>{
  setLoginVisible(false)
}

  return (
    <div className="App">
      
      <BrowserRouter >
      <Header />
        <Routes>
          <Route path='/' element= {<div className='home'>
        
        {loginVisible&&<LoginRegister closeFormsHandler={closeLoginForm} onClose={()=>closeLoginPopUp()}/>}
        <Main addToCart={addToCart}/>
      </div>} />
          <Route path='/user' element={<UserProfilePage setActiveProduct={setActiveProduct}/>}/>
          <Route path="/products" element ={<ProductDescription productId={activeProduct} addToCart={addToCart}/>} />
          <Route path='/cart' element={<Cart cartProducts={cartProducts} addToCart={addToCart}/>}/>
        </Routes>
          <Footer />
        
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
