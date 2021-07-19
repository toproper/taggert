import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  border: 1px dotted red;
  margin-bottom: 1rem;

  h1 {
    font-weight: 900;
    font-family: sans-serif;
    font-size: 4rem;
    line-height: 0.7em;
    margin: 0;
    margin-bottom: 0.8rem;
  }

  p {
    font-weight: 500;
    font-family: sans-serif;
    font-size: 1.6rem;
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
