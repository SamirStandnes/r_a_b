import React from "react";
import logo from "./logo.svg";
import data from "./Data";
import "./App.css";

import NavBar from "./Components/NavBar/NavBar";
import ContentSection from "./Components/ContentSection/ContentSection";

console.log(data);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = data;
  }
 
  render() {
    return (
      <div className="App">
        <img id="logo" src={logo} />
        <NavBar />
        <div className="content_sections">
          <ContentSection id_name="blue" text={this.state.Concept} />
          <ContentSection id_name="white" text="'Text" />
          <ContentSection id_name="blue" text="Text Section 3" />
        </div>
      </div>
    );
  }
}

export default App;

/*

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/
