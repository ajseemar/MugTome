import React from 'react';
import CreatePostForm from '../posts/create_post_form';

const Modal = ({ modal, closeModal }) => {
    if (!modal) return null;
    let component;
    switch (modal) {
        case 'create_post':
            component = <CreatePostForm />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default Modal;