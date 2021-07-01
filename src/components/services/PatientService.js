import axios from 'axios';

export default class PatientService {
    savePatient(patient) {
        axios.post('http://localhost:8090/patientLoad', {
            firstname: patient.firstname,
            lastname: patient.lastname,
            age: patient.age,
            birth: patient.birth,
            gender: patient.gender,
            country: patient.country,
            state: patient.state,
            city: patient.city
        })
    }

    saveComment(newCommentForDatabase) {
        axios.post('http://localhost:8090/createComment', newCommentForDatabase)
    };

    getPatients() {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:8090/patientLoad')
                .then((res) => {
                    let patientsDB = res.data;
                    let patients = [];

                    for (let i = 0; i < patientsDB.length; i++) {
                        patients = [...patients,
                        {
                            id: patientsDB[i].id,
                            firstname: patientsDB[i].firstname,
                            lastname: patientsDB[i].lastname,
                            age: patientsDB[i].age,
                            birth: patientsDB[i].birth,
                            gender: patientsDB[i].gender,
                            country: patientsDB[i].country,
                            state: patientsDB[i].state,
                            city: patientsDB[i].city,
                            comments: patientsDB[i].comments
                        }];
                    };

                    resolve(patients);
                });
        });
    };

    getComments() {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:8090/commentsLoad')
                .then((res) => {
                    let comments = res.data;
                    resolve(comments);
                });
        });
    };

    editPatient(editedPatientInfo) {
        axios.post('http://localhost:8090/patientLoad', editedPatientInfo);
    }

    deletePatient(patientId) {
        axios.delete(`http://localhost:8090/patientLoad/${patientId}`);
    }

    deleteComment(commentId) {
        axios.delete(`http://localhost:8090/commentsLoad/${commentId}`);
    }
};


