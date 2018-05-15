import React, { Component } from 'react';

import Logo from './containers/Logo/Logo';
import Form from './containers/Form/Form';
import Checkboxes from './containers/Checkboxes/Checkboxes';

import './App.css';

class App extends Component {
  state = {
    formSampleData: {
      "fields": [
        {
          "label": "Full name",
          "required": true,
          "type": "text",
          "field_name": "full_name"
        },
        {
          "label": "Company",
          "required": true,
          "type": "text",
          "field_name": "company"
        },
        {
          "label": "Email",
          "required": true,
          "type": "email",
          "field_name": "email"
        },
        {
          "label": "Phone number",
          "required": false,
          "type": "text",
          "field_name": "phone"
        }
      ],
      "submit_text": "Submit data",
      "url": "https://httpbin.org/post",
      "method": "POST"
    }
  };

  render() {
    const { formSampleData } = this.state;

    return (
      <div className="app">
        <header className="app__header">
          <Logo />
        </header>
        <main className="app__main">
          <Form sampleData={formSampleData} />
          <Checkboxes />
        </main>
      </div>
    )
  }
}

export default App;
