import React from "react";
import './Main.css'
import ProductCourasel from "../../components/Courasel/ProductsCourasel";
import Courasel from "../../components/Courasel/Courasel";
import ProductCard from "../../components/ProductCard/ProductCard";
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
    return(
        <>
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
                <div className="products">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <div className="footer">
                <div className="contact-us-part">
                    <div className="contact-us-title">
                        Contact Us:
                    </div><div className="contact-us-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam, felis nec consequat volutpat
                    </div>

                </div>
                <div className="email-phone-etc">
                    <div className="email">
                        test.someone@email.com
                    </div>
                    <div className="phone">
                        9425434561
                    </div>
                </div>
            </div>
        </>
    )
}