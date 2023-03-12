import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Logo from "../../assets/images/logo.png";
// import Example from './Example'

/**
 * Navigation Component
 *
 * It renders the navigation links
 */


/**
 * One level menu (no child menus)
 */
// const Nav = ({ state }) => {
//   const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
//   // console.log('ITEMS:',items)
//   return (
//     <NavContainer>
//       {items.map((item) => {
//         return (
//           <NavItem key={item.ID}>
//             <Link link={item.url}>{item.title}</Link>
//           </NavItem>
//         );
//       })}
//     </NavContainer>
//   );
// };

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
        {items.map((item) => {
          const arrUrl = item.url.split('/');
          const subUrl = arrUrl[arrUrl.length - 2];              
          // console.log('menu is', subUrl)
        
          if (subUrl === "krispcall-blogbck" || subUrl === "krispcall-blog" || subUrl === "krispcall-blog"){
            return (
              <NavItem key={item.ID} className="nav-item">
                <Link className="nav-link" link={'/'}>{item.title}</Link>
              </NavItem>
            );

          }
         else if (!item.child_items) {
            return (
              <NavItem key={item.ID} className="nav-item">
                <Link  className="nav-link" link={'/'+subUrl}>{item.title}</Link>
              </NavItem>
            
            );
          } else {
            const childItems = item.child_items;
            return (
              <NavItemWithChild key={item.ID} className="nav-item nl-main solutions-link">
                  <Link className="nav-link" link={item.url}>
                    {item.title}
                    <span className="arrow-down"></span>
                  </Link>
                  <ChildMenu className="megamenu megamenu--solutions">
                    <div className="megamenu__wrapper">
                        {childItems[0].child_items ?
                          <div className="row no-gutters">
                            <div className="col-lg-auto menu-cloud">
                              <div className="megamenu__heading bg-gray justify-content-between">
                                <figure className="img-wrap icon">
                                    img
                                </figure>
                                <div className="text-wrap">
                                    <h6 className="megamenu__title mb-2">Cloud Phone</h6>
                                    <p className="text-12">The one-stop solution for your business.</p>
                                </div>
                              </div>
                              <div className="megamenu__body">
                                list wrapper
                                <a href="/cloud-phone" className="link-arrow">See all features</a>
                              </div>
                              <div className="megamenu__action bg-gray">
                                  <a href="https://app.krispcall.com/register" rel="noreferrer noopener" target="_blank" className="btn btn-block btn-success">Get Started Now</a>
                              </div>
                            </div>
                            <div className="col-lg">
                              <div className="megamenu__heading">
                                <figure className="img-wrap icon">
                                    img {/* <img src="/src/assets/images/megamenu/icons/icon-phone-numbers.svg" alt="Phone Numbers"> */}
                                </figure>
                                <div className="text-wrap">
                                    <h6 className="megamenu__title mb-2">Phone Numbers</h6>
                                    <p className="text-12">Use International Numbers for your business & operate from any part of the globe.</p>
                                </div>
                              </div>
                              <div className="megamenu__body  bg-gray">
                                <NavContainer className="block-list">
                                  {childItems.map((childItem, key) => {
                                    <NavItem className="block-list__item" key={key}>
                                        <Link className="link-item" link={childItem.url}>
                                          <div className="text-wrap">
                                            <span>{childItem.title}</span>
                                            <span>{childItem.title}</span>
                                          </div>
                                      </Link>
                                    </NavItem>
                                  })}
                                </NavContainer>
                                <Link className="link-arrow" link={item.url}>See all features</Link>
                              </div>
                              <div className="megamenu__action">
                                <Link rel="noreferrer noopener" className="btn btn-block btn-primary" link={'https://app.krispcall.com/login'}>Choose Phone Number</Link>
                              </div>
                            </div>
                            <div className="col-lg">
                              <div className="megamenu__heading justify-content-between">
                                <figure className="img-wrap icon">
                                   img {/* <img src="/src/assets/images/megamenu/icons/icon-grid.svg" alt="Click to Call Widget"> */}
                                </figure>
                                <div className="text-wrap">
                                    <h6 className="megamenu__title mb-2">Click to Call Widget</h6>
                                    <p className="text-12">Top callback widget that drives more lead conversions</p>
                                </div>
                              </div>
                              <div className="megamenu__body  bg-gray">
                                <NavContainer className="block-list">
                                  {childItems.map((childItem, key) => {
                                    <NavItem className="block-list__item" key={key}>
                                        <Link className="link-item" link={childItem.url}>
                                          <div className="text-wrap">
                                            <span>{childItem.title}</span>
                                            <span>{childItem.title}</span>
                                          </div>
                                      </Link>
                                    </NavItem>
                                  })}
                                </NavContainer>
                                <Link className="link-arrow" link={item.url}>See all features</Link>
                              </div>
                            </div>
                          </div>
                          :   
                          <div className="row no-gutters">
                            <div className="col">
                              <div className="megamenu__left bg-gray">
                                <h6 className="megamenu__title">{item.title}</h6>
                                <NavContainer className="nav nav-pills icon-list">
                                  {childItems.map((childItem) => {
                                      return (
                                        <NavItem key={childItem.ID}>
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

/**
 * Legacy mars-theme function
 */
// const Nav = ({ state }) => (
//   <NavContainer>
//     {state.theme.menu.map(([name, link]) => {
//       // Check if the link matched the current page url
//       const isCurrentPage = state.router.link === link;
//       return (
//         <NavItem key={name}>
//           {/* If link url is the current page, add `aria-current` for a11y */}
//           <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
//             {name}
//           </Link>
//         </NavItem>
//       );
//     })}
//   </NavContainer>
// );

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
