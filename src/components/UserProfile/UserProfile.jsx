import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom'

import './UserProfile.css'
import icons from '../../constants/icons';
import ProductInfo from '../ProductInfo/ProductInfo';



function UserProfilePage(props) {
  const [user, setUser] = useState({
    name:"Test User"
  });

  const [mainPage,setMainPage] = useState('profile')
  const [orders, setOrders] = useState([
    {
        id:"test1234",
        productId:"test-product-123",
        date:"12-12-23",
        status:"delivered"
    }
  ]);

  const screens= {
    profile: <UserProfile user={user}/>,
    orders: <OrdersPage orders={orders} setActiveProduct={props.setActiveProduct}/>,
  }
  

  useEffect(() => {
    // axios.get('/api/user')
    //   .then(response => {
    //     setUser(response.data.user);
    //     setOrders(response.data.orders);
    //   })
    //   .catch(error => console.error(error));
  }, []);

  return (
    <div className="user-profile-page">
      <div className="product-page-header">
                    <div className="logo clickable" onClick={()=>{
                    window.location.href = window.location.origin;
                }}>
                        LOGO
                    </div>
                    <div className="product-page-heading">
                        {user.name}
                    </div>
                        <div className="cart-user-navigation">
                        <div className="cart-icon-access">
                                <Link to="/cart" className="cart-link">
                                    {icons.cart}
                                </Link>
                            </div>
                            <div className="user-cion-access">
                            <Link to="/user" className="user-page-link">
                                    {icons.user}
                                </Link>
                            </div>
                        </div>
                </div>
      
      <div className="content">
        <div className="sidebar">
          <ul>
            <li><a className='sidebar-list-item active-item' id='profile-option' href="#" onClick={()=>{
                setMainPage('profile');
                document.getElementById('orders-option').classList.remove('active-item')
                document.getElementById('profile-option').classList.add('active-item')
              }}>Profile</a></li>
            <li><a className='sidebar-list-item' id='orders-option' href="#" onClick={(e)=>{
                setMainPage('orders');
                document.getElementById('orders-option').classList.add('active-item')
                document.getElementById('profile-option').classList.remove('active-item')
              }}>Orders</a></li>
            {/* <li><a className='sidebar-list-item' href="#">Settings</a></li> */}
          </ul>
        </div>
        {screens[mainPage]}
      </div>
    </div>
  );
}

function OrdersPage(props){
  const orders = props.orders;
  const [showProduct,setShowProduct] = useState(false);
  const [activeProduct,setactiveProduct] = useState({
    productId: "id",
    name:"Some Product",
    productImage:"https://vinylwindowspro.ca/wp-content/uploads/2016/10/dummy.jpg",
    productRating: "4",
    productCost:"$12.6",
    productDescription:"some test long description"
})
  return(
    <>
    {showProduct&&<ProductInfo closeProductInfo={()=>setShowProduct(false)} activeProduct={activeProduct}/>}
    <div className="main-orders">
          <div className="active-orders-div">
          <h2 className='active-orders-header'>Active Orders</h2>
          <ul className='order-list'>
            {orders? <>
              {orders.map(order => (
              <li key={order.id}>
                <div className="delivery-details-card order-list-item">
                  <div className="product-image" >
                    <img src={order.image?order.image:"https://vinylwindowspro.ca/wp-content/uploads/2016/10/dummy.jpg"} alt="" srcset="" />
                  </div>
                  <div className="product-delivery-detail">
                    <div className="product-name-delivery-card clickable" onClick={()=>{
                      setShowProduct(true)
                    }}>
                      {order.name? order.name:"Product Name"}
                    </div>
                    <div className="tracking-details-section clickable" onClick={()=>{
                      window.location.href = window.location.origin + '/track_order';
                    }} style={{marginBottom:'0.5rem',fontWeight:'600',fontSize:'14px'}}>
                      Tracking Details
                    </div>
                  <div className='order delivery-status'>Expected Delivery - <span className={order.status=='deliered'? 'complete':'processing'}>{order.date}</span></div>
                  </div>
                </div>
                
              </li>
            ))}
            </>:
            <><div className="no-orders-div">
              No Active Orders... <Link to="/">SHOP FOR SOMETHING?</Link>
              </div></>}
          </ul>
          </div>
          <div className="active-orders-div">
          <h2 className='active-orders-header'>Completed Orders</h2>
          <ul className='order-list'>
            {orders? <>
              {orders.map(order => (
              <li key={order.id}>
                <div className="delivery-details-card order-list-item">
                  <div className="product-image" >
                    <img src={order.image?order.image:"https://vinylwindowspro.ca/wp-content/uploads/2016/10/dummy.jpg"} alt="" srcset="" />
                  </div>
                  <div className="product-delivery-detail">
                    <div className="product-name-delivery-card clickable" onClick={()=>{
                      setShowProduct(true)
                    }}>
                      {order.name? order.name:"Product Name"}
                    </div>
                    
                  <div className='order delivery-status'>Delivery Date - <span className={order.status=='delivered'? 'complete':'processing'}>{order.date}</span></div>
                  </div>
                </div>
                
              </li>
            ))}
            </>:
            <><div className="no-orders-div">
              No Active Orders... <Link to="/">SHOP FOR SOMETHING?</Link>
              </div></>}
          </ul>
          </div>
        </div>
    </>
  )
}
function UserProfile(props){
  return(
    <>
       <div className="main">
          <div className="user-info">
            {/* <div className="user-photo">
              <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="" width={"100%"} height={"100%"}/>
            </div> */}
            <div className="user-details">
              <div className="user-name">
                Name: Test User
              </div>
              <div className="user-contact" style={{marginTop:'1rem'}}>
                Contact: 345678902
              </div>
            </div>
          </div>
          <div className="user-saved-data">
            {/* <div className="user-saved-data-title">
              USER SAVED DATA
            </div> */}
            <div className="card-details">
              <div className="card-detail-label">
                Saved Card Details: 
              </div>
              <div className="saved-card">
                <div className="card-number">
                  XXXX-XXXX-XXXX-XXXX
                </div>
                <div className="card-expires">
                  MM/YYYY
                </div>
              </div>
            </div>
            <div className="user-saved-address">
              <div className="address-detail-label">
                Saved Card Details: 
              </div>
              <div className="user-saved-adderss">
                <div className="street-address">
                  26985 Lorem Ipsum, 32 Dolor Set
                </div>
                <div className="city-address">
                  Lake Forest, CA
                </div>
                <div className="pin-code">
                  Pin: 560067
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
export default UserProfilePage;