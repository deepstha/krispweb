import React from 'react';
import {connect, styled} from 'frontity';
import company1 from '../../assets/images/rating/c1.png';
import company2 from '../../assets/images/rating/c2.png';
import company3 from '../../assets/images/rating/c3.png';
import company4 from '../../assets/images/rating/c4.png';
import company5 from '../../assets/images/rating/c5.png';
import company6 from '../../assets/images/rating/c6.png';
import star from '../../assets/images/svg/icons/icon-star.svg'
import reviewsCss from "../../assets/css/reviews.min.css";
const Reviews = () => {
    return (
        <Review className="reviews">
            <div className="container">
                <div className="heading heading--center">
                    <h2 className="text-3 heading__title">
                        As Rated by
                        <span>Users</span>
                    </h2>
                </div>
                <div className="card-grid">
                    <div className="card card-bordered">
                        <figure className="card__img">
                            <img src={company1} alt="Company-logo" width="41" height="40"/>
                        </figure>
                        <span className="text-11 text-bold">Capeterra</span>
                        <figure className="reviews__img">
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                        </figure>
                        <a className="text-small text-semibold text-underline" href="#">See reviews</a>
                    </div>
                    <div className="card card-bordered">
                        <figure className="card__img mx-diff">
                            <img 
                                src={company2} alt="Company-logo" width="41" height="40"/>
                        </figure>
                        <span className="text-11 text-bold">Growth</span>
                        <figure className="reviews__img">
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                        </figure>
                        <a className="text-small text-semibold text-underline" href="#">See reviews</a>
                    </div>
                    <div className="card card-bordered">
                        <figure className="card__img">
                            <img 
                                src={company3} alt="Company-logo" width="41" height="40"/>
                        </figure>
                        <span className="text-11 text-bold">Trustpilot</span>
                        <figure className="reviews__img">
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                        </figure>
                        <a className="text-small text-semibold text-underline" href="#">See reviews</a>
                    </div>
                    <div className="card card-bordered">
                        <figure className="card__img">
                            <img 
                                src={company4} alt="Company-logo" width="41" height="40"/>
                        </figure>
                        <span className="text-11 text-bold">Chrome Store</span>
                        <figure className="reviews__img">
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                        </figure>
                        <a className="text-small text-semibold text-underline" href="#">See reviews</a>
                    </div>
                    <div className="card card-bordered">
                        <figure className="card__img">
                            <img 
                                src={company5} alt="Company-logo" width="41" height="40"/>
                        </figure>
                        <span className="text-11 text-bold">GetApp</span>
                        <figure className="reviews__img">
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                        </figure>
                        <a className="text-small text-semibold text-underline" href="#">See reviews</a>
                    </div>
                    <div className="card card-bordered">
                        <figure className="card__img mx-diff">
                            <img 
                                src={company6} alt="Company-logo" width="41" height="40"/>
                        </figure>
                        <span className="text-11 text-bold">FinancesOnline</span>
                        <figure className="reviews__img">
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                            <img src={star} alt=""/>
                        </figure>
                        <a className="text-small text-semibold text-underline" href="#">See reviews</a>
                    </div>
                </div>
            </div>
        </Review>
)
}
export default connect(Reviews);
const Review = styled.div(reviewsCss);