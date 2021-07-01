import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PatientContext } from '../App';
import PatientService from './services/PatientService';

const ContentHeader = () => {
    let { selectedPatient, setSidebarPatients, sidebarPatients } = useContext(PatientContext);
    const history = useHistory();

    const deletePatient = async () => {
        const patientService = new PatientService;
        const newSidebarPatients = sidebarPatients.filter(el => el.id != selectedPatient.id);
        setSidebarPatients(newSidebarPatients);
        patientService.deletePatient(selectedPatient.id);
        history.push('/TechTask/');
    }

    const pushToEditComponent = () => {
        history.push('/TechTask/edit');
    }

    return (
        <div className='header'>
            <p>{selectedPatient.firstname}</p>
            <p>{selectedPatient.lastname}</p>
            <p id='age'>{selectedPatient.age} years old</p>
            <div> 
                <button onClick={pushToEditComponent} className='btn btn-dark'>Edit</button>
                <button onClick={deletePatient} className='btn btn-dark'>Delete</button>
            </div>
        </div>
    );
}

export default ContentHeader;