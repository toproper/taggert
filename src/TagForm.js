import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter tag..."
      />
      <button>Save tag</button>
    </form>
  );
};

export default TagForm;
