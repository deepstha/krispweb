import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FootNav from "./footerNav"
import IntlMenu from "./footerIntl"
import FootBtm from "./footerBtm"
import Cta from './cta';

const Footer = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  return (
    <FooterNav>
      <Cta/>
      {/* <FootNav/>
      <IntlMenu/>
      <FootBtm/> */}
      
    </FooterNav>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);
const FooterNav = styled.footer`   
  display: block
`;
