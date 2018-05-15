import React, { Component } from "react";

import FormField from "../../components/FormField/FormField";

class Form extends Component {
  state = {
    inputValues: {},
    formLoading: false,
    formResponse: ''
  };

  handleInputChange = (event) => {
    const inputValues = {...this.state.inputValues};

    inputValues[event.target.id] = event.target.value;

    this.setState({inputValues});
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { url, method } = this.props.sampleData;
    const { inputValues } = this.state;
    const data = {};

    for(let value in inputValues) {
        let temp = document.createElement('span');
        temp.innerHTML = inputValues[value];
        data[value] = temp.innerText;
    }

    fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
        })
    }).then(res => {
        return res.json()
    }).then(response => {
        let values = {...inputValues};

        for(let value in values) {
            values[value] = ''
        }

        this.setState({
            formLoading: false,
            inputValues: values,
            formResponse: response.data
        });
    }).catch(error => {
        console.error(error);
        this.setState({ formLoading: false });
    });

    this.setState({ formLoading: true });
  };

  addDefaultInputValuesToState = () => {
    const { sampleData } = this.props;
    const inputValues = {};

    for (let field of sampleData.fields) {
      inputValues[field.field_name] = "";
    }

    this.setState({ inputValues });
  };

  componentDidMount() {
    this.addDefaultInputValuesToState();
  }

  render() {
    const { sampleData } = this.props;
    const { inputValues, formLoading, formResponse } = this.state;

    const formFields = sampleData.fields.map(field => {
      const { label, required, type, field_name } = field;
      return (
        <FormField
          key={field_name}
          label={label}
          required={required}
          type={type}
          field_name={field_name}
          value={inputValues[field_name]}
          onInputChange={this.handleInputChange}
          loading={formLoading}
        />
      );
    });

    const response = formResponse ? <code>{formResponse}</code> : null;

    return (
        <div className="container">
            {response}
            <form onSubmit={this.handleFormSubmit}>
                {formFields}
                <input
                    type="submit"
                    value={sampleData.submit_text}
                    disabled={formLoading}
                />
            </form>
        </div>
    );
  }
}

export default Form;
