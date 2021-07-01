import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import PatientService from './components/services/PatientService';

export const PatientContext = createContext([{}]);

function App() {
  const [selectedPatient, setSelectedPatient] = useState([]);
  const [patients, setPatients] = useState([]);
  const [comments, setComments] = useState([]);
  const [sidebarPatients, setSidebarPatients] = useState([]);

  async function patientsHasChanged() {
    const patientService = new PatientService();
    const loadedPatients = await patientService.getPatients();
    let newSelectedPatientComments = [];
    let selectedUserComment = [];

    const newSelectedPatient =
    {
      id: loadedPatients[0].id,
      firstname: loadedPatients[0].firstname,
      lastname: loadedPatients[0].lastname,
      age: loadedPatients[0].age,
      birth: loadedPatients[0].birth,
      gender: loadedPatients[0].gender,
      country: loadedPatients[0].country,
      state: loadedPatients[0].state,
      city: loadedPatients[0].city,
      currentComments: loadedPatients[0].comments
    };

    newSelectedPatientComments = newSelectedPatient.currentComments;
    newSelectedPatientComments.forEach(c => {
      selectedUserComment = [...selectedUserComment, { id: c.id, comment: c.comment, date: c.date }];
    });

    setPatients(loadedPatients);
    setSidebarPatients(loadedPatients);
    setSelectedPatient(newSelectedPatient);
    setComments(selectedUserComment);
  };

  useEffect(() => {
    patientsHasChanged();
  }, []);

  return (
    <div className='app'>
      <PatientContext.Provider value={{ selectedPatient, setSelectedPatient, patients, setPatients, patientsHasChanged, comments, setComments, sidebarPatients, setSidebarPatients }}>
        <Sidebar />
        <Content />
      </PatientContext.Provider>
    </div>
  );
}

export default App;
