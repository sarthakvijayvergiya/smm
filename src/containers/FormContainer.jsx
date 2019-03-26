import React, { Component } from "react";

/* Import Components */
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newData: {
        standard: "",
        subject: "",
      },

      standardOptions: ["11th","12th"],
      subjectOptions: ["Physics", "Chemistry", "Maths"]
    };
    this.handleStandard = this.handleStandard.bind(this);
    this.handleSuject = this.handleSuject.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */


  handleStandard(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newData: {
          ...prevState.newData,
          [name]: value
        }
      }),
      () => console.log(this.state.newData)
    );
  }

  handleSuject(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newData: {
          ...prevState.newData,
          [name]: value
        }
      }),
      () => console.log(this.state.newData)
    );
  }




  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newData;
    console.log(userData)
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newData: {
        standard: "",
        subject: "",
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Select
          title={"Standard"}
          name={"standard"}
          options={this.state.standardOptions}
          value={this.state.newData.standard}
          placeholder={"Select Standard"}
          handleChange={this.handleStandard}
        />{" "}

        <Select
          title={"Subject"}
          name={"subject"}
          options={this.state.subjectOptions}
          value={this.state.newData.subject}
          placeholder={"Select Subject"}
          handleChange={this.handleSuject}
        />{" "}


        {/* Age Selection */}

        {/* About you */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
