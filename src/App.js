import React, { Component } from "react";
import { InputGroup, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const APIKEY =
  "dict.1.1.20200708T233043Z.9021847f94ce640d.5d6c9e082783e1177705a388b2229bc8970c18a7";
const APIDICTIONARY =
  "https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=" +
  APIKEY +
  "&lang=en-de&text=";
class App extends Component {
  state = {
    wordvalue: "",
    traslation: "",
    word: "",
  };
  getWord() {
    fetch(APIDICTIONARY + this.state.wordvalue)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          traslation: data.def[0].tr[0].text,
          word: this.state.wordvalue,
        });
        console.log();
      });
  }
  render() {
    return (
      <div className="App container">
        <div className="header mt-5 bg-primary ">
          <h1 className="p-5">Dictionary</h1>
          <div className=" my-3">
            <div className="w-75 d-flex">
              <InputGroup className=" d-flex justify-content-end align-items-center w-100 mr-3 pr-4">
                <div className="w-50 mb-5">
                  <Input
                    type="text"
                    id="text"
                    value={this.state.wordvalue}
                    onChange={(e) => {
                      let findWord = e.target.value;
                      this.setState({ wordvalue: findWord });
                    }}
                  />
                </div>
              </InputGroup>
              <div>
                <Button color="danger" onClick={this.getWord.bind(this)}>
                  Search
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row bg-blue justify-content-around mt-5 bg-success">
          <div>
            <h2>Word</h2>
          </div>
          <div>
            <h2>Meaning</h2>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around ">
          <div>
            <h2>{this.state.word}</h2>
          </div>
          <div>
            <h2>{this.state.traslation}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
