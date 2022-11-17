// navigate to /movies/addMovie

// Fix saving logged in user to 'Auth' key in storage

import React, {useState} from 'react';
import Modal from '../Modal/Modal';

const Login = (props) => {

    const userObject = {
        email: "",
        password: ""
    }

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState();
   
   const submitLogIn = (e) => {
    e.preventDefault();

    console.log(userObject);

    // If we find a combination in local storage, we should be navigated to the "/movies" page which should show us the button for "add movie"

    const signedUpUsers = JSON.parse(localStorage.getItem('user'));
    console.log(signedUpUsers);

    const userExist = signedUpUsers.find((storedUser) => {
        const validUser = userObject.email === storedUser.email && userObject.password === storedUser.password 
        
        setShowModal(true)
        setModalMessage('Login successful.')
        return validUser
    });

    if (!userExist) {
        setShowModal(true)
        setModalMessage('Seems like you are not signed up yet? Or you wrote the wrong combination.')
    }

   } 

   const hideLoginModal = () => {
    setShowModal(false);
   }

      

    return (
<div>
    <form onSubmit={(e) => submitLogIn(e)}>
        <input type="email" placeholder="Email" onChange={(e) => userObject.email = e.target.value} />
        <input type="password" placeholder="Password" onChange={(e) => userObject.password = e.target.value} />
        <input type="submit" value="Login"/>
    </form>

    <Modal show={showModal} modalMessage={modalMessage} handleClick={hideLoginModal}></Modal>
</div>
    )
}

export default Login;