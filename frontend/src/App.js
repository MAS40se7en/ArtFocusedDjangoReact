import React from 'react';
import { BrowserRouter as Router, Route, Routes } from'react-router-dom';
import Home from './Containers/Home';
import Login from './Containers/Login';
import Signup from './Containers/Signup';
import Activate from './Containers/Activate';
import ResetPassword from './Containers/ResetPassword';
import ResetPasswordConfirm from './Containers/ResetPasswordConfirm';
import Layout from './hocs/Layout';


const App = () => (
    <Router>
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
                <Route exact path='/activate/:uid/:token' element={<Activate />} />
                <Route exact path='/reset-password' element={<ResetPassword />} />
                <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
            </Routes>
        </Layout>
    </Router>
    );

export default App;
