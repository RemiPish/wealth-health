import React from 'react';
import Select from 'react-select';
import "./Dropdown.scss";

const Dropdown = ({ label, options, value, onChange, id, placeholder }) => {

    const formattedOptions = options.map(option => ({
        value: option.name,
        label: option.name
    }));

    const selectedOption = formattedOptions.find(option => option.value === value) || null;

    const handleChange = (selectedOption) => {
        onChange(selectedOption.value || " ");
    };

    return (
        <div className="dropdown">
            {label && <p class="title">{label}</p>}
            <Select
                inputId={id}
                value={selectedOption}
                onChange={handleChange}
                options={formattedOptions}
                classNamePrefix="react-select"
            />
        </div>
    );
};

export default Dropdown;