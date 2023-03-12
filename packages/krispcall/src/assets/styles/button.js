import React from "react";
import { connect, Global, css, styled } from "frontity";
const Button = styled.button`
  border: ${props => props.inverted ? '1px solid $primary' : 'none'};
  border-radius: ${props => '$base-radius'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: inline-block;
  font-size: ${props => 
    (props.small && `${$base-font-size * 0.875}`)
      || (props.large && `${$base-font-size * 1.375}`)
      || '$base-font-size';
  };
  font-weight: ${props => '$font-semibold'};
  line-height: ${props => 
    (props.small && '2.2') || (props.large && '1.25') || '2.5'
  };
  padding: ${props =>
    props.large ? '16px 25px 17px' : '0 12px'
  };
  position: relative;
  text-align: center;
  color: ${props =>
    (props.inverted && '$primary')
    || (props.link && '$base-font-color')
    || '#fff'
  };
  background-color: ${props =>
    (props.primary && '$primary')
    || (props.danger && '$danger')
    || ((props.inverted || props.link) && '#fff')
    || (props.disabled && '$brand-grey')
  };
  
  &:hover {
    ${props => props.link && 'text-decoration: underline;'}
  }
`;