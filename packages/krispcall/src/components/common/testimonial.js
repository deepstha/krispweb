import React from 'react';
import {connect, styled} from 'frontity';
import slickCss from "slick-carousel/slick/slick.css"; 
import slickTheme from "slick-carousel/slick/slick-theme.css"; 
import Slider from "./carousel";
import Arrow from '../../assets/images/testimonial/arrow.svg';
import Quote from '../../assets/images/testimonial/quote.png';
// import IconPlay from '../../assets/images/home/icon-play.png';
import testimonialCss from "../../assets/css/testimonial.min.css";
import SlickCustomCss from '../../assets/css/slick-custom.min.css'
const SlickVendor = slickCss + slickTheme;
const Testimonials =  ({ state }) => {
    const items = state.source.get(`/components/testimonial/`).items;
    const { main_testimonial } = items.acf;
    return (
        <Testimonial>
            <div className='container'>
                <div className="heading heading--center">
                    <h2 className="heading__title">
                        From Our
                        <span>
                            Customers
                        </span>
                    </h2>
                    <p className="text-9">
                        A moment of truth. Let’s hear what our customer has to say regarding KrispCall’s & its
                        features/services.
                    </p>
                </div>
                <SlickContainer className='t-slide'>
                    <TestimonialContainer className='t-slide__slider'>
                        <Slider items={main_testimonial}>
                        </Slider>
                    </TestimonialContainer>
                </SlickContainer>
            </div>
        </Testimonial>
    )
}
export default connect(Testimonials);
const Testimonial = styled.section(testimonialCss);
const SlickContainer = styled.div(SlickVendor);
const TestimonialContainer = styled.div(SlickCustomCss)
const BtnArrow = styled.button`
    &:before{
        content: "";
        background: url(${Arrow}) no-repeat center !important;
    }

`
const Blockquote = styled.p`
    &:before{
        content: "";
        background: url(${Quote}) no-repeat center !important;
    }

`
