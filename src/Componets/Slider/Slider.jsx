'use client'
import React, { useRef } from 'react';
import styles from "./Slider.module.css"
import SliderItems from '../SliderItems/SliderItems';



const Slider = ()=>{
    
    const refNext = useRef(null);
    const refPrev = useRef(null);
    const refSlide = useRef(null);
    

    const handleClickNext = () => {
        const slide = refSlide.current;
        const item = slide.children[0];
        slide.appendChild(item);
    }

    const handleClickPrev = () => {
        const slide = refSlide.current;
        const item = slide.children[slide.children.length - 1];
        slide.prepend(item);
    }
      

      return (
        <div className={styles.container}>
          <div className={styles.slide} ref={refSlide}>
            {SliderItems().map((item, index) => (
              <div key={index} className={styles.item} style={{ backgroundImage: `url(${item.imageUrl})` }}>
                <div className={styles.content}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.des}>{item.description}</div>
                  <button>See More</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.button}>
            <button className={styles.prev} ref={refPrev} onClick={handleClickPrev}> <i className="fa-solid fa-arrow-left"></i> </button>
            <button className={styles.next} ref={refNext} onClick={handleClickNext}> <i className="fa-solid fa-arrow-right"></i> </button>
          </div>
        </div>
      );
}      

export default Slider;