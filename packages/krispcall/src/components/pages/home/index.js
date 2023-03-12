import React, { useEffect, useState, lazy } from "react";
import { connect, styled, loadable } from "frontity";
import HomeCss from "../../../assets/css/home.min.css"
import { BtnTrial, BtnTour, BtnTertiary, BtnPrimary } from '../../common/button'; 
// import Loading from "../../loading";
// import Lottie from "../../common/lottie";
import Loader from "../../common/loader";
import Brandslider from '../../common/brandSlider';
import BtmIndex from "./btmIndex";
import useInView from "@frontity/hooks/use-in-view";
//import Image from "@frontity/components/image";

const Lottie = loadable(() => import("../../common/lottie"));
const HomePage = ({ state, actions}) => {
    const data = state.source.get(state.router.link);
    const item = state.source[data.type][data.id];
    // Get the reference and the visibility status.
    const { ref, inView } = useInView({ triggerOnce: true, delay: 200 });
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
        //   setView(true);
          setLoading(false);
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
      }, []);
  // Load only if the data is ready.
  return data.isReady ? ( 
    console.log('home retun',item ) ,
    <HomeWrapper>
        <section className="hero-panel hero-home overflow props">
            <div className="container">
                <div className="d-flex hero-panel__section flex-column">
                    <div className="hero-panel__content block__center block__center--max855">
                    {/* <Html2React html={item.content.rendered} /> */}
                        <h1 className="text-2 text-normal text-primary">
                            {item.acf.banner.first_title}
                            <span className="text-primary text-bold"> {item.acf.banner.bold_text} </span>
                            {item.acf.banner.last_title}  
                        </h1>
                        <p>
                            {item.acf.banner.banner_text}
                        </p>
                        <BtnTrial/>
                        <BtnTour/>
                    </div>
                    <div className="hero-panel__img img__wrap--contain props">
                        <div className="block-relative d-inline-block">
                            <figure className="z-index border-r-15 img-main">
                                <img src={item.acf.banner.image.url} alt={item.acf.banner.image.alt} title={item.acf.banner.image.title}
                                    width={item.acf.banner.image.width} height={item.acf.banner.image.height}/>
                            </figure>
                            <div className="props-area">
                                <div className="props-4">
                                    {!isLoading && <Lottie lottieItem={item.acf.banner.banner_lottie}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* <Brandslider></Brandslider> */}
        </section>
        {!isLoading &&  <div ref={ref}>{inView ? <BtmIndex item={item}/> : <Preloaded/>}</div>}
    </HomeWrapper>
  ) : <Loader/>;
};

export default connect(HomePage);
const HomeWrapper  = styled.div(HomeCss)
const Preloaded = styled.div`
    background-color: #10003A;
    min-height: 200px;
    display: block;
`
const HeroLoader = styled.div`
    min-height: 1500px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
)

`
