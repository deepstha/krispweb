import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const FootNav = ({ state }) => {
  const items = state.source.get(`/menu/foot-menu/`).items;
  // console.log('footer ITEMS:',items)
  return ( 
    <div className="footer-sitemap">
      <div className="container">
        <div className="row footer-list">
          {items.map((item, key) => {
            const childItems = item.child_items;
            return(
              <div className="col-auto footer-list__item" key={key}>
                <h6 className="text-10">{item.title}</h6>
                <NavItemWithChild key={item.ID} className="nav-item nl-main solutions-link">
                  <NavContainer className="nav nav-pills">
                    {childItems.map((childItem, key) => {
                      return (
                        //console.log('child item url is:', childItem.url),
                        <NavItem key={key}>
                          <Link className="nav-link" link={childItem.url}>
                            <span><img src={childItem.acf.logo.url} alt={childItem.acf.logo.alt} /></span>
                              {childItem.title}
                          </Link>
                        </NavItem>
                      );
                    })}
                  </NavContainer>
                </NavItemWithChild>
              </div>
              )
            })}
        </div>
      </div>
    </div>
  );
};

export default connect(FootNav);
/**
 * Styling of nav elements
 */
const NavContainer = styled.ul`
  list-style: none;
  display: block;
`;

const NavItem = styled.li`
  padding: 0;
  a {
    padding: 0;
  }
`;

const NavItemWithChild = styled.li`
  display:block;
`;

