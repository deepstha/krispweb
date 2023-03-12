import React  from "react";
import { connect, styled } from "frontity";
import { BtnTrial, BtnTour} from "../../../common/button";
import solutionsCss from "../../../../assets/css/solutions.min.css";
import iconminus from "../../../../assets/images/svg/icons/icon-minus.svg";
import iconplus from "../../../../assets/images/svg/icons/icon-plus.svg";
import solution from "../../../../assets/images/solutions/solutions-img.png";
import propEclipse from "../../../../assets/images/home/prop-eclipse.png"
import Lottie from "../../../common/lottie";

const SolutionComponent = ({ page }) => {
  return (
    <Solutions>
      {/* <!-- CLOUD PHONE HERO SECTION STARTS --> */}
      <section className={`hero-solutions hero-md ${page.acf.banner.class_name}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-auto">
              <div className="hero-solutions__content hero-md__content">
                <h1 className="text-3 heading__title">{page.acf.banner.title}</h1>
                <span className="text-9 hero-md__text">{page.acf.banner.sub_title}
                </span>
                <div className="hero-md__info" dangerouslySetInnerHTML= {{__html:page.acf.banner.content}}/>
                <BtnTrial/>
                <BtnTour/>
              </div>
            </div>
            <div className="col-lg">
              <div className="hero-solutions__img" id="heroCloudTelephony">
                <Lottie lottieItem={page.acf.banner.lottie} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <!-- SOLUTIONS EXPLAINATION STARTS --> */}
      <section className={`solutions-expln ${page.acf.class_name }`}>
        <div className="container">
          <div className="ct-collapse" id="ct-collapse">
            <div className="ct-collapse__header"
              data-toggle="collapse"
              href="#content-collapse"
              aria-expanded="false"
              aria-controls="content-collapse">
              <span>Table of Contents</span>
              <div className="ct-collapse__icon">
                <img
                  className="icon-plus"
                  src={iconplus}
                  alt=""
                />
                <img
                  className="icon-minus"
                  src={iconminus}
                  alt=""
                />
              </div>
            </div>
            <div className="collapse" id="content-collapse">
              <div className="ct-collapse__body">
                <ol>
                  <li>
                    Cloud Telephony
                    <ol>
                      <li>
                        <a href="#1">What is Cloud Telephony?</a>
                      </li>
                      <li>
                        <a href="#2">Cloud Telephony of KrispCall</a>
                      </li>
                      <li>
                        <a href="#3">
                          How Does KrispCall Cloud Telephony Work?
                        </a>
                      </li>
                      <li>
                        <a href="#4">Benefits of KrispCall Cloud Telephony</a>
                        <ol>
                          <li>
                            <a href="#4.1">Quick and easy implementation</a>
                          </li>
                          <li>
                            <a href="#4.2">
                              Lower cost of owning and running your business
                              phone system
                            </a>
                          </li>
                          <li>
                            <a href="#4.3">
                              Robust and powerful calling features
                            </a>
                          </li>
                          <li>
                            <a href="#4.4">
                              Flexibility and scalability of your phone system
                            </a>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="c-wrap">
            <div className="row align-items-center" id="1">
              <div className="col-lg-6">
                <div className="c-wrap__content">
                  <h3 className="c-wrap__title">{page.acf.what_is.title}</h3>
                  <div dangerouslySetInnerHTML= {{__html: page.acf.what_is.content}}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="c-wrap__imgWrap">
                  <div className="c-wrap__animation">
                    <div className="lottie text-left" id="whatisCloudtelephony">
                      <Lottie lottieItem={page.acf.what_is.lottie_link} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fw-slider" id="2">
              <div className="c-wrap__content">
                <h3 className="c-wrap__title text-center">
                  <span>Cloud Telephony</span> of KrispCall
                </h3>
              </div>
              <div className="fw-slider__wrapper">
                <div className="fw-slider__content">
                  <div className="fw-slider__item">
                    <img
                      src={solution}
                      alt="Dashboard"
                      title="Cloud Telephony of KrispCall"
                      width="1050"
                      height="591"
                    />
                  </div>
                </div>
                <div className="props-area">
                  <figure>
                  <img src={propEclipse} alt="Eclipse" width="220" height="220"/>
                  </figure>
                  <figure>
                  <img src={propEclipse} alt="Eclipse" width="220" height="220"/>
                  </figure>
                </div>
              </div>
            </div>
            <div className="row align-items-center" id="3">
              <div className="col-lg-6">
                <div className="c-wrap__content">
                  <h3 className="c-wrap__title">{page.acf.how_does.title}</h3>
                  <div dangerouslySetInnerHTML= {{__html: page.acf.how_does.content} }/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="c-wrap__imgWrap">
                  <div className="c-wrap__animation">
                    <div className="lottie text-center" id="howCloudtelephonyWork"><Lottie lottieItem={page.acf.how_does.lottie_link} /> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row flex-lg-row-reverse" id="4">
              <div className="col-lg-6 col-xl-auto">
                <div className="c-wrap__content">
                  <h3 className="c-wrap__title">{page.acf.benefits.title}</h3>
                    <p>{page.acf.benefits.content}</p>
                    <dl>
                    {page.acf.benefits.list_info ? page.acf.benefits.list_info?.map((items,index) => {
                    return (
                      <React.Fragment key={index}> 
                        <dt id="4.1">{items.title}</dt>
                        <dd>{items.content}</dd>
                      </React.Fragment>  
                    );
                  })
                  : ""}
                  </dl>
                </div>
              </div>
              <div className="col-lg-6 col-xl">
                <div className="c-wrap__imgWrap sticky">
                  <div className="c-wrap__animation">
                    <div className="lottie text-left" id="cloudTelephonyBenifits">
                      <Lottie lottieItem={page.acf.benefits.lottie_link} />
                    </div>
                  </div>
                  {page.acf.benefits.image ? 
                  <figure className="c-wrap__img">
                    <img
                      className="lozad"
                      src={page.acf.benefits.image.url}
                      alt={page.acf.benefits.image.alt}
                      title={page.acf.benefits.image.title}
                      width={page.acf.benefits.image.width}
                      height={page.acf.benefits.image.height}
                    />
                  </figure>
                  : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- SOLUTIONS EXPLAINATION ENDS --> */}
    </Solutions>
  );
};

export default connect(SolutionComponent);
const Solutions = styled.div(solutionsCss);
