import React from "react";
import logo from "./logo.svg";
import data from "./Data";
import "./App.css";

import NavBar from "./Components/NavBar/NavBar";
import ContentSection from "./Components/ContentSection/ContentSection";

function obj_to_array(obj) {
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  return result;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = obj_to_array(data);
  }

  render() {
    return (
      <div className="App">
        <img id="logo" src={logo} />
        <NavBar headings={this.state.map((element) => element[0])} />
        <div className="content_sections">
          {
            this.state.map(element => (
               <ContentSection id={element[0]} id_name={element[0]} text={element[1]} />
            ))
          }
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
