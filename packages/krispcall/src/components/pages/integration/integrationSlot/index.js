import React  from "react";
import { connect, styled } from "frontity";
import { BtnTrial, BtnTour} from "../../../common/button";
import integrationCss from "../../../../assets/css/integration.min.css";
import krispcallTimeline from "../../../../assets/images/integrations/krispcall-timeline.png"
import Lottie from "../../../common/lottie";

const IntegrationSlot = ({ page }) => {
  return (
    <IntegrationContainer>
    {/* <!--INTEGRATION SINGLE HERO SECTION STARTS --> */}
      <section className={`hero-md hero-bg integration-hero ${page.acf.banner.class_name }`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-auto">
              <div className="integration-hero__content hero-md__content">
                <h1 className="text-3 hero-md__title">
                {page.acf.banner.title}
                <span className="text-primary text-bold">{page.acf.banner.bold_title}</span>
                </h1>
                <span className="text-9 hero-md__text">
                {page.acf.banner.sub_title}
                </span>
                <p className="hero-md__info">
                {page.acf.banner.content}
                </p>
                  <BtnTrial/>
                  <BtnTour/>
              </div>
            </div>
            <div className="col-lg">
              <div className="integration-hero__img">
                <Lottie lottieItem={page.acf.banner.lottie} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- INTEGRATION SINGLE HERO ENDS --> */}
      {/* <!-- PHONE SYSTEM INTEGRATION STARTS --> */}
      <section className="integration-phone-system">
        <div className="container">
          <div className="heading heading--center">
            <h2 className="text-4 text-smbold">
            {page.acf.integration_phone_system.title}
            </h2>
          </div>
          <div className="row">
          {page.acf.integration_phone_system.icon_box.map((items,key) => {
              return (
                <div className="col-lg-4" key={key}>
                  <div className="card card-bordered">
                    <span className={`tag-icon ${items.icon_color_name}`}>
                      <img
                        src={items.icon.url}
                        alt={items.icon.alt}
                        title={items.icon.title}
                        width={items.icon.width}
                        height={items.icon.height}
                      />
                    </span>
                    <h6 className="card__title">{items.title}</h6>
                    <p className="card__desc">
                      {items.content}
                    </p>
                  </div>
                </div>
                );
            })}
          </div>
        </div>
      </section>
      {/* <!-- PHONE SYSTEM INTEGRATION ENDS --> */}
      {/* <!-- FEATURES STARTS --> */}
      <section className="integration-features">
        <div className="container">
          <div className="row flex-lg-row-reverse">
            <div className="col-lg-5">
              <div className="ordered-timeline">
                <h2 className="text-4 text-smbold text-900 mb-4">
                {page.acf.feature.title}
                </h2>
                <p className="text-10">
                {page.acf.feature.content}
                </p>
                <div className="ordered-timeline__list">
                  <figure>
                    <img
                      src={page.acf.feature.logo_timeline.url}
                      alt={page.acf.feature.logo_timeline.alt}
                      width={page.acf.feature.logo_timeline.width}
                      height={page.acf.feature.logo_timeline.height}
                      title={page.acf.feature.logo_timeline.title}
                    />
                  </figure>
                  <figure>
                    <img
                      src={krispcallTimeline}
                    />
                  </figure>
                  <ol>
                  {page.acf.feature.list.map((items,key) => {
                    return (
                        <li key={key}>
                          <h4 className="text-6 text-smbold">{items.title}</h4>
                          <p className="mb-0 text-500">
                            {items.content}
                          </p>
                          <div className="ordered-timeline__line"></div>
                        </li>
                        );
                    })}
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="c-wrap__img sticky">
                <div className="c-wrap__animation">
                  <div className="lottie text-center">
                    <Lottie lottieItem={page.acf.feature.lottie} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </IntegrationContainer>
  );
};

export default connect(IntegrationSlot);
const IntegrationContainer = styled.div(integrationCss);
