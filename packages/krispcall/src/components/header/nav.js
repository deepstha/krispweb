import React, {Fragment, useState } from 'react';
import { connect, styled } from "frontity";
import Link from "../link";
import Logo from "../../assets/images/logo.png";


/**
 * Two level menu (with one level of child menus)
 */
const Nav = ({ state }) => {
  const items = state.source.get(`/menu/nav-menu/`).items;
  // console.log('ITEMS:',items)
  return (
    <div className="navbar-collapse collapse " id="mainNav">
    <StyledLink link="/" className="navbar-brand logo d-lg-none">
      <img src={Logo} alt="KrispCall" title="KrispCall"  width="135" height="32" />
    </StyledLink>
    <div className="menu-list">
      <NavContainer className="navbar-nav">
        {items.map((item, key) => {
          const arrUrl = item.url.split('/');
          const subUrl = arrUrl[arrUrl.length - 2];              
          // console.log('menu is', subUrl)
        
          if (subUrl === "krispcall-blogbck" || subUrl === "krispcall-blog" || subUrl === "krispcall-blog"){
            return (
              <NavItem key={key} className="nav-item">
                <Link className="nav-link" link={'/'}>{item.title}</Link>
              </NavItem>
            );

          }
         else if (!item.child_items) {
            return (
              <NavItem key={key} className="nav-item">
                <Link  className="nav-link" link={'/'+subUrl}>{item.title}</Link>
              </NavItem>
            
            );
          } else {
            const childItems = item.child_items;
            return (
              <NavItemWithChild key={key} className="nav-item nl-main megablock-link">
                  <Link className="nav-link" link={item.url}>
                    {item.title}
                    <span className="arrow-down"></span>
                  </Link>
                  <ChildMenu className={`megamenu megamenu--block ${childItems[0].child_items ? "w-100 megamenu--products": ""}`}>
                    <div className="megamenu__wrapper">
                        {childItems[0].child_items ?
                          <div className="row no-gutters">
                            {childItems.map((childItem, index) => {
                              return(
                                // {index==0 ? "this" : "that"}
                                <div className={`col-lg ${index==0 ? "menu-cloud": ""}`} key={index}>
                                  <div className={`megamenu__heading ${index==0 ? "bg-gray justify-content-between": ""}`}>
                                    <figure className="img-wrap icon">
                                      <img src={childItem.acf.logo.url} alt={childItem.acf.logo.alt} />
                                    </figure>
                                    <div className="text-wrap">
                                        <h6 className="megamenu__title mb-2">{childItem.post_title}</h6>
                                        <p className="text-12">The one-stop solution for your business.</p>
                                    </div>
                                  </div>
                                  <div className={`megamenu__body ${index==0 ? "bg-gray": "list-wrapper"}`}>
                                    <NavContainer className={`${index==0 ? "icon-list coln__2": "block-list"}`}>
                                      {/* {childItem} */}
                                      {childItem.child_items.map((grandChild, key) => {
                                        return (
                                          <Fragment key={key}>
                                           {index==0 && (
                                            <NavItem className="coln__item" key={key}>
                                              <Link link={grandChild.url}>
                                                <span>
                                                  <img src={grandChild.acf.logo.url} alt={grandChild.acf.logo.alt} />
                                                </span>
                                                {grandChild.title}
                                              </Link>
                                            </NavItem>
                                           )}
                                            {index > 0 && (
                                           <NavItem className="block-list__item" key={key}>
                                              <Link className="link-item" link={grandChild.url}>
                                                <div className="text-wrap">
                                                  <span>{grandChild.title}</span>
                                                  <span>{grandChild.title}</span>
                                                </div>
                                              </Link>
                                            </NavItem>
                                            )}
                                          
                                          </Fragment>
                                         
                                        )
                                      })}
                                    </NavContainer>
                                    <Link className="link-arrow" link={childItem.url}>See all features</Link>
                                  </div>
                                  <div className="megamenu__action">
                                    {index==0 && <Link rel="noreferrer noopener" className="btn btn-block btn-success" link={'https://app.krispcall.com/register'}>
                                      Get Started Now
                                    </Link>}
                                    {index==1 && <Link rel="noreferrer noopener" className="btn btn-block btn-primary" link={'https://app.krispcall.com/login'}>
                                      Choose Phone Number
                                    </Link>}
                                      {index==2 && <Link rel="noreferrer noopener" className="btn btn-block btn-primary" link={'https://app.krispcall.com/register'}>
                                      Start Free Trial
                                    </Link>}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                          :   
                          <div className="row no-gutters">
                            <div className="col">
                              <div className="megamenu__left bg-gray">
                                <h6 className="megamenu__title">{item.title}</h6>
                                <NavContainer className="nav nav-pills icon-list">
                                  {childItems.map((childItem, key) => {
                                      return (
                                        <NavItem key={key}>
                                          <Link className="nav-link" link={childItem.url}>
                                            <span><img src={childItem.acf.logo.url} alt={childItem.acf.logo.alt} /></span>
                                            {childItem.title}
                                          </Link>
                                        </NavItem>
                                      );
                                  })}
                                </NavContainer>
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="megamenu__right">
                                tab here
                              </div>
                            </div>
                          </div>
                        }
                    </div>
                  </ChildMenu>
              </NavItemWithChild>
            );
          }
        })}
      </NavContainer>
      <NavContainer className="list-inline mb-0">
        <NavItem className="list-inline-item ">
          <Link className="btn btn-sm btn-link" link={'/login'}>Login</Link>
        </NavItem>
        <NavItem className="list-inline-item ">
          <Link className="btn btn-sm btn-tertiary" link={'/login'}>Get Started</Link>
        </NavItem>
      </NavContainer>
    </div>
  </div>
  );
}; 


export default connect(Nav);
const NavContainer = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  padding: 0;
`;
/**
 * Styling of nav elements
 */
const NavItemWithChild = styled.li`
  display:block
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ChildMenu = styled.div`
  left: 0;
`;
