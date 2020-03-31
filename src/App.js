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
              <div>
                <table>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>Personal</td>
                    <td>60 USD/hour</td>
            
                  </tr>
                  <tr>
                    <td>Business</td>
                    <td>70 USD/hour</td>
                   
                  </tr>

                  <tr>
                    <td>Personal Encrypted</td>
                    <td>90 USD/hour</td>
                    
                  </tr>
                </table>
                <br />
                These prices only apply{" "}
                <span style={{ "text-decoration": "underline" }}>
                  {" "}
                  after a final agreement of purchase is finalized
                </span>
                .
                <br />
                Prices are listed in USD, but most payment options and currencies are accepted.
              </div>
            </div>
          </div>

          <div id="Contact" className="ContentSectionStructure">
            <div>
              <h2> Contact </h2>
              <div>
                Send us an email @:
                <span id="contact_email">
                  {" "}
                  <a href="mailto: contact@rent-a-brain.community?" style={{"text-decoration": "none"}}>
                    contact@rent-a-brain.community{" "}
                  </a>
                </span>
                to get in touch with a our team. We are here to handle any
                requests and/or questions.
                <br />
                <br />
                If you are interested in the “Personal - Encrypted” product, the
                email should be sent with a subject line of “Interested in PE”
                and nothing else, we will then reply with further communication
                instructions. We strongly suggest sending the email from an
                address that does not include any personally identifiable
                information.
               
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

 Rent-a-Brain® is only available in Europe (EU and
                EEA), althoug remote consultation can be provided on a
                case-by-case basis for clients located outside of Europe.
                <br />
                <br />

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
