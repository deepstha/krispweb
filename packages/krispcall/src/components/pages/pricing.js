import React, { useState} from "react";
import { connect, styled } from "frontity";
import pricingCss from "../../assets/css/pricing.min.css";
import AccordionItem from "../common/accordion";
import { BtnSecondary } from '../common/button';
const pricing = ({ state }) => {
  const data = state.source.get(state.router.link);
  const item = state.source[data.type][data.id];
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const SwitchToggle = () => {
      toggleSwitch ? setToggleSwitch(false) : setToggleSwitch(true);
    //   console.log(toggleSwitch);
  };
  const [activetab, setActivetab] = useState('pricing-basic-tab');
  return (

    <PricingSection>
        {/* <!-- HERO SECTION STARTS --> */}
        <section className="hero-panel props pricing-hero">
            <div className="container">
                <div className="d-flex hero-panel__section flex-column">
                    <div className="hero-panel__content block__center block__center--max855">
                        <h1>
                            {item.acf.banner.title_first} 
                                <span className="text-bold text-primary"> {item.acf.banner.title_bold} </span>
                                {item.acf.banner.title_second}
                        </h1>
                        <p>
                        {item.acf.banner.content}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- HERO SECTION ENDS --> */}

        {/* <!-- PRICE SECTION --> */}
        
        <section className={`pricing ${ toggleSwitch ? "full-height" : "" }`}>
            <div className="container">
                <table className="pricing__table d-lg-block d-none">
                    <tbody>
                        <tr className="pricing__table-head">
                            <td className="corner-left"></td>
                            {item.acf.table_head.head_info?.map((info,key) => {
                                return(
                                    <td className={info.td_class} key={key}>
                                        <h5 className="text-7 text-smbold">{info.title}</h5>
                                        <small className="text-small">{info.content}</small>
                                        {info.tag ? <span className="tag-ribbon text-bold">{info.tag }</span> : "" }
                                    </td>
                                )
                            })
                            }
                        </tr>
                        <tr>
                            <td className="corner-left"></td>
                            {item.acf.table_head.pricing_data.map((info,key) => {
                                return(
                                    <td className={info.td_class} key={key}>
                                        <div className="price-block">
                                            <h2 className="text-2 text-bold">
                                                <span>{info.price_sign}</span>
                                                <span className="price-basic">{info.price} </span>
                                            </h2>
                                        </div>
                                        <h5 className="text-10 price-plan">{info.price_plan} </h5>
                                        <div className="btn-wrapper">
                                            <BtnSecondary link={info.link} target="_blank" rel="noopener noreferrer">{info.button_label}</BtnSecondary>
                                        </div>
                                    </td>
                                    )
                                })
                            }
                        </tr>
                        
                        {item.acf.table_row.data_row.map((info,index) => {
                                return(
                                    <React.Fragment key={index}>
                                    {info.table_row.map((datas,key) => {
                                        return(
                                            <React.Fragment key={key}>
                                                <tr className="data-row">
                                                    <td className="pb-0"><h6 className="text-9 text-bold m-0">{datas.main_title}</h6></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr> 
                                                <tr className="data-row  border-bottom">
                                                    <td>
                                                        <ul className="pl-0"> 
                                                        {datas.subtitle?.map((data,index) => {
                                                            return (
                                                            <li className="text-md" key={index}>
                                                                {data.subtitle}
                                                            </li>
                                                        )
                                                    })
                                                }
                                                        
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <ul className="pl-0">
                                                            {datas.first_col?.map((data,index) => {
                                                                return(
                                                                <li key={index}>
                                                                    {data.content_image.url ? <img src={data.content_image.url} alt={data.content_image.alt} title={data.content_image.title} height={data.content_image.height} width={data.content_image.width}/> : data.content }
                                                                </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <ul className="pl-0">
                                                            {datas.second_col?.map((data,index) => {
                                                                return(
                                                                <li key={index}>
                                                                    {data.content_image.url ? <img src={data.content_image.url} alt={data.content_image.alt} title={data.content_image.title} height={data.content_image.height} width={data.content_image.width}/> : data.content }
                                                                </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        <ul className="pl-0">
                                                            {datas.third_col?.map((data,index) => {
                                                                return(
                                                                <li key={index}>
                                                                    {data.content_image.url ? <img src={data.content_image.url} alt={data.content_image.alt} title={data.content_image.title} height={data.content_image.height} width={data.content_image.width}/> : data.content }
                                                                </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </React.Fragment>  
                                            )
                                            })
                                        }
                                    </React.Fragment>  
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="pricing__sm d-block d-lg-none">
                    <div className="mb-3">
                    <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a id="pricing-basic"  className={`text-5 text-center nav-link ${activetab == 'pricing-basic-tab' ? 'active' : ''}`} onClick={() => setActivetab('pricing-basic-tab')}>
                                Essential
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a id="pricing-pro" className={`text-5 text-center nav-link ${activetab == 'pricing-pro-tab' ? 'active' : ''}`} onClick={() => setActivetab('pricing-pro-tab')}>
                                Standard
                            </a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a id="pricing-advanced" className={`text-5 text-center nav-link ${activetab == 'pricing-advanced-tab' ? 'active' : ''}`} onClick={() => setActivetab('pricing-advanced-tab')}>
                                Enterprise
                            </a>
                        </li>
                    </ul>
                    
                    <div className="container">
                        <div className="tab-content" id="pills-tabContent" activetab={activetab}>
                            <div className={`tab-pane fade ${activetab == 'pricing-basic-tab' ? 'show active' : ''}`} id="pricing-basic-tab" eventkey="pricing-basic-tab">
                                <div className="pricing__sm-info">
                                    <div className="row justify-content-between">
                                        <div className="col-sm-6 col-8">
                                            <h5 className="text-5 text-smbold">Essential</h5>
                                            <h6 className="text-10">Recommended for Small Businesses, Startups & Freelancers</h6>
                                        </div>
                                        <div className="col-sm-6 col-4 text-right">
                                            <div className="price-block">
                                                <h2 className="text-2 text-bold d-flex justify-content-end">
                                                    <span>$</span>
                                                    <span className="price-basic">15</span>
                                                </h2>
                                            </div>
                                            <h5 className="text-10">Monthly / User</h5>
                                        </div>
                                    </div>
                                    <a className="btn btn-secondary" href="https://app.krispcall.com/login" target="_blank" rel="noopener noreferrer">Get started</a>
                                </div>
                                {item.acf.table_row.data_row.map((info,index) => {
                                return(
                                    <React.Fragment key={index}>
                                    {info.table_row.map((datas,key) => {
                                        return(
                                            <React.Fragment key={key}>
                                <h6 className="text-9 text-bold mb-3">{datas.main_title}</h6>
                                <table className="pricing__table__responsive">
                                    <tbody>
                                <tr>
                                    <td>
                                        <table>
                                            <tbody>
                                    {datas.subtitle?.map((data,index) => {
                                        return (
                                                <tr key={index}>
                                                    <td className="text-md">
                                                    {data.subtitle}
                                                    </td>
                                                </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </table>
                                            </td>
                                            <td>
                                            <table>
                                            <tbody>
                                            {datas.first_col?.map((data,key) => {
                                                return(
                                                    <tr key={key}>
                                                    <td className="text-right text-md">
                                                    {data.content_image ? <img src={data.content_image.url}  alt={data.content_image.alt} title={data.content_image.title} height={data.content_image.height} width={data.content_image.width}/> : data.content }
                                                    </td>
                                                    </tr>
                                                )})}
                                            </tbody>
                                        </table>
                                            </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </React.Fragment>
                                                )
                                            })
                                        }
                                    </React.Fragment>
                                )
                            })
                        }
                            </div>
                            <div className={`tab-pane fade ${activetab == 'pricing-pro-tab' ? 'show active' : ''}`} id="pricing-pro-tab" eventkey="pricing-pro-tab">
                                <div className="pricing__sm-info">
                                    <div className="row justify-content-between">
                                        <div className="col-sm-6 col-8">
                                            <h5 className="text-5 text-smbold">Standard</h5>
                                            <h6 className="text-10">Recommended for Mid-size Businesses</h6>
                                        </div>
                                        <div className="col-sm-6 col-4 text-right">
                                            <div className="price-block">
                                                <h2 className="text-2 text-bold d-flex justify-content-end">
                                                    <span>$</span>
                                                    <span className="price-professional">40</span>
                                                </h2>
                                            </div>
                                            <h5 className="text-10">Monthly / User</h5>
                                            <span className="text-11 my-2 tag">Popular</span>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary" href="https://app.krispcall.com/login" target="_blank" rel="noopener noreferrer">Get started</a>
                                </div>
                                {item.acf.table_row.data_row.map((info,index) => {
                                return(
                                    <React.Fragment key={index}>
                                    {info.table_row.map((datas,key) => {
                                        return(
                                            <React.Fragment key={key}>
                                <h6 className="text-9 text-bold mb-3">{datas.main_title}</h6>
                                <table className="pricing__table__responsive">
                                <tbody>
                                <tr>
                                    <td>
                                    <table>
                                            <tbody>
                                    {datas.subtitle?.map((data,index) => {
                                        return (
                                            <tr key={index}>
                                            <td className="text-md">
                                            {data.subtitle}
                                            </td>
                                            </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                            </table>
                                            </td>
                                            <td>
                                            <table>
                                            <tbody>
                                            {datas.second_col?.map((data,key) => {
                                                            return(
                                                                <tr key={key}>
                                                                <td className="text-right text-md">
                                                                {data.content_image ? <img src={data.content_image.url} alt={data.content_image.alt} title={data.content_image.title} height={data.content_image.height} width={data.content_image.width}/> : data.content }
                                                                </td>
                                                                </tr>
                                            )})}
                                            </tbody>
                                            </table>
                                            </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </React.Fragment>
                                                )
                                            })
                                        }
                                    </React.Fragment>
                                )
                            })
                        }
                            </div>
                            <div className={`tab-pane fade ${activetab == 'pricing-advanced-tab' ? 'show active' : ''}`} id="pricing-advanced-tab" eventkey="pricing-advanced-tab">
                                <div className="pricing__sm-info">
                                    <div className="row justify-content-between">
                                        <div className="col-6">
                                            <h5 className="text-5 text-smbold">Enterprise
                                            </h5>
                                            <h6 className="text-10">Recommended for Large Enterprises
                                            </h6>
                                        </div>
                                        <div className="col-6 text-right">
                                            <div className="price-block">
                                                <h2 className="text-8 text-bold my-2">
                                                    Customized Solution
                                                </h2>
                                            </div>
                                            <h5 className="text-10">Contact us to learn more!
                                            </h5>
                                        </div>
                                    </div>
                                    <a className="btn btn-secondary" href="https://app.krispcall.com/login" target="_blank" rel="noopener noreferrer">Get started</a>
                                </div>
                                {item.acf.table_row.data_row.map((info,index) => {
                                return(
                                    <React.Fragment key={index}>
                                    {info.table_row.map((datas,key) => {
                                        return(
                                            <React.Fragment key={key}>
                                <h6 className="text-9 text-bold mb-3">{datas.main_title + key}</h6>
                                <table className="pricing__table__responsive">
                                    <tbody>
                                <tr>
                                    <td>
                                    <table>
                                            <tbody>
                                    {datas.subtitle?.map((data,index) => {
                                        return (
                                            <tr key={index}>
                                            <td className="text-md">
                                            {data.subtitle}
                                            </td>
                                            </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                            </table>
                                            </td>
                                            <td>
                                            <table>
                                            <tbody>
                                            {datas.third_col?.map((data,index) => {
                                                            return(
                                                                <tr key={index}>
                                                                <td className="text-right text-md">
                                                                {data.content_image ? <img src={data.content_image.url}  alt={data.content_image.alt} title={data.content_image.title} height={data.content_image.height} width={data.content_image.width}/> : data.content }
                                                                </td>
                                                                </tr>
                                            )})}
                                            </tbody>
                                            </table>
                                            </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </React.Fragment>
                                                )
                                            })
                                        }
                                    </React.Fragment>
                                )
                            })
                        }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="my-3">
                    <span className="d-block text-11">* Fair Usage Policy is applicable on all Unlimited Plans.</span>
                    <span className="d-block text-11">** Coming Soon.</span>
                </div>
                <div className="see-less__trigger d-flex align-items-end justify-content-center">
                    <button onClick={SwitchToggle} className={`btn btn-outline-primary ${ toggleSwitch ? '' : 'd-none'}`}>See Less Comparison</button>
                </div>
                <div className="see-more__trigger d-flex align-items-end justify-content-center">
                    <button onClick={SwitchToggle} className={`btn btn-outline-primary ${ toggleSwitch ? 'd-none' : ''}`}>See Full Comparison</button>
                </div>
            </div>
        </section>
        <section className="faq faq-pricing" id="faq">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="heading sticky">
                            <div className="heading__title text-4">
                                Frequently Asked Questions
                            </div>
                            <p>Didn’t find the Answer you were looking for? Visit our
                                <a href="#">Help Center</a>
                                or
                                <a href="/contact-us">Contact Support</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="accordion accordion--bordered" id="accordion-faq">

                            <AccordionItem accordion_modifier="accordion--bordered" 
                                            itemClass="accordion-item" 
                                            itemHeaderClass="accordion-item__header"
                                            items={item.acf.faq} />
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </PricingSection>
    );
};

export default connect(pricing);
const PricingSection = styled.div(pricingCss);