import React, { useState, useEffect } from "react";
import {connect, styled} from 'frontity';
import Lottie from "../common/lottie";
import faqCss from "../../assets/css/faq.min.css";
import AccordionItem from '../common/accordion';
import iconList from '../../assets/images/svg/icons/icon-list-check.svg';
const Faqs =({ state }) => {
    const data = state.source.get(state.router.link);
    const item = state.source[data.type][data.id];
    return (
    <Faq>
        {/* <!--INTEGRATION SINGLE HERO SECTION STARTS --> */}
        <section className="hero-overlay hero-faq hero-sm">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-auto">
                        <div className="hero-faq__content hero-sm__content">
                        <h1 className="text-3 text-regular">
                                {item.acf.banner.title}
                                <span className="text-primary text-bold">{item.acf.banner.title_bold}</span>
                            </h1>
                            <span className="text-9 hero-md__text">{item.acf.banner.content}</span>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="hero-faq__img" id="herofaq">
                            <Lottie lottieItem={item.acf.banner.lottie}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- TAB STARTS --> */}
        <section className="tabs-vertical faq-accordionTab">
            <div className="offcanvas">
                <button type="button" className="close closebtn">
                    <span aria-hidden="true">&times;</span>
                </button>
                <ul className="nav nav-pills tabs__nav">
                {item.acf.faq.map((info, key) => {
                        return (
                            <li className="nav-item" key={key}>
                                <a className="nav-link active" href={`#${info.faq_title}`}>{info.faq_title}</a>
                            </li>
                            );
                        })
                }
                </ul>
            </div>
            <div
                className="container">
                {/* <!-- Toggler button --> */}
                <div className="offcanvas__toggler d-lg-none sticky">
                    <button href="#" className="btn btn-primary btn-sm btn-icon"><img src={iconList} className="mr-2"/>
                        Table of Contents</button>
                </div>
                <div className="row">
                    <div className="col-lg-3 inner-sideNav">
                        <ul className="nav nav-pills tabs__nav">
                        {item.acf.faq.map((info, key) => {
                        return (
                            <li className="nav-item"  key={key}>
                                <a className="nav-link" href={`#${info.faq_title}`}>{info.faq_title}</a>
                            </li>
                                );
                            })
                        }
                        </ul>
                    </div>
                    <div className="col-lg-9 faq-inner">
                        {/* <!--FAQ--> */}
                        <div className="searchList__header d-md-flex align-items-center justify-content-between">
                            <div className="heading m-0 mb-3 mb-md-0">
                                <div className="inner-page__date mb-0">Last updated on
                                    <span>March 21, 2021</span>
                                </div>
                            </div>
                            <div className="form-group m-0 gsap_fromRight">
                                <div className="form-control-wrapper form-search">
                                    <input type="text" className="form-control mh-45" name="search" id="searchList" placeholder="Search FAQs"/>
                                </div>
                            </div>
                        </div>
                        <div className="searchList__items" id="searchList__items">
                                {item.acf.faq.map((info, key) => {
                                    const { sub_faq_title } = info ;
                                    return (
                                        //console.log('sub_faq_title is', info.feedback ),
                                   
                                    <div className="tabs__content-item"  key={key}>
                                        <h3 className="text-6" id={info.faq_title}>{info.faq_title}</h3>
                                        <AccordionItem 
                                            items={ sub_faq_title } 
                                            accordion_modifier="accordion--bordered" 
                                            itemClass="accordion-item" 
                                            itemHeaderClass="accordion-item__header"
                                            itemBodyClass="accordion-item__body"
                                        />
                                    </div>
                                  );
                                })}
                            <div className="info-wrap">
                                <span>Didn’t find the Answer you were looking for? Visit our
                                    <a href="/contact-us">Help Center</a>
                                    or
                                    <a href="/contact-us">Contact Support.</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- TAB ENDS --> */}
    </Faq>
 );
};
export default connect(Faqs);

const Faq = styled.div(faqCss);