import React from 'react';
import Select from 'react-select';
import "./Dropdown.scss";

const Dropdown = ({ label, options, value, onChange, id }) => {

    //options pour react-select avec value et label pour afficher les valeurs dans le dropdown
    const formattedOptions = options.map(option => ({
        value: option.name, //valeur choisie quand on clique sur une option
        label: option.name  //ce qu'on affichera comme valeur dans le dropdown 
    }));

    //on cherche la valeur selectionnée par l'utilisateur par la liste des options
    const selectedOption = formattedOptions.find(option => option.value === value) || null;

    //gestion quand on change la valeur
    const handleChange = (selectedOption) => {
        onChange(selectedOption.value || " ");
    };

    return (
        <div className="dropdown">
            {label && <p className="title">{label}</p>}
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