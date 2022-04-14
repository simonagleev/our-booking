import { Typography } from "@mui/material";
import ioc from "../../../lib/ioc";


export const LogInBot = () => {
    const test = () => {
        ioc.personSerice.authUser()    
    }
    return (
        <Typography style={{textAlign: 'center', padding: '10px 0'}}>
            Есть аккаунт? <a href="###" onClick={test}>Log In</a>
        </Typography>
    )
}

export default LogInBot;