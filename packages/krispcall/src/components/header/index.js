import React from "react";
import { connect, styled } from "frontity";
import Button from '../common/button';
import Logo from "../../assets/images/logo.png";
import Link from "../link";
import Nav from "./nav";
import MobileMenu from "./menu";
const Header = ({ state }) => {
  return (
    // console.log('css is', Navbar),
    <>

      <header className="header" id="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg m-0">
            <StyledLink link="/" className="navbar-brand logo">
              <img src={Logo} alt="Image alt" title="KrispCall"  width="135" height="32" />
            </StyledLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
              <div className="hb-icon">
                <span></span>
                <span></span>
                <span></span>
                </div>
            </button>
            <Nav/>
            {/* <MobileMenu/> */}
          </nav>
        </div>
      </header>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

// const HeaderTag = styled.header(BootstrapNav);
// const HeaderContainer = styled.div(navbarCss);