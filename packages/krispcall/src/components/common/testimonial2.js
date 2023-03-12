import React from 'react';
import {connect, styled} from 'frontity';
import slickCss from "slick-carousel/slick/slick.css"; 
import slickTheme from "slick-carousel/slick/slick-theme.css"; 
import Arrow from '../../assets/images/testimonial/arrow.svg';
import Quote from '../../assets/images/testimonial/quote.png';
// import IconPlay from '../../assets/images/home/icon-play.png';
import testimonialCss from "../../assets/css/testimonial.min.css";
import SlickCustomCss from '../../assets/css/slick-custom.min.css';
// import Slider from './carousel';
const SlickVendor = slickCss + slickTheme;

const Testimonials =  ({ state,  actions, libraries }) => {
    const items = state.source.get(`/components/testimonial/`).items;
    // const Html2React = libraries.html2react.Component;
    const getClient = async () => {
        const response = await libraries.source.api.get({
            endpoint: `/testimonials`,
        });
        const getData = await response.json();
        const getId = state.source.data[link];
        console.log('Testimonials getData is', getData);
        console.log('Testimonials getId link is', getId);
    }
    const response = await libraries.source.api.get({
        endpoint: `/testimonials`,
      });
    return (
        <Testimonial>
            <div className='container'>
                <div className="heading heading--center">
                    <h2 className="heading__title">
                        From Our <span>Customers</span>
                    </h2>
                    <p className="text-9">
                        A moment of truth. Let’s hear what our customer has to say regarding KrispCall’s & its
                        features/services.
                    </p>
                </div>
                <SlickContainer className='t-slide'>
                    <TestimonialContainer className='t-slide__slider'>
                        testimonial chek
                    {/* <Html2React html={items.content.rendered} /> */}
                        {/* {items.content.rendered} */}
                      
                            {/* {main_testimonial.map((items, key) => (  
                                <Slider/>

                            ))}   */}
                      
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

