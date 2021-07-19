import React from "react";
import styled from "styled-components";

const StyledTag = styled.li`
  background: #c1c1c1;

  padding: 0.4rem 0.8rem;
  font-family: sans-serif;
`;

const Tag = ({ tag }) => {
  return <StyledTag>{tag.tag}</StyledTag>;
};

export default Tag;
