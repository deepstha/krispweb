import React from "react";
import { connect, styled } from "frontity";
import downloadCss from "../../assets/css/download.min.css";
import googlePlay from "../../assets/images/downloads/google-play.svg";
import appStore from "../../assets/images/downloads/app-store.svg";
import qrCode from "../../assets/images/downloads/qr-code.png";
// import Lottie from 'react-lottie';
const Download = ({ state }) => {
    const data = state.source.get(state.router.link);
    const item = state.source[data.type][data.id];

    return(
        <DownloadWrap>
            {/* <!--PHONE NUMBER FEATURES SECTION STARTS--> */}
            <section className="hero-download hero-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-download__content">
                                <h1 className="text-3 text-regular">{item.acf.banner.title}
                                    <span className="text-primary text-bold">{item.acf.banner.title_bold}</span>
                                </h1>
                                <p dangerouslySetInnerHTML= {{__html:item.acf.banner.content}}/>
                                <ul className="options-wrap">
                                {item.acf.options.map((data,key) => {
                                    return(
                                    <li key={key}>
                                        <a href="#" className="i-block">
                                            <figure className="i-block__img">
                                                <img src={data.image.url} height={data.image.height} width={data.image.width} alt={data.image.alt}/>
                                            </figure>
                                            <div className="i-block__content">
                                                <span>{data.title}</span>
                                                <span>{data.info}</span>
                                            </div>
                                        </a>
                                    </li>
                                    );})}
                                </ul>
                                <div className="img-flex">
                                    <span className="text-11 d-block">Extension available on all Major Browsers</span>
                                    <ul>
                                    {item.acf.browsers.map((data,key) => {
                                    return(
                                        <li key={key}><a href={data.link}><figure><img src={data.image.url} height={data.image.height} width={data.image.width} alt={data.image.alt}/></figure></a></li>
                                        );})}
                                    </ul>
                                </div>
                                <div className="btn-wrap">
                                    <div>
                                        <a href="#" className="btn btn-black">
                                            <figure>
                                                <img src={googlePlay} height="34" width="146" alt=""/>
                                            </figure>
                                        </a>
                                        <div className="i-block triangle">
                                            <figure className="i-block__img mb-0">
                                                <img src={qrCode} height="50" width="50" alt=""/>
                                            </figure>
                                            <div className="i-block__content">
                                                <span>Scan QR code to download the Android app</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="#" className="btn btn-black">
                                            <figure>
                                                <img src={appStore} height="32" width="136" alt=""/>
                                            </figure>
                                        </a>
                                        <div className="i-block triangle">
                                            <figure className="i-block__img mb-0">
                                                <img src={qrCode} height="50" width="50" alt=""/>
                                            </figure>
                                            <div className="i-block__content">
                                                <span>Scan QR code to download the Android app</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-download__img block-relative">
                                <picture className="main-image">
                                    <img src={item.acf.banner.image.url} width={item.acf.banner.image.width}
                                        height={item.acf.banner.image.height} alt={item.acf.banner.image.alt}
                                        Title={item.acf.banner.image.title} />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </DownloadWrap>
    )
}

export default connect(Download);
const DownloadWrap = styled.div(downloadCss);