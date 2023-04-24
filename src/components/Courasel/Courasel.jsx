import React, { useEffect, useRef, useState } from "react";

import './Courasel.css';

export default function Courasel(props){
    const [currentIndex,setCurrentIndex] = useState(0);
    function precClickHandler(e){
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? props.slides.length-1:currentIndex-1;
        setCurrentIndex(newIndex);
    }
    function nextClickHandler(e){
        const isLastSlide = currentIndex === props.slides.length-1;
        const newIndex = isLastSlide ? 0:currentIndex+1;
        setCurrentIndex(newIndex);
    }
    const timerRef = useRef(null);

    useEffect(()=>{
        if(timerRef.current){
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(()=>{
            nextClickHandler(null);
        },5000);
        return ()=>clearTimeout(timerRef.current);
    });

    return(
        <div className="courasel-container">
            <div className="active-view">
                <img src={props.slides[currentIndex].src} alt="" />
            </div>
        </div>
    );
}