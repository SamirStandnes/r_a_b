import React from "react";
import logo from "./logo.svg";

// Import material design for navbar
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./App.css";

import NavBar from "./Components/NavBar/NavBar";
import ContentSection from "./Components/ContentSection/ContentSection";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      concept: "Text Section 1"
    };
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="content_sections">
          <ContentSection id_name="blue" text={this.state.concept} />
          <ContentSection id_name="white" text="Text Section 2" />
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
