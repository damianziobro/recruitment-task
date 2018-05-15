import React, { Component } from 'react';
import Checkbox from './Checkbox/Checkbox';

import './Checkboxes.css';

class Checkboxes extends Component {
    state = {
        inputs: [
            {
                name: "Alicja",
                checked: false,
                disabled: false
            },
            {
                name: "Adam",
                checked: false,
                disabled: false
            },
            {
                name: "Andrzej",
                checked: false,
                disabled: false
            },
            {
                name: "Brzetysław",
                checked: false,
                disabled: false
            },
            {
                name: "Bartłomiej",
                checked: false,
                disabled: false
            },
            {
                name: "Hieronim",
                checked: false,
                disabled: false
            }
        ]
    };

    handleInputChange = (event) => {
        const inputs = [...this.state.inputs];

        inputs.forEach(input => {
            if(input.name === event.target.name) {
                input.checked = event.target.checked;
            }
        });

        inputs.forEach(input => {
            if(input.name[0] === event.target.name[0]) {
                if(input.name !== event.target.name) {
                    input.disabled = true;
                }
            } else {
                input.disabled = false;
            }
        });

        this.setState({inputs});
    };

    render() {
        const checkboxes = this.state.inputs.map(input => {
            const { name, checked, disabled } = input;
            return <Checkbox
                        key={name}
                        name={name}
                        checked={checked}
                        disabled={disabled}
                        onInputChange={this.handleInputChange}
                    />
        });

        return (
            <form onChange={this.handleInputChange} className="checkboxes">
                {checkboxes}
            </form>
        );
    } 
}

export default Checkboxes;