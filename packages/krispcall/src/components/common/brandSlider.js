import React, {Fragment, useState } from 'react';
import {  connect, styled  } from "frontity";
import slickCss from "slick-carousel/slick/slick.css"; 
import slickTheme from "slick-carousel/slick/slick-theme.css"; 
import SlickCustomCss from '../../assets/css/slick-custom.min.css';
import Slider from "react-slick";

const Brandslick = slickCss + slickTheme + SlickCustomCss ;
const Brandslider = ({ state }) => {
    const brand = state.source.get(`/brand/slider/`).items;
    const settings = {
        dots: false,
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
    return (
        <CompanySlider id="brand-slider">
            <div className="hero-panel__slider">
                <div className="container-brands text-center">
                    <div className="trusted tmline1">
                    <h6 className='text-10 text-600' dangerouslySetInnerHTML={{ __html: brand.content.rendered }} />
                         <div className="trusted__slider center">
                        <Slider {...settings}>
                            {brand.acf.brand_slider.map((data,key) =>{
                                return(
                                    <div className="company o-logo" key={key}>
                                        <a href={data.link} target="_blank" rel="noopener noreferrer">
                                            <img src={data.image} alt="Out-invoice" title="Out Invoice"/>
                                        </a>
                                    </div>
                                )
                            })}
                        </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </CompanySlider>
    )
}
export default connect(Brandslider);

const CompanySlider= styled.div(Brandslick);
