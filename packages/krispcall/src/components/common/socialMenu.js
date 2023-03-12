import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
const SocialMenu = ({ state }) => {
  const items = state.source.get(`/menu/social-menu/`).items;
  return (
    <NavContainer className="socials-icon pl-0">
      {items.map((socialMenu, key) => {
        const title = socialMenu.title.split(" ")[0];
        return (
          <NavItem key={key}>
            <Link 
              target="_blank"
              link={socialMenu.url}>
              <img
                    src={socialMenu.acf.logo.url}
                    alt={title}
                    title={title}
                    width="24"
                    height="24"
                />
            </Link>
          </NavItem>
        )
        
        }
      )}
    </NavContainer>
  );
};

export default connect(SocialMenu);
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









