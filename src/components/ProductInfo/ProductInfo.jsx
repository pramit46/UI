import React from "react";
import './ProductInfo.css';
import RatingStars from "../RatingStars/RatingStars";
import Button from "../Button/Button";

export default function ProductInfo(props){
    const product=props.activeProduct
    return(
        <div className="product-info-container">
            <a href="javascript:void(0)" class="closebtn" onClick={props.closeProductInfo}>&times;</a>
            <div className="product-info-card">
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
            </div>
        </div>
    )
}