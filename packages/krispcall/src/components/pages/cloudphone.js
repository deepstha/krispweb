import React from "react";
import { connect, styled } from "frontity";
import Lottie from "../common/lottie";
import { BtnTrial, BtnTour } from '../common/button';
import cloudCss from "../../assets/css/cloud-phone.min.css"
// import Lottie from 'react-lottie';
const CloudPhone = ({ state }) => {
    const data = state.source.get(state.router.link);
    const item = state.source[data.type][data.id];
    return(
        // console.log('cloud pHone page',page),
        <CloudPhoneWrapper>
            <section className="hero-cloud hero-md hero-overlay">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-auto">
                            <div className="hero-cloud__content hero-md__content">
                                <h1 className="text-3 heading__title">{item.acf.banner.title}</h1>
                                <span className="text-9 hero-md__text">
                                    {item.acf.banner.sub_title}
                                </span>
                                <p className="hero-md__info" dangerouslySetInnerHTML= {{__html:item.acf.banner.content}}/>
                                <div className="btn-wrap">
                                <BtnTrial/>
                                <BtnTour/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg">
                            <div className="hero-cloud__img" id="heroCloudPhone">
                                <Lottie lottieItem={item.acf.banner.lottie} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          {/* <!--CLOUD FEATURE STARTS--> */}
          <section className="cloud-features">
            <div className="container">
              <div className="heading heading--center">
                <h2 className="text-3 heading__title text-smbold">
                  <span>Cloud phone</span> features
                </h2>
                <p className="text-9">
                  Our exclusive business features increase your accessibility to
                  clients, automate communications to support multitasking, and
                  allow you complete control of operations with options for
                  customization.
                </p>
              </div>
              <div className="c-wrap">
                  {item.acf.features.map((data,key) => {
                      return(
                        <div id={data.feature_id} className={`row align-items-center ${data.row_class_name}`} key={key}>
                        <div className="col-lg-5">
                          <div className="c-wrap__content">
                            <h3 className="text-5 c-wrap__title">{data.title}</h3>
                            <p>
                              {data.content}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="c-wrap__imgWrap">
                            <div className="c-wrap__animation">
                              <div className="lottie">
                                  <Lottie lottieItem={data.lottie} />
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                  })}
              </div>
            </div>
          </section>
          {/* <!-- CLOUD FEATURE GROUP STARTS--> */}
        <section className="cloud-featureGroup">
            <div className="container">
                {item.acf.feature_group.map((data,key) => {
                    return(
                        <div className={data.feature_id} id={data.feature_id} key={key}>
                            <div className="row two-col">
                            <div className="col-md-6">
                                <div className="two-col__content">
                                <h2 className="text-4 heading__title text-smbold">
                                    {data.feature_title}
                                </h2>
                                <p>
                                    {data.feature_content}
                                </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="two-col__imgWrap">
                                  <Lottie lottieItem={data.lottie} />
                                </div>
                            </div>
                            </div>
                            <div className="iconList-grid coln__4">
                                {
                                    data.icon.map((item,key) => {
                                        return (
                                            <div className="coln__item" key={key}>
                                                <div className="card card-ls flex-column">
                                                    <span className="icon icon-box icon-lg">
                                                        <img src={item.icon_image.url} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt={item.icon_image.alt} height={item.icon_image.height} width={item.icon_image.width}/>
                                                    </span>
                                                    <h6>{item.icon_title}</h6>
                                                    <p>
                                                        {item.icon_content}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
          {/* <!--PHONE SEARCH SECTION START--> */}
          {/* <section
            className="phone-search phone-search__cloudPhone"
            id="international-num"
          >
            <div className="container">
              <div className="phone-search__wrapper">
                <div className="heading heading--center">
                  <h2 className="text-3 text-regular heading__title">
                    Get your
                    <span className="text-primary">international numbers</span>
                    instantly.
                  </h2>
                  <p className="text-9">
                    Get multiple numbers from more than 100 countries worldwide
                    in no time.
                  </p>
                </div>
                <div
                  id="search-num"
                  className="search-num-wrapper search-num"
                ></div>
              </div>
            </div>
          </section> */}
        </CloudPhoneWrapper>
    )
}

export default connect(CloudPhone);
const CloudPhoneWrapper = styled.div(cloudCss);