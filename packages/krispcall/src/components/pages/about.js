import React from "react";
import { connect, styled } from "frontity";
import Lottie from "../common/lottie";
import { BtnPrimary } from '../common/button';
import aboutCss from "../../assets/css/about.min.css"
const About = ({ state }) => {
    const data = state.source.get(state.router.link);
    const item = state.source[data.type][data.id];
    return(
        <AboutSection>
            <section className="hero-about hero-md bg-lt-gray overflow">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-auto">
                        <div className="hero-about__content hero-md__content">
                            <span className="tag tag--no-bg">{item.acf.banner.tag}</span>
                            <h1 className="text-3 hero-md__title">
                                {item.acf.banner.first_title}
                                <span className="text-primary text-bold"> {item.acf.banner.bold_text} </span>
                                {item.acf.banner.last_title}
                            </h1>
                            <p className="hero-md__info">
                                {item.acf.banner.content}
                            </p>
                        </div>
                        </div>
                        <div className="col-lg">
                        <div className="hero-about__img" id="heroAbout">
                        <Lottie lottieItem={item.acf.banner.lottie} />
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about p-0">
                <div className="two-col">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 col-xl">
                        <figure className="two-col__img mb-0">
                            <div className="lottie" id="whoWeAre">
                            <Lottie lottieItem={item.acf.our_story.lottie} />
                            </div>
                        </figure>
                    </div>
                    <div className="col-lg-6 col-xl-auto">
                        <div className="two-col__content">
                            <span className="tag tag--no-bg">{item.acf.our_story.sub_title}</span>
                            <h2 className="text-4 text-smbold text-900">{item.acf.our_story.title}</h2>
                            <div dangerouslySetInnerHTML= {{__html: item.acf.our_story.content}}/>
                            <BtnPrimary addClass="btn-sm" link={item.acf.our_story.btn_link}>Contact us</BtnPrimary>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="two-col bg-lt-gray">
                <div className="container">
                    <div className="row align-items-center flex-lg-row-reverse">
                    <div className="col-lg-6 col-xl">
                        <figure className="two-col__img">
                        <div className="lottie" id="whatAreWeUpto">
                            <Lottie lottieItem={item.acf.our_mission.lottie} />
                        </div>
                        </figure>
                    </div>
                    <div className="col-lg-6 col-xl-auto">
                        <div className="two-col__content">
                        <span className="tag tag--no-bg">{item.acf.our_mission.sub_title}</span>
                        <h2 className="text-4 text-smbold text-900">
                        {item.acf.our_mission.title}
                        </h2>
                        <p className="two-col__desc">
                            {item.acf.our_mission.content}
                        </p>
                        {
                        item.acf.our_mission.list_content.map((datas,key) => {
                            return (
                                <dl className="mb-0" key={key}>
                                    <dt>
                                        {datas.title}
                                    </dt>
                                    <dd>
                                    {datas.content}
                                    </dd>
                                </dl>
                                );
                            })
                        }
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="two-col">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 col-xl">
                        <figure className="two-col__img text-center">
                        <div className="lottie" id="coreValues">
                            <Lottie lottieItem={item.acf.core_values.lottie} />
                        </div>
                        </figure>
                    </div>
                    <div className="col-lg-6 col-xl-auto">
                        <div className="two-col__content">
                        <span className="tag tag--no-bg">{item.acf.core_values.sub_title}</span>
                        <h2 className="text-4 text-smbold text-900">
                        {item.acf.core_values.title}
                        </h2>
                        <p className="two-col__desc">
                        {item.acf.core_values.content}
                        </p>
                        {
                        item.acf.core_values.list_content.map((datas,key) => {
                            return (
                                <dl className="mb-0" key={key}>
                                    <dt>
                                        {datas.title}
                                    </dt>
                                    <dd>
                                    {datas.content}
                                    </dd>
                                </dl>
                                );
                            })
                        }
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </AboutSection>
    )
}

export default connect(About);
const AboutSection = styled.div(aboutCss);
