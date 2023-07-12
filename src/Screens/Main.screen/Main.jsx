import React, { useEffect, useState } from "react";
import './Main.css'
import ProductCourasel from "../../components/Courasel/ProductsCourasel";
import Courasel from "../../components/Courasel/Courasel";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
const dummySlides = [
    {
      src:"https://petshopindia.com/image/cache/catalog/Fekrix/fekrix-pet-food/fekrix-cat-adult-mackerel-7kg-268x372.jpg",
      title:"test1"
    },
    {
      src:"https://m.media-amazon.com/images/I/51PBUjqIAlL.jpg",
      title:"test2"
    },
    {
      src:"https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/newscms/2023_19/3569074/screen_shot_2022-08-31_at_3-00-32_pm.png",
      title:"test3"
    },
    {
      src:"https://www.akc.org/wp-content/uploads/2019/06/Top-Travel-Products-for-Dogs.jpg",
      title:"test4"
    },
    {
      src:"https://cdn.shopify.com/s/files/1/0086/0795/7054/products/7170678-1_PedigreeProPuppyLargeBreed3kg_FOP.jpg?v=1676617003&width=533",
      title:"test5"
    }
  ];
export default function Main(props){
    const [showProduct,setShowProduct] = useState(false);
    const [activeProduct,setActiveProduct] = useState({
        productId: "id",
        name:"Some Product",
        productImage:"https://vinylwindowspro.ca/wp-content/uploads/2016/10/dummy.jpg",
        productRating: "4",
        productCost:"$12.6",
        productDescription:"some test long description"
    });



    return(
        <>
        {showProduct&&<ProductInfo closeProductInfo={()=>setShowProduct(false)} activeProduct={activeProduct} addToCart={props.addToCart}/>}
            <div className="welcome-header">
                <div className="text-greeting">
                    <span className="very-big-text">
                        HI,
                    </span>
                    <span className="just-big-text">
                        Your Search For A Single Stop Shop
                    </span>
                    <span className="just-big-text">
                        For Your Pet Needs
                    </span>
                    <span className="just-big-text">
                        Ends Here ...
                    </span>
                </div>
                <div className="image-part">
                    <img src="https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1661539073930.jpg-org" alt="" srcset="" />
                </div>
            </div>
            <div className="products-section">
                <div className="products-courasel-header">
                    OUR PRODUCTS
                </div>
                <div className="product-catagories">
                    <div className="product-catagory">
                        <div className="product-subheader">
                            Food:
                        </div>
                        <div className="products">
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
        
                        </div>
                        <div className="clickable view-more-button" onClick={()=>{
                            const host = window.location.origin;
                            window.location.href = host+`/products`;
                            }}>
                            {"View All Products ->"}
                        </div>
                    </div>
                    <div className="product-catagory">
                        <div className="product-subheader">
                            Appearal:
                        </div>
                        <div className="products">
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
        
                        </div>
                        <div className="clickable view-more-button" onClick={()=>{
                            const host = window.location.origin;
                            window.location.href = host+`/products`;
                            }}>
                            {"View All Products ->"}
                        </div>
                    </div>
                    <div className="product-catagory">
                        <div className="product-subheader">
                            Toys:
                        </div>
                        <div className="products">
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
        
                        </div>
                        <div className="clickable view-more-button" onClick={()=>{
                            const host = window.location.origin;
                            window.location.href = host+`/products`;
                            }}>
                            {"View All Products ->"}
                        </div>
                    </div>
                    <div className="product-catagory">
                        <div className="product-subheader">
                            Food:
                        </div>
                        <div className="products">
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
        
                        </div>
                        <div className="clickable view-more-button" onClick={()=>{
                            const host = window.location.origin;
                            window.location.href = host+`/products`;
                            }}>
                            {"View All Products ->"}
                        </div>
                    </div>
                    <div className="product-catagory">
                        <div className="product-subheader">
                            Food:
                        </div>
                        <div className="products">
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
        
                        </div>
                        <div className="clickable view-more-button" onClick={()=>{
                            const host = window.location.origin;
                            window.location.href = host+`/products`;
                            }}>
                            {"View All Products ->"}
                        </div>
                    </div>
                    <div className="product-catagory">
                        <div className="product-subheader">
                            Food:
                        </div>
                        <div className="products">
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
                            <ProductCard onClickHandler = {()=>setShowProduct(true)} addToCart={(product)=>props.addToCart(product)}/>
        
                        </div>
                        <div className="clickable view-more-button" onClick={()=>{
                            
                            const host = window.location.origin;
                            window.location.href = host+`/products`;
                            }}>
                            {"View All Products ->"}
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </>
    )
}