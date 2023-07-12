import React, { useState } from 'react';

import './Cart.css';
import { Link } from 'react-router-dom';
import icons from '../../constants/icons';
import Button from '../../components/Button/Button';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import Cookies from 'js-cookie';

export default function Cart(props){
    const orders = props.cartProducts;
    const [showProduct,setShowProduct] = useState(false);
    const [activeProduct,setactiveProduct] = useState({
        productId: "id",
        name:"Some Product",
        productImage:"https://vinylwindowspro.ca/wp-content/uploads/2016/10/dummy.jpg",
        productRating: "4",
        productCost:"$12.6",
        productDescription:"some test long description"
    })
    return (
        <>
        {showProduct&&<ProductInfo closeProductInfo={()=>setShowProduct(false)} activeProduct={activeProduct}/>}
        <div className="cart-container">
            
            <div className="cart-main-content">
                <ul className='order-list'>
                  {orders? <>
                    {orders.map(order => (
                    <li className='cart-card' key={order.id}>
                      <div className="order-list-item" style={{flexDirection:'column'}}>
                        <div className='delivery-details-card' style={{display:'flex'}}>
                            <div className="product-image" >
                              <img src={order.image?order.image:"https://vinylwindowspro.ca/wp-content/uploads/2016/10/dummy.jpg"} alt="" srcset="" />
                            </div>
                            <div className="product-delivery-detail">
                                <div className="product-name-delivery-card clickable" onClick={()=>{
                                    // props.setActiveProduct(order.productId);
                                    setShowProduct(true)
                                    
                                }}>
                                    {order.productName? order.productName:"Product Name"}
                                </div>

                                <div className='order-quantity'>
                                    Quantity: {order.productQty}
                                </div>
                            </div>
                            <div className="card-cost">
                            Price: ${order.productQty*order.productPrice}
                        </div>
                        </div>
                        
                      </div>
                    </li>
                  ))}
                  </>:
                  <><div className="no-orders-div">
                    No Products Here... <Link to="/">SHOP FOR SOMETHING?</Link>
                    </div></>}
                </ul>
            </div>
            <div className="proceed-to-checkout-button">
                <Button title={"Proceed To Checkout"} onClickHandler={()=>{
                        if(Cookies.get('petstoreUserLogin')=="true"){
                            console.log('checkout');
                        }
                        else{
                            console.log('login first');
                        }
                    }}/>
            </div>
        </div>
        </>
    )
}