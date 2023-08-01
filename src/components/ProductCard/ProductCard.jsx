import React from 'react';

import './ProductCard.css';
import RatingStars from '../RatingStars/RatingStars';
import Button from '../Button/Button';


export default function ProductCard(props){
    return(
        <>
        <div className="product-card-container">
            <div className="product-card-image">
                <img src="https://e7.pngegg.com/pngimages/130/381/png-clipart-logo-pedigree-petfoods-dog-food-brand-dog-food-animals.png" alt="" srcset="" />
            </div>
            <div className="product-title clickable" onClick={()=>{
                props.onClickHandler()
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
                <Button title={"Add To Cart"} onClickHandler={props.addToCart}/>
            </div>
        </div>
        </>
    )
}