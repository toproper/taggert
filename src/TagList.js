import React from "react";
import Tag from "./Tag";

const TagList = ({ tagList }) => {
  return (
    <div>
      {tagList.map(tag => {
        return <Tag key={tag.id} tag={tag} />;
      })}
    </div>
  );
};

export default TagList;
