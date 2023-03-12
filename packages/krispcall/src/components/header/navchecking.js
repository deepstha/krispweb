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
          } 
          else {
            const childItems = item.child_items;
            return (
              console.log('Fisrt child item is', childItems),
              <NavItemWithChild key={item.ID} className="nav-item nl-main solutions-link">
                  <Link className="nav-link" link={item.url}>
                    {item.title}
                    <span className="arrow-down"></span>
                  </Link>
                  <ChildMenu className="megamenu megamenu--solutions">
                    <div className="megamenu__wrapper">
                      <div className="row no-gutters">
                        {childItems.length}
                        menu
                      {childItems.forEach((grandChild) => {
                          // <div>{key}</div>
                          <NavItem className="block-list__item">
                            <Link className="link-item" link={grandChild.url}>
                              <div className="text-wrap">
                                <span>{grandChild.title}</span>
                                {/* <span>{grandChild.title}</span> */}
                              </div>
                            </Link>
                          </NavItem>
                        })}
                      </div>
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
