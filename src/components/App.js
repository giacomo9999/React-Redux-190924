import React from "react";
import "./App.css";
import Stories from "./Stories";

const App = ({ stories }) => {
  return (
    <div className="container-outer">
      <h1>App</h1>
      <Stories stories={stories} />
    </div>
  );
};

export default App;
