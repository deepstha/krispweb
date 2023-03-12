import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import AccordionItem from '../common/accordion';
import iconPhone from '../../assets/images/footer/icon-phone-sm.svg'

const FootNav = ({ state }) => {
  const items = state.source.get(`/menu/intl-menu/`).items;
  const SelectCntry = ['US', 'UK', 'Australia', 'Canada', 'France', 'Singapore'];
  const matches = (items, ids) => ids.flatMap (
    id => items.filter (({post_title}) => post_title.startsWith (id))
  )
  const SelectedCntry = matches(items, SelectCntry)
  const allCntry = 
    <NavContainer className="cc-list">
      {items.map((intl, key) => {
        const title = intl.title.split(" ")[0];
        return(
          <NavItem key={key}>
            <Link link={'#internationl-num'}>
            <img
                src={intl.acf.logo.url}
                alt={title}
                title={title}
                width="16"
                height="16"
              />
              {intl.title}</Link>
          </NavItem>
        )
      })}
    </NavContainer>
  //Filter for exact figure
  // const SelectCntry = ['Germany Phone Number', 'Canada Phone Number'];
  // const FilterSelectCntry = items.filter(f => SelectCntry.includes(f.title))
  // console.log('FilterSelectCntry ITEMS:',FilterSelectCntry)
  return (
    <>
    <div className="footer-intl-num">
      <div  className="container">
        <h6>Get International Numbers</h6>
        <div className="row no-gutters list-hz">
          {SelectedCntry.map((f, k) => {
            if(f.title !== "Singapore Phone Number"){
              return(
                <div className="col-sm-6 col-md-4 col-lg" key={k}>
                  <div className="cc-block">
                    <div className="cc-block__img-wrap">
                      <figure className="cc-block__img">
                        <img
                          src={f.acf.logo.url}
                          alt="United States"
                          width="52"
                          height="52"
                        />
                      </figure>
                      <span className="cc-block__num">+1</span>
                    </div>
                    <a href="#international-num" className="cc-block__text">
                      {f.post_title}
                    </a>
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div className="row list-vt no-gutters">
          <AccordionItem 
            itemHeaderClass="accordion-header" 
            itemBodyClass="accordion-content"
            slotHead={    
            <>
              <h6 className="text-10">More Numbers</h6>
              <span className="icon icon-toggle"></span>
            </>
            }
            slotContent={allCntry}
          />
        </div>
      </div>
    </div>
    <div className="footer-country-num">
      <div  className="container">
        <div className="row row-auto">
          {SelectedCntry.map((c, k) => {
            if(c.title !== "Singapore Phone Number"){
              const title = c.title.split(" ")[0];
              return(
                <div className="col-6 col-sm-4 col-lg-auto" key={k}>
                  <div className="pn-block">
                    <span className="pn-block__title text-md text-11">{title}</span>
                    <Link link={'#internationl-num'}>
                      <span>
                        <img
                          src={iconPhone}
                          alt={title}
                          title={title}
                          width="16"
                          height="16"
                        />
                      </span>
                      {c.title}
                    </Link>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default connect(FootNav);
const NavContainer = styled.ul`
  list-style: none;
  display: block;
`;

const NavItem = styled.li`
  padding: 0;
  a {
    padding: 0;
  }
`
