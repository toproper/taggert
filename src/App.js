import React, { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { RestLink } from "apollo-link-rest";
import data from "./data.json";
import Header from "./Header";
import TagList from "./TagList";
import TagForm from "./TagForm";

function App() {
  const [tagList, setTagList] = useState(data);
  const restLink = new RestLink({ uri: "http://localhost:3000/" });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink
  });

  const query = gql`
    query TagList {
      tag @rest(type: "Tag", path: "tags/1/") {
        name
      }
    }
  `;

  const addTag = userInput => {
    let copy = [...tagList];
    copy = [...copy, { id: tagList.length + 1, name: userInput }];
    setTagList(copy);

    console.log(restLink);

    client.query({ query }).then(response => {
      console.log(response.data);
    });
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
