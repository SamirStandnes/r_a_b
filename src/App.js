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
    this.state = {
      data: obj_to_array(data),
      headings: ["Concept", "Confidentiality", "Prices", "Contact"]
    };
  }

  render() {
    return (
      <div className="App">
        <img id="logo" src={logo} />
        <NavBar headings={this.state.headings.map(element => element)} />
        <div className="content_sections">
          {this.state.data.map(element => (
            <ContentSection
              id={element[0]}
              id_name={element[0]}
              text={element[1]}
            />
          ))}
          <div id="Prices" className="ContentSectionStructure">
            <div>
              <h2> Prices </h2>
              <div>Prices Price</div>
            </div>
          </div>

          <div id="Contact" className="ContentSectionStructure">
            <div>
              <h2> Contact </h2>
              <div>
                The starting point for every customer relationship is always
                <span id="contact_email">
                  {" "}
                  <a href="mailto: contact@rent-a-brain.community?">
                    contact@rent-a-brain.community{" "}
                  </a>
                </span>
                <br />
                <br />
                If you are interested in the “Personal - Encrypted” product
                please use what is colloquially called a “burner email account”
                when reaching out. The email should be sent with a subject line
                of “Interested in PE” and nothing else, we will then reply with
                further communication instructions. If you do not know how to
                set up a “burner email account”, read this simple guide.
              </div>
            </div>
          </div>
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
