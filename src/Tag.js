import React from "react";
import styled from "styled-components";

const StyledTag = styled.div`
  color: red;
  background: #c1c1c1;
`;

const Tag = ({ tag }) => {
  return <StyledTag>{tag.name}</StyledTag>;
};

export default Tag;
