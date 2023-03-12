import React, { useState} from "react";
import { connect, styled } from "frontity";
import tabCss from "../../../assets/css/tab.min.css";
import ScrollSpy from 'react-scrollspy-navigation';

const Policies = ({ state }) => {
    const data = state.source.get(state.router.link);
    const item = state.source[data.type][data.id];
   
    return(
      <PoliciesWrap>
        {/* <!-- HERO SECTION STARTS --> */}
        <section className="hero-sm hero-overlay">
          <div className="container">
            <div className="hero-sm__content text-center">
              <h1 className="text-3 text-regular">
              {item.acf.banner.title}
                <span className="text-bold text-primary">{item.acf.banner.title_bold}</span>
              </h1>
              <p className="text-9 text-md" dangerouslySetInnerHTML= {{__html:item.acf.banner.content}}/>
              <div className="btn-wrap">
                <div className="inner-page__date">
                  Last updated on
                  <span> {item.acf.banner.date_published} </span>
                </div>
                <a href="/src/assets/pdf/terms-of-use.pdf" className="btn btn-sm btn-secondary" download>
                  <span className="icon-left icon-download"></span>
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- HERO SECTION ENDS -->
        <!-- TERMS AND CONDITION STARTS --> */}
        <section className="inner-page terms-accordionTab tabs-vertical">
          <div className="offcanvas">
            <button type="button" className="close closebtn">
              <span aria-hidden="true">&times;</span>
            </button>
            <ul className="nav nav-pills tabs__nav">
            {/* {item.acf.info.map((data,key) => {
              return(
              <li className="nav-item" key={key}>
                <a className={`nav-link${ isOpen === key ? " active " : "" }`} href={`#${data.id}`} onClick={SwitchToggle}>{data.main_title}</a>
              </li>
              );})} */}
            </ul>
          </div>
          <div className="container">
            {/* <!-- Toggler button --> */}
            <div className="offcanvas__toggler d-lg-none sticky">
              <button className="btn btn-primary btn-sm btn-icon">
                <img src="/src/assets/images/svg/icons/icon-list-check.svg" className="mr-2" />
                Table of Content
              </button>
            </div>
            <div className="btn-wrap"></div>
            <div className="row">
              <div className="col-lg-3 inner-sideNav">
              <ul className="nav nav-pills tabs__nav gsap">
              <ScrollSpy>
                {item.acf.info.map((data,key) => {
                return(
                        <a className="nav-link" href={`#${data.id}`}  ref={React.createRef()}>{data.main_title}</a>
                );})}
                </ScrollSpy>
              </ul>
              </div>
              <div className="col-lg-9">
                <div className="tabs__content">
                    {item.acf.info.map((data,key) => {
                    return(
                        <div className="tabs__content-item" key={key}>
                        <h2 className="text-6" id={data.id}>{data.title}</h2>
                            <div dangerouslySetInnerHTML= {{__html:data.content}}/>
                        </div>
                    );})}
                    </div>
              </div>
            </div>
          </div>
        </section>
        {/* // <!-- TERMS AND CONDITION ENDS --> */}
      </PoliciesWrap>
    )
}

export default connect(Policies);
const PoliciesWrap = styled.div(tabCss);