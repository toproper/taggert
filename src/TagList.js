import React from "react";
import Tag from "./Tag";
import styled from "styled-components";

const StyledTagList = styled.div`
  display: flex;
  flex-direction: column;
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
