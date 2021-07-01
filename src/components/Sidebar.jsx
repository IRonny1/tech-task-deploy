import React, { useContext } from 'react';
import { PatientContext } from '../App';
import { useHistory } from 'react-router-dom';

const Sidebar = () => {
    const { patients, setSelectedPatient, setComments, sidebarPatients, setSidebarPatients } = useContext(PatientContext);
    const history = useHistory();

    const setNewSelectedPatient = async (patient) => {
        setSelectedPatient(patient);

        let newSelectedPatientComments = patient.comments;
        if (newSelectedPatientComments === undefined) {
            newSelectedPatientComments = [];
        }
        let selectedUserComment = [];

        newSelectedPatientComments.forEach(c => {
            selectedUserComment = [...selectedUserComment, { id: c.id, comment: c.comment }];
        });
        setComments(selectedUserComment);
        history.push(`/TechTask/${patient.id}`);
    };

    const searchPatientByName = (e) => {
        const inputValue = e.target.value.trim();
        const usablePatients = patients.filter(e => e.firstname == inputValue);
        if (usablePatients != 0) {
            setSidebarPatients(usablePatients);
        } else {
            setSidebarPatients(patients);
        }
    };

    return (
        <div className='sidebar'>
            <div className='search'>
                <input type="text" placeholder='Search' className='form-control' onChange={searchPatientByName} />
                <a href="/TechTask/new"><button className='btn btn-dark'>New patient</button></a>
            </div>
            <div className='list'>
                <ul>
                    {sidebarPatients.map((p) =>
                        <li key={p.id} id={p.id} onClick={() => setNewSelectedPatient(p)}>
                            <div id={p.id} className='name'>
                                {p.firstname}
                            </div>
                            <div id={p.id} className='age'>
                                {p.birth}
                            </div>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;