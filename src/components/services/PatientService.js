import axios from 'axios';

export default class PatientService {
    savePatient(patient) {
        axios.post('https://stormy-castle-76619.herokuapp.com/patientLoad', {
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
        axios.post('https://stormy-castle-76619.herokuapp.com/createComment', newCommentForDatabase)
    };

    getPatients() {
        return new Promise((resolve, reject) => {
            axios.get('https://stormy-castle-76619.herokuapp.com/patientLoad')
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
            axios.get('https://stormy-castle-76619.herokuapp.com/commentsLoad')
                .then((res) => {
                    let comments = res.data;
                    resolve(comments);
                });
        });
    };

    editPatient(editedPatientInfo) {
        axios.post('https://stormy-castle-76619.herokuapp.com/patientLoad', editedPatientInfo);
    }

    deletePatient(patientId) {
        axios.delete(`https://stormy-castle-76619.herokuapp.com/patientLoad/${patientId}`);
    }

    deleteComment(commentId) {
        axios.delete(`https://stormy-castle-76619.herokuapp.com/commentsLoad/${commentId}`);
    }
};


