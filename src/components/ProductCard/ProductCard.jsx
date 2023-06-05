import React from 'react';

import './ProductCard.css';
import RatingStars from '../RatingStars/RatingStars';
import Button from '../Button/Button';


export default function ProductCard(props){
    return(
        <>
        <div className="product-card-container">
            <div className="product-card-image">
                <img src="https://vinylwindowspro.ca/wp-content/uploads/2016/10/dummy.jpg" alt="" srcset="" />
            </div>
            <div className="product-title clickable" onClick={()=>{
                window.location.href = window.location.origin+'/products';
            }}>
                Product Title
            </div>
            <div className="product-description">
                this is a sample product description
            </div>
            <div className="product-rating">
                <RatingStars rating={3} />
            </div>
            <div className="add-to-cart-button">
                <Button title={"Add To Cart"} onClickHandler={()=>{console.log('test add to cart')}}/>
            </div>
        </div>
        </>
    )
}