import React, { Component } from "react";
import { InputGroup, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    word: "",
  };
  getWord() {
    console.log(this.state.word);
  }
  render() {
    return (
      <div className="App container">
        <div className="header mt-5 bg-primary ">
          <h1 className="p-5">Dictionary Online</h1>
          <div className=" my-3">
            <div className="w-75 d-flex">
              <InputGroup className=" d-flex justify-content-end align-items-center w-100 mr-3 pr-4">
                <div className="w-50 mb-5">
                  <Input
                    type="text"
                    id="text"
                    value={this.state.word}
                    onChange={(e) => {
                      let findWord = e.target.value;
                      this.setState({ word: findWord });
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
            <h2>Word:</h2>
          </div>
          <div>
            <h2>Meaning</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
