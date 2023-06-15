import React, {useEffect, useState} from 'react';
import Button from '../../components/Button/Button'

import './ProductDescription.css';
import RatingStars from '../../components/RatingStars/RatingStars';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import icons from '../../constants/icons';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductInfo from '../../components/ProductInfo/ProductInfo';

export default function ProductDescription(props){
    const [product,setProduct] = useState({
        productId: "id",
        name:"Some Product",
        productImage:"https://vinylwindowspro.ca/wp-content/uploads/2016/10/dummy.jpg",
        productRating: "4",
        productCost:"$12.6",
        productDescription:"some test long description"
    })
    useEffect(()=>{
        //fetch product details for server

    });
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
            <div className="product-display-container">
                <div className="product-page-header">
                    <div className="logo clickable" onClick={()=>{
                    window.location.href = window.location.origin;
                }}>
                        LOGO
                    </div>
                    <div className="product-page-heading">
                        {product.name}
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
                <div className="section-1">
                    <ProductCard onClickHandler = {()=>setShowProduct(true)}/>
                    <ProductCard onClickHandler = {()=>setShowProduct(true)}/>
                    <ProductCard onClickHandler = {()=>setShowProduct(true)}/>
                    <ProductCard onClickHandler = {()=>setShowProduct(true)}/>
                </div>
                
            </div>
        </>
    )
}