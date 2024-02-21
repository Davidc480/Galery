

const RefDom = ()=>{
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
}

export default RefDom;