import React from "react";
import images from "./images";
import './LandingPage.css';
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function LandingPage(){
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setScrollTop(newScrollTop);
        };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const [width, setwidth] = useState(0);
    const carousel = useRef();

    useEffect(()=>{
        setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])
    return(
        <div className="App">
            <motion.div ref={carousel} className="carousel" whileTap={{cursor:'grabbing'}}>
                <motion.div drag="x" dragConstraints={{right:'0', left:-width}} className="inner-carousel" style={{ transform: `translateX(-${scrollTop}px)` }} >
                    {images.map(image =>{
                        return(
                            <motion.div className="item" key={image}>
                                <img src={image} className="image" style={{width:'100%', height:'100%'}}/>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}
export default LandingPage