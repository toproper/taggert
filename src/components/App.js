import React, { useEffect, useState, Fragment } from "react";
import GlobalStyle from "../theme/globalStyles";
import { getTagList } from "../services/tags";
import Header from "./Header";
import TagList from "./TagList";
import TagForm from "./TagForm";

function App() {
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getTagList().then(items => {
      if (mounted) {
        setTagList(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <div className="App">
        <Header />
        <TagForm />

        <TagList tagList={tagList} />
      </div>
    </Fragment>
  );
}

export default App;
