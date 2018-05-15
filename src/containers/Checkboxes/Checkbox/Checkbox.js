import React from 'react';

function Checkbox({ name, checked, disabled, onInputChange }) {
    return (
        <label htmlFor={name}>
            {name}
            <input
                type="checkbox"
                id={name}
                name={name}
                value={name}
                onChange={onInputChange}
                disabled={disabled}
            />
        </label>
    );
}

export default Checkbox;