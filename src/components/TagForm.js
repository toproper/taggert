import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { setTag } from "../services/tags";

const StyledForm = styled.form`
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  h3 {
    background: #ffe000;
    color: #000;
    margin: 0;
    padding: 1rem;
    margin-bottom: 1rem;
  }

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

    &:disabled {
      background: #999;
      color: #333;
    }

    &:disabled:hover {
      cursor: default;
      background: #999;
    }

    &:hover {
      cursor: pointer;
      background: #666;
    }
  }
`;

const TagForm = () => {
  const [alert, setAlert] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleChange = e => {
    setUserInput(e.currentTarget.value);
  };

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 1500);
    }
  }, [alert]);

  const handleSubmit = e => {
    e.preventDefault();
    setTag(userInput).then(() => {
      setUserInput("");
      setAlert(true);
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {alert && <h3> Submit Successful</h3>}
      <input
        aria-label="Tag name"
        placeholder="Enter new tag name..."
        value={userInput}
        type="text"
        onChange={handleChange}
      />
      <button aria-label="Add tag" disabled={!userInput}>
        Add tag
      </button>
    </StyledForm>
  );
};

export default TagForm;
