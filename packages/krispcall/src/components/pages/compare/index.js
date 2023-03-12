import React , { useState}from "react";
import compareCss from "../../../assets/css/compare.min.css";
import { connect, styled } from "frontity";
import { BtnTrial, BtnTour} from '../../common/button';
import comparemobile from '../../../assets/images/compare/compare-mobile.png';
import krispcallphone from '../../../assets/images/compare/krispcall-pricing.png';
import Faq from './faq';

const Alternative = ({ state }) => {
    const data = state.source.get(state.router.link);
    const item = state.source[data.type][data.id];
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const SwitchToggle = () => {
        toggleSwitch ? setToggleSwitch(false) : setToggleSwitch(true);
        // console.log(toggleSwitch);
    };
    return(
        <>
        <Compare>
            {/* <!-- HERO SECTION STARTS --> */}
            <section className="hero-sm hero-overlay hero-compare">
                <div className="container">
                <div className="hero-sm__content text-center">
                    <h1 className="text-3 text-regular">
                    {item.acf.banner.title}
                    <span className="text-bold text-primary">{item.acf.banner.bold_title}</span>
                    </h1>
                    <p className="text-9 text-md">
                    {item.acf.banner.sub_title}
                    </p>
                    <BtnTrial/>
                    <BtnTour/>
                </div>
                </div>
            </section>
            {/* <!-- HERO SECTION ENDS --> */}
            {/* <!-- WHY CallPage SECTION START --> */}
            <div className="text-box">
                <div className="container">
                <div className="text-box__wrap text-box--bg">
                    <h2 className="text-box__title text-4">
                    {item.acf.why_section.title}
                    </h2>
                    <div dangerouslySetInnerHTML= {{__html: item.acf.why_section.content}}/>
                </div>
                </div>
            </div>
            {/* <!-- WHY CallPage SECTION ENDS --> */}
            {/* <!-- ABOUT CallPage SECTION STARTS --> */}
            <div className="about-CallPage compare__wrapper">
                <div className="container">
                <div className="c-wrap">
                    <div className="row flex-lg-row-reverse align-items-center">
                    <div className="col-lg-7">
                        <div className="c-wrap__content">
                        <div className="c-wrap__top">
                        <h3 className="c-wrap__title text-6">{item.acf.about_section.title}</h3>
                        <div dangerouslySetInnerHTML= {{__html: item.acf.about_section.content}}/>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="c-wrap__imgWrap sticky">
                        <figure>
                            <img
                            className="c-wrap__img"
                            src={item.acf.about_section.image.url}
                            alt={item.acf.about_section.image.alt}
                            title={item.acf.about_section.image.title}
                            width={item.acf.about_section.image.width}
                            height={item.acf.about_section.image.height}
                            />
                        </figure>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <div className="text-box__wrap compare__wrap">
                        <div className="c-wrap__content">
                            <div className="c-wrap__top">
                            <h3 className="c-wrap__title text-4">
                            {item.acf.ideal_section.title}
                            </h3>
                            <div dangerouslySetInnerHTML= {{__html: item.acf.ideal_section.content}}/>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row flex-lg-row-reverse">
                    <div className="col-lg-7">
                        <div className="c-wrap__content">
                        <div className="c-wrap__bottom">
                            <h3 className="c-wrap__title text-6">
                            {item.acf.prices_plans.title}
                            </h3>
                            <p>{item.acf.prices_plans.content}</p>
                            <figure className="m-0">
                            <img
                                className="lozad"
                                src={krispcallphone}
                                width="716"
                                height="655"
                                alt="KripsCall prices & plans"
                            />
                            </figure>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="c-wrap__imgWrap sticky">
                        <figure className="m-0">
                            <img
                            className="c-wrap__img lozad"
                            src={comparemobile}
                            width="399"
                            height="690"
                            alt="CallPage to KrispCall ideal Alternative"
                            />
                        </figure>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="heading heading--center">
                        <h2 className="heading__title text-4">
                        <span
                            >Here are the main reason of customer are switching
                            to</span
                        >
                        KrispCall.
                        </h2>
                    </div>
                    </div>
                    {item.acf.reason_section.map((datas,key) => {
                            return (
                            <div className={datas.section_name} key={key}>
                                <div className="col-lg-5">
                                    <div className="c-wrap__content">
                                    <h3 className="text-6 c-wrap__title">
                                        {datas.title}
                                    </h3>
                                    <dl>
                                    {datas.list.map((info,index) => {
                                        return(
                                            <React.Fragment key={index}> 
                                            <dt>{info.title}</dt>
                                            <dd>{info.content}</dd>
                                            </React.Fragment>  
                                            );
                                        })
                                    }
                                    </dl>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="c-wrap__img">
                                    <figure className="m-0">
                                        <img
                                        className="lozad"
                                        src={datas.image.url}
                                        alt={datas.image.alt}
                                        title={datas.image.title}
                                        width={datas.image.width}
                                        height={datas.image.height}
                                        />
                                    </figure>
                                    </div>
                                </div> 
                            </div>
                            );})}
                </div>
                <div className="text-box">
                    <div className="text-box__wrap">
                    <h2 className="text-box__title text-4">
                        Why Customer Switch to
                        <span>KrispCall</span>?
                    </h2>
                    <div dangerouslySetInnerHTML= {{__html: item.acf.why_krispcall}}/>
                    </div>
                </div>
                </div>
            </div>
            {/* <!-- ABOUT CallPage SECTION ENDS --> */}
            {/* <!-- COMPARISION TABLE STARTS--> */}
           
            <section className={`comparison block-relative ${ toggleSwitch ? "full-height" : "" }`}>
            {item.acf.comparision_table.title.first_part ? 
                <div className="container">
                <div className="heading heading--center">
                    <h2 className="text-4">
                    {item.acf.comparision_table.title.first_part}
                    <span className="text-p500">{item.acf.comparision_table.title.second_part}</span>
                    </h2>
                </div>
                <div className="comparison__table">
                    {item.acf.comparision_table ? 
                        <table>
                        <tbody>
                            <tr className="product-img-row">
                            <th></th>
                            <td>
                                <figure className="mb-0">
                                <img
                                    src={item.acf.comparision_table.first_logo.url}
                                    width={item.acf.comparision_table.first_logo.width}
                                    height={item.acf.comparision_table.first_logo.height}
                                    alt={item.acf.comparision_table.first_logo.alt}
                                    title={item.acf.comparision_table.first_logo.title}
                                />
                                </figure>
                            </td>
                            <td>
                                <figure className="mb-0">
                                <img
                                    src={item.acf.comparision_table.second_logo.url}
                                    width={item.acf.comparision_table.second_logo.width}
                                    height={item.acf.comparision_table.second_logo.height}
                                    alt={item.acf.comparision_table.second_logo.alt}
                                />
                                </figure>
                            </td>
                            </tr>
                            {item.acf.comparision_table.table_row ?
                                item.acf.comparision_table.table_row.map((datas,key) => {
                                    return (
                                    <React.Fragment key={key}> 
                                    <tr className="bb-0">
                                        <th>{datas.main_title} </th>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    {datas.sub_row?.map((info,index) => {
                                        return (
                                        <tr className="checklist-row" key={index}>
                                            <th>{info.title}</th>
                                            <td>
                                                {info.first_image ? <img src={info.first_image.url} alt={info.first_image.alt} title={info.first_image.title} width={info.first_image.width} height={info.first_image.height}/> : info.first_content }
                                            </td>
                                            <td>
                                                {info.second_image ? <img src={info.second_image.url} alt={info.second_image.url} title={info.second_image.title} width={info.second_image.width} height={info.second_image.height} /> : info.second_content }
                                            </td>
                                        </tr>
                                        )
                                    })}
                                    </React.Fragment>
                                    );
                                    })
                                
                                : ""}
                            <tr></tr>
                        </tbody>
                        </table>
                        : ""
                    }
                </div>
                <div className="see-less__trigger d-flex align-items-end justify-content-center">
                    <button onClick={SwitchToggle} className={`btn btn-outline-primary ${ toggleSwitch ? '' : 'd-none'}`}>See Less Comparison</button>
                </div>
                <div className="see-more__trigger d-flex align-items-end justify-content-center">
                    <button onClick={SwitchToggle} className={`btn btn-outline-primary ${ toggleSwitch ? 'd-none' : ''}`}>See Full Comparison</button>
                </div>
                </div>
                : ""}
            </section>
            
            {/* <!-- COMPARISION TABLE ENDS--> */}
            {/* <!--FAQ SECTION STARTS--> */}
            <section className="faq faq-compare" id="faq">
            <div className="container">
            <div className="row">
                <div className="col-lg-5">
                <div className="heading sticky">
                    <div className="heading__title text-4">
                    Frequently Asked Questions
                    </div>
                    <p>
                    Didn’t find the Answer you were looking for? Visit our
                    <a href="#">Help Center</a>
                    or
                    <a href="/contact-us">Contact Support</a>
                    </p>
                </div>
                </div>
                <div className="col-lg-7">
                <Faq></Faq>
                </div>
            </div>
            </div>
            </section>
            {/* <!--FAQ SECTION ENDS--> */}
        </Compare>
        </>
    )
}

export default connect(Alternative);
const Compare = styled.div(compareCss);