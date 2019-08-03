import React from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from "./Components/NavBar";
import ContentSection from "./Components/ContentSection";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'concept': 'Text Section 1'
    };
  }


  render() {
    return (
      <div className="App">
        <NavBar />
        <ContentSection id_name="blue" text={this.state.concept} />
        <ContentSection id_name="white" text="Text Section 2" />
        <ContentSection id_name="blue" text="Text Section 3" />
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