import React from "react";
import Header from "./component/header";
import "./App.css";
import Search from "./component/searchContainer/Search.js";
import DataRendering from "./component/dataTable/dataRendering";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <DataRendering />
    </div>
  );
}

export default App;
