import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContentInfo from './ContentInfo';
import NewPatient from './NewPatient';
import EditPatient from './EditPatient';
import NotFound from './NotFound';
import Sidebar from './Sidebar';
const Content = () => {
    return (
            <div className='content'>
                <Router>
                    <Switch>
                        <Route exact path='/TechTask' component={ContentInfo} />
                        <Route exact path='/TechTask/new' component={NewPatient} />
                        <Route exact path='/TechTask/edit' component={EditPatient} />
                        <Route exact path='/TechTask/:id' component={ContentInfo}/>
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
    );
}

export default Content;