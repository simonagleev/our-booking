
import Modal from '@mui/material/Modal';
import SignUpForm from '../SignUpForm';
import ioc from '../../lib/ioc';
import { observer } from 'mobx-react';

  
export const CurrencyModal = () => {
    
    const handleClose = () => {
        ioc.modalService.setRegisterModal(false);
        console.log('TEst close')
    }
    return (
    <>
        <Modal
            open={ioc.modalService.registerModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <SignUpForm/>
        </Modal>
    </>
    )
}

export default observer(CurrencyModal);

