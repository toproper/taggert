import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  border: 1px dotted red;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  input,
  button {
    font-size: 1.2rem;
    padding: 0.6rem;
  }

  input {
    margin-bottom: 0.6rem;
  }

  button {
    background: #000;
    color: white;
    border: 0;

    &:hover {
      cursor: pointer;
      background: #666;
    }
  }
`;

const TagForm = ({ addTag }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = e => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTag(userInput);
    setUserInput("");
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        aria-label="Tag name"
        placeholder="Enter new tag name..."
        value={userInput}
        type="text"
        onChange={handleChange}
      />
      <button aria-label="Add tag">Add tag</button>
    </StyledForm>
  );
};

export default TagForm;
