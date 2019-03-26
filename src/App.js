import React, { Component } from "react";
import FormContainer from "./containers/FormContainer";


class App extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3> Syllabus Management Module </h3>
        <FormContainer />
      </div>
    );
  }
}


export default App;

