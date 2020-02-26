import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import Post from "./components/Post/index";


function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      ></link>
      <Header></Header>
      <div>
        <Post></Post>
      </div>
    </div>
  );
}

export default App;
