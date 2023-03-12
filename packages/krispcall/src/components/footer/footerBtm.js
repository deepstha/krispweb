import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import logo from '../../assets/images/logo.svg';
import heart from '../../assets/images/footer/icon-heart.svg'
import SocialMenu from "./socialMenu";
const FootBtm = ({ state }) => {
  const items = state.source.get(`/menu/policy-menu/`).items;
  return (
    <div className="footer-bottom">
      <div  className="container">
      <div className="row">
      <div className="col-lg footer-bottom__left">
        <figure className="mb-0">
          <img src={logo} alt="L" />
        </figure>
        <p className="text-12 text-lt">
          Virtual Cloud Phone System for your Business
        </p>
        <p className="mb-0 text-12">
          &#169; 2022 KrispCall, Made with
          <span className="text-danger"
            > <img
              src={heart}
              alt="Made with love in Melbourne"
              width="13"
              height="14"
          /> </span>
          in Melbourne
        </p>
      </div>
      <div className="col-lg-auto">
        <div className="footer-bottom__right">
        <NavContainer className="list-grid pl-0">
          {items.map(btmMenu => 
            <NavItem key={btmMenu.ID}>
              <Link link={btmMenu.url}>{btmMenu.title}</Link>
            </NavItem>
          )}
        </NavContainer>
        <div className="socials">
          <span>Get in touch with us</span>
          <SocialMenu/>
        </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default connect(FootBtm);
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
