import React, { useState } from 'react';
import Modal from './components/Modal';
import { ReactComponent as CheckIcon } from './assets/verified.svg';
import './styles/main.css';
import './styles/reset.css';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="main-container">
            <button className="modal-btn-open primary" onClick={toggleModal}>
                Open Modal
            </button>
            <Modal isOpen={isOpen} onClose={toggleModal}>
                <div className="modal-content">
                    <CheckIcon className="modal-img" />
                    <h1 className="modal-title">Congratulations!</h1>
                    <p className="modal-text">You are ready to use modal-component-hw</p>
                    <div className="modal-link-container">
                        <button className="modal-link primary" onClick={toggleModal}>
                            Back
                        </button>
                    </div>
                </div>
            </Modal>
        </main>
    );
}

export default App;

