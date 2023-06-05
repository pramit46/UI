import React, {useEffect, useState} from 'react';
import Button from '../../components/Button/Button'

import './ProductDescription.css';
import RatingStars from '../../components/RatingStars/RatingStars';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import icons from '../../constants/icons';

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

    })
    return (
        <>
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
                    <div className="product-image">
                        <img src={product.productImage} alt="product" />
                    </div>
                    <div className="product-info-overview">
                        <div className="product-info-name">
                            {product.name}
                        </div>
                        <div className="product-info-desc">
                            {product.productDescription}
                        </div>
                        <div className="product-info-rating">
                            <RatingStars rating={product.productRating}/>
                        </div>
                        <div className="product-info-price">
                            {product.productCost}
                        </div>
                        <div className="add-to-cart-button">
                            <Button title={"Add to Cart"} onClickHandler={()=>{console.log('test')}}/>

                        </div>
                    </div>
                </div>
                <div className="section-2">
                    <div className="section-2-heading">
                        Variants of Product and User Reviews
                    </div>

                </div>
            </div>
        </>
    )
}