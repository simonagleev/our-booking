import Modal from '@mui/material/Modal';

import { observer } from 'mobx-react';
import LoginForm from '../LoginForm';

import ioc from '../../lib/ioc';


export const LoginModal = () => {
    
    const handleClose = () => {
        ioc.modalService.setLoginModal(false);
    }

    return (
        <>
            <Modal
                open={ioc.modalService.loginModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <LoginForm/>
            </Modal>
        </>
    )
}

export default observer(LoginModal);

