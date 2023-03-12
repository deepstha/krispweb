import React from "react";
import { connect, styled } from "frontity";
import { BtnTrial, BtnTour } from "../common/button";
import clickwidgetCss from "../../assets/css/call-widget.min.css";
import Brandslider from "../common/brandSlider";
import Lottie from "../common/lottie";

// import Lottie from 'react-lottie';
const ClickWidget = ({ state }) => {
    const data = state.source.get(state.router.link);
    const item = state.source[data.type][data.id];
    return(
        <ClickWidgetWrap>
            <section className="hero-widget hero-md hero-overlay">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-auto">
                        <div className="hero-widget__content hero-md__content">
                            <h1 className="text-3 heading__title">{item.acf.banner.title}</h1>
                            <span className="text-9 hero-md__text">{item.acf.banner.sub_title}</span>
                            <p className="hero-md__info" dangerouslySetInnerHTML= {{__html:item.acf.banner.content}}/>
                            <div className="btn-wrap">
                                <BtnTrial/>
                                <BtnTour/>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg">
                        <div className="hero-widget__img" id="heroWidget">
                          <Lottie lottieItem={item.acf.banner.lottie}/>
                        </div>
                        </div>
                    </div>
                </div>
          </section>
          <Brandslider></Brandslider>
            {/* <!--PHONE NUMBER FEATURES SECTION STARTS--> */}
            {/* <!--CALL WIDGET FEATURES SECTION STARTS--> */}
            <section className="widget-imageRow">
                <div className="container">
                <div className="heading heading--center">
                    <h2 className="text-4 text-semibold heading__title">
                    Click to Call Widget Features
                    </h2>
                    <p className="text-9">
                    KrispCall’s interactive click-to-call widget is a lead magnet.
                    Use our range of features to stand out from your regular
                    call-to-action widgets.
                    </p>
                </div>
                <div className="c-wrap">
                {item.acf.feature.map((data,key) => {
                  return(
                    <div className={`row align-items-center ${data.class_name}`} key={key}>
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
        </ClickWidgetWrap>
    )
}

export default connect(ClickWidget);
const ClickWidgetWrap = styled.div(clickwidgetCss);