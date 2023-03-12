import React from "react";
import { connect, styled } from "frontity";
import Lottie from "../common/lottie";
import { BtnTrial, BtnTour } from '../common/button';
import phoneNumCss from "../../assets/css/phone-num.min.css";
import AccordionItem from "../common/accordion";

// import Lottie from 'react-lottie';
const VirtualPhone = ({ state }) => {
    const data = state.source.get(state.router.link);
    const item = state.source[data.type][data.id];

    return(
        <VirtualPhoneNumber>
            <section className="hero-phone hero-md hero-overlay">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-phone__content hero-md__content">
                                <h1 className="text-3 heading__title">
                                    {item.acf.banner.title_first}
                                    <span className="text-primary text-bold"> {item.acf.banner.title_bold} </span>
                                    {item.acf.banner.title_second}
                                </h1>
                                <p className="hero-md__info" dangerouslySetInnerHTML= {{__html:item.acf.banner.content}}/>
                                <div className="btn-wrap">
                                <BtnTrial/>
                                <BtnTour/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-phone__img" id="heroPhone">
                                <Lottie lottieItem={item.acf.banner.lottie} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
            <section className="why_choose">
              <div className="container">
              <div className="row align-items-center" id="3">
              <div className="col-lg-6">
                <div className="c-wrap__content">
                  <h3 className="c-wrap__title">{item.acf.why_choose.title}</h3>
                  <div dangerouslySetInnerHTML= {{__html: item.acf.why_choose.content} }/>
                  <dl>
                  {item.acf.why_choose.list_info ? item.acf.why_choose.list_info?.map((items,index) => {
                    return (
                      <React.Fragment key={index}> 
                        <dt>{items.title}</dt>
                        <dd>{items.content}</dd>
                      </React.Fragment>  
                    );
                  })
                  : ""}
                  </dl>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="c-wrap__imgWrap">
                  <div className="c-wrap__animation">
                    {/* <div className="lottie text-center" id="howCloudtelephonyWork"><Lottie options={howdoeslottie} /> </div> */}
                  </div>
                </div>
              </div>
            </div> 
              </div>
            </section>  
            {/* <!--PHONE NUMBER FEATURES SECTION STARTS--> */}
            <section className="phone-imageRow">
              <div className="container">
                <div className="heading heading--center">
                  <h2 className="text-4 heading__title">
                  Types of <span> International Phone Numbers </span>KripsCall Provides
                  </h2>
                </div>
                <div className="c-wrap">
                {item.acf.types.map((data,key) => {
                  return(
                    <div id={data.id} className={`row align-items-center ${data.class_name}`} key={key}>
                      <div className="col-lg-5">
                        <div className="c-wrap__content">
                          <h3 className="text-6 text-semibold c-wrap__title">
                          {data.title}
                          </h3>
                          <p>
                          {data.content}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="lottie">
                            <Lottie lottieItem={data.lottie}/>
                        </div>
                      </div>
                    </div>
                  );})}
                </div>
              </div>
            </section>
            {/* <!--PHONE SEARCH SECTION START--> */}
            <div className="phone-industries">
              <div className="container">
                <div className="heading heading--center mb-1">
                  <h2 className="text-4 heading__title">
                  Krispcall International Phone Number is <span>Best For Following Industries</span>
                  </h2>
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
            </div>
            {/* <!--FAQ SECTION STARTS--> */}
            <section className="faq faq-virtual" id="faq">
            <div className="container">
            <div className="row">
                <div className="col-lg-5">
                <div className="heading sticky">
                    <div className="heading__title text-4">
                    Frequently Asked Questions
                    </div>
                    <p>
                    Didn’t find the Answer you were looking for? Visit our
                    <a href="#">Help Center</a>
                    or
                    <a href="/contact-us">Contact Support</a>
                    </p>
                </div>
                </div>
                <div className="col-lg-7">
                <AccordionItem accordion_modifier="accordion--bordered" 
                    itemClass="accordion-item" 
                    itemHeaderClass="accordion-item__header" 
                    itemBodyClass="accordion-item__body"
                    items={item.acf.faq} />
                </div>
            </div>
            </div>
            </section>
            {/* <!--FAQ SECTION ENDS--> */}         
            {/* <!--PHONE NUMBER FEATURES SECTION STARTS--> */}
            {/* <section className="phone-imageRow">
              <div className="container">
                <div className="heading heading--center">
                  <h2 className="text-3 text-semibold heading__title">
                  Types of International Phone Numbers KripsCall Provides
                  </h2>
                </div>
                <div className="c-wrap">
                  <div className="row" id="mobile-numbers">
                    <div className="col-lg-5">
                      <div className="c-wrap__content">
                        <h3 className="text-6 text-semibold c-wrap__title">
                        {item.acf.types.title}
                        </h3>
                        <p>
                        {item.acf.types.content}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="lottie" id="mobileNum"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            {/* <!--PHONE SEARCH SECTION START--> */}
            </VirtualPhoneNumber>
    )
}

export default connect(VirtualPhone);
const VirtualPhoneNumber = styled.div(phoneNumCss);