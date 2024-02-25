import React, { useState } from 'react';
import "./Form.scss";
import FieldInput from "../FieldInput/FieldInput";
import Dropdown from '../Dropdown/Dropdown';
import states from '../../data/dataStates';
import departments from '../../data/dataDepartments';
import Datepicker from 'simple-react-pikaday';



export default function Form({ onFormSubmit, employeeData }) {

    const [firstName, setFirstName] = useState(employeeData.firstName || '');
    const [lastName, setLastName] = useState(employeeData.lastName || '');
    const [street, setStreet] = useState(employeeData.street || '');
    const [city, setCity] = useState(employeeData.city || '');
    const [dateOfBirth, setDateOfBirth] = useState(employeeData.dateOfBirth || '');
    const [startDate, setStartDate] = useState(employeeData.startDate || '');
    const [state, setState] = useState(employeeData.state || '');
    const [zipCode, setZipCode] = useState(employeeData.zipCode || '');
    const [department, setDepartment] = useState(employeeData.department || '');

    const [stateError, setStateError] = useState('');
    const [departmentError, setDepartmentError] = useState('');
    const [dateOfBirthError, setDateOfBirthError] = useState('');
    const [startDateError, setStartDateError] = useState('');

    const validateForm = () => {
        let isValid = true;
        console.log("State: ", state, " Department: ", department);
        if (!state || state === " " || state === "Select a state") {
            setStateError("Please select a state.");
            isValid = false;
        } else {
            setStateError('');
        }

        if (!department || department === " " || department === "Select a department") {
            setDepartmentError("Please select a department.");
            isValid = false;
        } else {
            setDepartmentError('');
        }

        if (!dateOfBirth || dateOfBirth === " " || dateOfBirth === "Select a date of birth") {
            setDateOfBirthError("Please select a date of birth.");
            isValid = false;
        } else {
            setDateOfBirthError('');
        }

        if (!startDate || startDate === " " || startDate === "Select a start date") {
            setStartDateError("Please select a start date.");
            isValid = false;
        } else {
            setStartDateError('');
        }

        return isValid;
    };

    const initializeForm = () => {
        setFirstName('');
        setLastName('');
        setStreet('');
        setCity('');
        setState(null);
        setZipCode('');
        setDepartment(null);
        setDateOfBirth('');
        setStartDate('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            console.log("Validation failed.");
            return;
        }
        onFormSubmit({
            firstName,
            lastName,
            street,
            city,
            dateOfBirth,
            startDate,
            state,
            zipCode,
            department,
        });
        initializeForm();
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <FieldInput
                    type="text"
                    name="firstname"
                    labelTitle="First Name:"
                    value={firstName}
                    setInput={setFirstName}
                />
                <FieldInput
                    type="text"
                    name="lastname"
                    labelTitle="Last Name:"
                    value={lastName}
                    setInput={setLastName}
                />

                <div className="label">
                    <p class="title">Birth Date:</p>
                    <Datepicker
                        label="Birth Date"
                        value={dateOfBirth}
                        onChange={setDateOfBirth}
                    />
                    {dateOfBirthError && <div className="error-message">{dateOfBirthError}</div>}
                </div>
                <div className="label">
                    <p class="title">Start Date:</p>
                    <Datepicker
                        label="Start Date"
                        value={startDate}
                        onChange={setStartDate}
                    />
                    {startDateError && <div className="error-message">{startDateError}</div>}
                </div>

                <div className="address">
                    <FieldInput
                        type="text"
                        name="street"
                        labelTitle="Street:"
                        value={street}
                        setInput={setStreet}
                    />
                    <FieldInput
                        type="text"
                        name="city"
                        labelTitle="City:"
                        value={city}
                        setInput={setCity}
                    />

                    <Dropdown
                        label="State"
                        id="state-dropdown"
                        options={states}
                        value={state}
                        onChange={optionState => optionState ? setState(optionState) : setState(' ')}
                    />
                    {stateError && <div className="error-message">{stateError}</div>}

                    <FieldInput
                        type="number"
                        name="zipcode"
                        labelTitle="Zipcode:"
                        value={zipCode}
                        setInput={setZipCode}
                    />
                </div>
                <Dropdown
                    label="Department"
                    id="department-dropdown"
                    options={departments}
                    value={department}
                    onChange={optionDepartment => optionDepartment ? setDepartment(optionDepartment) : setDepartment(' ')}
                />
                {departmentError && <div className="error-message">{departmentError}</div>}
                <button type="submit">Save</button>
            </form>
        </>
    );
};
