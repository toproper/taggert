import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 0 1rem;

  h1 {
    font-weight: 900;
    font-size: 4rem;
    line-height: 0.7em;
    margin: 0;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500
    
    margin: 0;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Taginator II</h1>
      <p>Killer tag management from the future</p>
    </StyledHeader>
  );
};

export default Header;
