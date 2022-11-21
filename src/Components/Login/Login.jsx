
// Fix saving logged in user to 'Auth' key in storage

import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const userObject = {
        email: "",
        password: ""
    }

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState();

    const navigate = useNavigate();

    const submitLogIn = (e) => {
        e.preventDefault();

        console.log(userObject);

        const signedUpUsers = JSON.parse(localStorage.getItem('user'));
        console.log(signedUpUsers);

        const userExist = signedUpUsers.find((storedUser) => {
            const validEmail = userObject.email === storedUser.email;
            const validPassword = userObject.password === storedUser.password;
            
            // Save current logged in user to localstorage
            localStorage.setItem('authorized', storedUser.email);
            
            return validEmail && validPassword;
        });

        if (userExist) {
            console.log('Login successfull.')
            navigate("/movies/addMovie")


        } else {
            console.log('Login failed.')
            setShowModal(true)
            setModalMessage('Seems like you are not signed up yet? Or you wrote the wrong combination.')
        }

    };

    const hideLoginModal = () => {
        setShowModal(false);
    }


    return (
        <div className="form-container">
            <h3 className="form-header">Already have an account?</h3>
            <form onSubmit={(e) => submitLogIn(e)}>
                <input type="email" placeholder="Email" onChange={(e) => userObject.email = e.target.value} />
                <input type="password" placeholder="Password" onChange={(e) => userObject.password = e.target.value} />
                <input className="submit-btn" type="submit" value="Login" />
            </form>

            <Modal show={showModal} modalMessage={modalMessage} handleClick={hideLoginModal}></Modal>
        </div>
    )
}

export default Login;