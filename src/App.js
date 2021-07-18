import React, { useState } from "react";
import data from "./data.json";
import Header from "./Header";
import TagList from "./TagList";
import TagForm from "./TagForm";

function App() {
  const [tagList, setTagList] = useState(data);

  const addTag = userInput => {
    let copy = [...tagList];
    copy = [...copy, { id: tagList.length + 1, name: userInput }];
    setTagList(copy);
  };

  return (
    <div className="App">
      <Header />
      <TagForm addTag={addTag} />
      <TagList tagList={tagList} />
    </div>
  );
}

export default App;
