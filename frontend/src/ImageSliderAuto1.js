import React, { useEffect, useState } from 'react';
import './ImageSlider.css';
const ImageSliderAuto1 = (props) => {
    const SliderProperty = {
        ImageNo: '',
        ImageName: '',
        ImageSrc: ''
    }

    const [sliderProperty, setSliderProperty] = useState(SliderProperty);

    const { ImageNo, ImageName, ImageSrc } = sliderProperty;

    const [count, setCount] = useState(0);


    const [animationCls, setAnimationCls] = useState('displayBlock fade');



    const NextClick = () => {

        setAnimationCls(() => ('displayNone fade'));
        const myTimeout = setTimeout(() => {
            setAnimationCls('displayBlock fade')
        }, 100);

        if (count <= props.ImageData1.length-1) {
            setCount(count+1);
        }

        if (count === props.ImageData1.length-1) {
            setCount(0);
        }

    };

    useEffect(() => {

        setSliderProperty((previous) => ({ ...previous, ImageNo: props.ImageData1[count].ImageNo, ImageName: props.ImageData1[count].ImageName, ImageSrc: props.ImageData1[count].ImageSrc }));

    }, [count]);



    useEffect(() => {

         const interval=  setInterval(() => {

            NextClick();

        }, props.SlideInterValTime);

        return () => clearInterval(interval);

    }, [count]);



    return (
        <>
            <div className='slideshow-container '>


                <div className={animationCls}>
                    <div className="numbertext">{ImageNo}</div>
                    <img src={ImageSrc} className='imageStyle' alt="Img" />
                </div>
                <div className="text">{ImageName}</div>
            </div>


        </>

    );
};

export default ImageSliderAuto1;