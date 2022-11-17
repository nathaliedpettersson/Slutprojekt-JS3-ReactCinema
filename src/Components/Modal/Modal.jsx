import React from 'react';

const Modal = (props) => {
    return (
        <>
        <div></div>
        {props.show && (
            <div className="modal">
                <h1>{props.modalMessage}</h1>
                <button onClick={props.handleClick}>Got it!</button>
            </div>
        )}
        </>
    );
}

export default Modal;