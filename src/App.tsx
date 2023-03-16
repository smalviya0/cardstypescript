import React from "react";
import { Routes, Route } from "react-router-dom";
import PostDetails from "./Component/PostDetails";
import CardComponent from "./Component/CardComponent";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardComponent />} />
        <Route path="/post" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
