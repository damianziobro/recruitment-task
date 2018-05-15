import React from 'react';

function Checkbox({ name, checked, disabled, onInputChange }) {
    return (
        <label htmlFor={name}>
            <input
                type="checkbox"
                id={name}
                name={name}
                value={name}
                onChange={onInputChange}
                disabled={disabled}
            />
            {name}
        </label>
    );
}

export default Checkbox;