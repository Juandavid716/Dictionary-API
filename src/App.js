import React, { Component } from "react";
import { InputGroup, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const APIKEY =
  "dict.1.1.20200708T233043Z.9021847f94ce640d.5d6c9e082783e1177705a388b2229bc8970c18a7";
const ENGLISH = "&lang=en-de&text=";
const DEUTSCH = "&lang=de-en&text=";
const APIDICTIONARY =
  "https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=" + APIKEY;

class App extends Component {
  state = {
    wordvalue: "",
    traslation: "",
    word: "",
    text: { false: "English to German", true: "German to English" },
    lang: false,
  };
  getLange() {
    this.setState({ lang: !this.state.lang });

    // this.setState({text[this.state.lang]})
  }
  getWord() {
    if (this.state.wordvalue !== "") {
      if (this.state.lang === false) {
        fetch(APIDICTIONARY + ENGLISH + this.state.wordvalue)
          .then((response) => response.json())
          .then((data) => {
            if (data.def[0] !== undefined && data.def[0] !== "") {
              this.setState({
                traslation: data.def[0].tr[0].text,
                word: this.state.wordvalue,
              });
            } else {
              alert("Word not found");
            }
          });
      } else {
        fetch(APIDICTIONARY + DEUTSCH + this.state.wordvalue)
          .then((response) => response.json())
          .then((data) => {
            if (data.def[0] !== undefined && data.def[0] !== "") {
              this.setState({
                traslation: data.def[0].tr[0].text,
                word: this.state.wordvalue,
              });
            } else {
              alert("Word not found");
            }
          });
      }
    }
  }
  render() {
    return (
      <div className="App container h-100">
        <div className="header mt-5 bg-primary ">
          <h1 className="p-3">Dictionary</h1>
          <h2>{this.state.text[this.state.lang]}</h2>

          <div className="w-100 d-flex justify-content-around align-items-center my-3 pb-3 mb-3">
            <InputGroup className=" d-flex justify-content-center align-items-center w-50">
              <div className="w-50 ">
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
            <div className="mr-3 w-auto d-flex justify-content-start">
              <button
                className="material-icons bg-primary border-0 "
                onClick={this.getLange.bind(this)}
              >
                flip_camera_android
              </button>
            </div>
            <div className="ml-3 w-25 d-flex justify-content-start">
              <Button color="danger" onClick={this.getWord.bind(this)}>
                Search
              </Button>{" "}
            </div>
          </div>
        </div>

        <div className="d-flex flex-row bg-blue justify-content-around mt-5 bg-success">
          <div className="w-50">
            <h2>Word</h2>
          </div>
          <div className="w-50">
            <h2>Meaning</h2>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around ">
          <div className="w-50">
            <h2>{this.state.word}</h2>
          </div>
          <div className="w-50">
            <h2>{this.state.traslation}</h2>
          </div>
        </div>
        <div style={{ height: "300px" }}></div>
        <footer
          class="d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundColor: "#333333" }}
        >
          <div class="footer-copyright text-center py-3">
            <a href="http://api.yandex.com/dictionary">
              {" "}
              Powered by Yandex.Dictionary
            </a>
          </div>
          <p class="d-flex align-items-center text-white m-0 mb-3">
            Designed and built with
            <span class="ml-1 mr-1 material-icons text-danger">favorite</span>
            by me!
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
