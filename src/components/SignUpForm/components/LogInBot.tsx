import { Typography } from "@mui/material";
import ioc from "../../../lib/ioc";


export const LogInBot = () => {
    const test = () => {
        ioc.personSerice.authUser()    
    }
    const open = () => {
        ioc.modalService.setRegisterModal(false)
        ioc.modalService.setLoginModal(true)
    }

    return (
        <Typography style={{textAlign: 'center', padding: '10px 0'}}>
            Есть аккаунт? <a href="###" onClick={open}>Log In</a>
        </Typography>
    )
}

export default LogInBot;