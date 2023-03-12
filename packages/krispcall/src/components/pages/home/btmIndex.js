import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import HomeCss from "../../../assets/css/home.min.css"
import Reviews from '../../footer/reviews';
import {BtnTertiary, BtnPrimary } from '../../common/button'; 
import Testimonial from '../../common/testimonial';
import Lottie from "../../common/lottie";
import Brandslider from '../../common/brandSlider';
//import Image from "@frontity/components/image";

const BtmIndex = ({ item }) => {
  return (  
    // console.log('home page content is', item),     
    <>
        <section className="bg-primary-dark p-0 nations" id="international-num">
            <div className="container">
                <div className="row two-col">
                    <div className="col-lg-5 col-md-6">
                        <div className="two-col__content">
                            <h2 className="text-3">
                            {item.acf.international.international_title}
                            </h2>
                            <p>
                            {item.acf.international.international_text}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="lottie ml-lg-auto">
                            <Lottie lottieItem={item.acf.international.lottie}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="feature" className="feature">
            <div className="container">
                <div className="heading heading--center">
                    <h2 className="text-3 heading__title">
                        More than a
                        <span> phone system</span>
                    </h2>
                </div>
                <div className="c-wrap">
                {item.acf.features_phone_system.map((data,key) => {
                    return (
                        <div className={data.row_class_name} key={key}>
                            <div className="col-lg-5">
                                <div className="c-wrap__content">
                                    <h3 className="text-5 c-wrap__title">
                                        {data.title}
                                    </h3>
                                    <p>
                                    {data.content}
                                    </p>
                                    <BtnTertiary link={data.button_link}>Get Started</BtnTertiary>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="c-wrap__imgWrap">
                                {data.images ? 
                                    <figure>
                                        {data.images.map((images,key) => {
                                            return (
                                            <img src={images.images.url} key={key}
                                                alt={images.images.alt}
                                                title={images.images.title}
                                                className="c-wrap__img"
                                                width={images.images.width} height={images.images.height}/>
                                                )})
                                            }
                                    </figure>
                                    : <div className="lottie">
                                        <Lottie lottieItem={data.lottie}/>
                                        </div>
                                }
                                </div>
                            </div>
                        </div>
                        );
                    })
                }
                </div>
            </div>
        </section>

        {/* <!-- INTEGRATION  --> */}
        <section className="integration" id="integration">
            <div className="container">
                <div className="heading heading--center">
                    <h2 className="text-4 heading__title">
                        {item.acf.integrations.title}
                    </h2>
                    <p className="mb-0">
                    {item.acf.integrations.text}
                    </p>
                    <BtnPrimary link={item.acf.integrations.btn_link}>View all Integrations</BtnPrimary>
                </div>
            <div className="row">
                    <div className="col-lg"> 
                        <div className="lottie-wrapper lottie" id="lottie-integrations">
                            <Lottie lottieItem={item.acf.integrations.lottie}/>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="integration__content">
                            <figure className="integration__content-img mb-0">
                                <img src={item.acf.integrations.image.url} width={item.acf.integrations.image.width} height={item.acf.integrations.image.height}
                                    alt={item.acf.integrations.image.alt}
                                    title={item.acf.integrations.image.title}/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        {/* <!--INTEGRATION ENDS --> */}
        <section id="phone-system" className="phone-system">
            <div className="container">
                <div className="row two-col">
                    <div className="col-md-6">
                        <div className="two-col__content">
                            <h2 className="text-3 heading__title">
                                <span>{item.acf.phone_system.bold_text} </span>
                                {item.acf.phone_system.title}
                            </h2>
                            <p>
                            {item.acf.phone_system.content}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="two-col__img two-col__img--hasprops timeline4">
                            <figure className="img-main">
                                <img className="lozad" src={item.acf.phone_system.image.url}
                                    alt={item.acf.phone_system.image.alt}
                                    title={item.acf.phone_system.image.title}
                                    width={item.acf.phone_system.image.width}
                                    height={item.acf.phone_system.image.height}
                                    />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="iconList-grid coln__4">
                    {
                        item.acf.icon_list.map((data,key) => {
                            return (
                                <div className="coln__item" key={key}>
                                    <div className="card card-ls flex-column">
                                        <span className="icon icon-box icon-lg">
                                            <img src={data.icon.url} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt={data.icon.alt} width={data.icon.width} height={data.icon.height}/>
                                        </span>
                                        <h6>{data.title}</h6>
                                        <p>
                                            {data.content}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
        <Testimonial/> 
        <Reviews/>
    </>
  ) 
};

export default connect(BtmIndex);
const HomeWrapper  = styled.div(HomeCss)
