import React from 'react';
import { connect, styled, css } from "frontity";
import Slider from 'react-slick';
import Arrow from '../../assets/images/testimonial/arrow.svg';
import Quote from '../../assets/images/testimonial/quote.png';

const Carousel = ({ items }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <BtnArrow
      {...props}
      className={"slick-arrow slick-prev " + (currentSlide === 0 ? " slick-disabled" : "")}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      Previous
    </BtnArrow>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <BtnArrow
      {...props}
      className={"slick-arrow slick-next" + (currentSlide === slideCount - 1 ? " slick-disabled" : "")}
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      Next
    </BtnArrow>
  );
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !1,
    infinite: !0,
    autoplay: !1,
    autoplaySpeed: 2e3,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    speed: 300,
    responsive: [
      { breakpoint: 992, settings: { dots: !0, arrows: !1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, dots: !0, arrows: !1 } },
      { breakpoint: 482, settings: { dots: !0, arrows: !1, slidesToShow: 1 } },
    ],
  };
  return (
    <Slider {...settings}>
      {items.map((item, key) => (
        <div className='t-slide__wrap' key={key}>
          <div className="row">
            <div className="col-lg-auto col-md-12">
              <div className="t-slide__video">
                <video id={'vid-' + key} width="750" height="500" preload="none" poster={item.image}>
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="t-slide__item">
                <h5 className="text-6 text-700">{item.title}</h5>
                <Blockquote className='text-9 t-slide__quote'>
                  {item.content}
                </Blockquote >
                {/* <p css={bckImg} className='text-9 t-slide__quote'>
                  {item.content}
                </p > */}
                <span className="t-slide__name text-6">{item.name}</span>
                <span className="t-slide__post block-relative">{item.designation}
                  <a href="https://timetracko.com" target="_blank"
                    rel="noopener noreferrer" className="stretched-link"></a>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )

}
export default connect(Carousel);
const BtnArrow = styled.button`
    &::before{
        content: "";
        background: url(${Arrow}) no-repeat center !important;
    }

`
const Blockquote = styled.p`
    &::before{
        content: "";
        background: url(${Quote}) no-repeat center !important;
    }

`

// const bckImg = css`
//   content: "";
//   color: red;
// `;

// // const BlockquoteWrap = {
// //   backgroundImage:   'url(${Quote})'
// // }

// const BlockquoteWrap = styled.p`
//   content: "";
//   border: 1px solid #000;
//   background-image: url(${Quote});
//   width: 2000px;
//   height: 2000px;
// `;
