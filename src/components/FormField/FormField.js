import React from 'react';

function FormField({ field_name, label, required, type, value, loading, onInputChange }) {
    return(
        <label htmlFor={field_name}>
            {label}
            <span className={required ? "label__required" : "label__required label__required--hidden" }>
                *
            </span>
            <input
                type={type}
                value={value}
                id={field_name}
                onChange={onInputChange}
                disabled={loading}
                required={required}
            />
        </label>
    );
}

export default FormField;