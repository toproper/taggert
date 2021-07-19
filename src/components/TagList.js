import React from "react";
import Tag from "./Tag";
import styled from "styled-components";

const StyledTagList = styled.ul`
  display: flex;
  flex-direction: column;

  // TODO: Move list reset to general css reset
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TagList = ({ tagList }) => {
  return (
    <StyledTagList>
      {tagList.map(tag => {
        return <Tag key={tag.id} tag={tag} />;
      })}
    </StyledTagList>
  );
};

export default TagList;
