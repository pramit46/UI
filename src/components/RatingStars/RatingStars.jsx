import React from 'react';
import icons from '../../constants/icons';

export default function RatingStars(props){
    let emptyStars = []
    let ratingArray = []
    for(let i =0; i<props.rating;i++){
        ratingArray.push(i)
    }
    for(let i =0;i<5-props.rating;i++){
        emptyStars.push(i)
    }
    return(
        <div className='ratings-stars' style={{display:'flex'}}>
            {ratingArray.map(rating=><div className='gold-star'>{icons.fillStar}</div>)} {emptyStars.map(rating=><div>{icons.starOutline}</div>)} &nbsp; {props.rating}

        </div>
    )
}