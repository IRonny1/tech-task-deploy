import React, { useContext } from 'react';
import ContentHeader from './ContentHeader';
import { PatientContext } from '../App';
import PatientService from './services/PatientService';
const moment = require('moment');

const ContentInfo = () => {
    const { selectedPatient, comments, setComments } = useContext(PatientContext);

    const commentInput = React.createRef();

    const addComment = () => {
        const date = moment();
        setComments([...comments, { comment: commentInput.current.value, date: date }]);
        console.log(comments);
        const newCommentForDatabase = { comment: commentInput.current.value, patient_id: selectedPatient.id, date: date };
        const patientService = new PatientService;
        patientService.saveComment(newCommentForDatabase);
    };

    const removeComment = (id) => {
        const patientService = new PatientService;
        const newComments = comments.filter(el => id != el.id);
        setComments(newComments);
        patientService.deleteComment(id);
    }

    return (
        <div className='content'>
            <ContentHeader />
            <div className='info'>
                <div className='short-info'>
                    <table>
                        <tbody>
                            <tr>
                                <td>Date of Birth:</td>
                                <td className='odd'>{selectedPatient.birth}</td>
                            </tr>
                            <tr>
                                <td>Sex:</td>
                                <td className='odd'>{selectedPatient.gender}</td>
                            </tr>
                            <tr>
                                <td>Country:</td>
                                <td className='odd'>{selectedPatient.country}</td>
                            </tr>
                            <tr>
                                <td>State:</td>
                                <td className='odd'>{selectedPatient.state}</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td className='odd'>{selectedPatient.city}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='comments'>
                    <div>
                        <p>
                            <h4 className='h4'>Comments:</h4>
                        </p>
                        <ul>
                            {comments.map((c) =>
                                <li>
                                    <div className='new-comment'>
                                        <div>
                                            <b>{moment(c.date).format('LLL')}</b>
                                        </div>
                                        <div>
                                            {c.comment}
                                        </div>
                                    </div>
                                    <button className='btn btn-dark' onClick={() => removeComment(c.id)}>-</button>
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className='create-commentInput'>
                        <input ref={commentInput} className='form-control' type="text" placeholder='Write comment for patient' />
                        <button onClick={addComment} className='btn btn-dark'>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentInfo;