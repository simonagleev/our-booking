import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

import { colorBackground } from "../../../theme";
import ioc from "../../../lib/ioc";

const useStyles = makeStyles({
    root: {
      cursor: 'pointer',
      color: colorBackground,
      
    },
})

export const LogInBot = () => {

    const classes = useStyles()

    const open = () => {
        ioc.modalService.setRegisterModal(false)
        ioc.modalService.setLoginModal(true)
    }

    return (
        <Typography style={{textAlign: 'center', padding: '10px 0'}} >
            Есть аккаунт? <span onClick={open} className={classes.root}>Log In</span>
        </Typography>
    )
}

export default LogInBot;