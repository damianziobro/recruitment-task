import React from 'react';

import './FormField.css';

function FormField({ field_name, label, required, type, value, loading, onInputChange }) {
    return(
        <label htmlFor={field_name} className="label">
            {label}
            <span className={required ? "label__required" : "label__required label__required--hidden" }>
                *
            </span>
            <input
                className="label__input"
                type={type}
                value={value}
                id={field_name}
                name={field_name}
                onChange={onInputChange}
                disabled={loading}
                required={required}
            />
        </label>
    );
}

export default FormField;