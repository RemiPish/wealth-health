import React, { useState } from 'react';
import './CreateEmployee.scss';
import Form from '../../components/Form/Form';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/employeeSlice';
import Modal from 'react-modal'


Modal.setAppElement('#root');
export default function CreateEmployee() {
    //gere l'état de la modal a la fin de soumission
    const [modalIsOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    //gere la soumission du formulaire quand c'est reussi
    const handleFormSubmit = (employee) => {
        dispatch(addEmployee(employee)); //dispatch l'action addEmployee avec les données du formulaire
        console.log('modal')
        setIsOpen(true); //ouvre la modale
    };

    //gere l'état de fermeture de la modale
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="page">
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <h2 className="subtitle">Create Employee</h2>
                <Form onFormSubmit={handleFormSubmit} employeeData={{}} />
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Employee Created"
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <button onClick={closeModal} style={{ float: 'right' }}>✕</button>
                    <div>Employee Created!</div>
                </Modal>
            </div>

        </div>
    );
}