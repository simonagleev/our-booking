import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';

import { useState } from "react";

import { colorBackgroundPaper, colorOrange } from "../../theme";
import Button from "../common/Button/Button";
import CheckBox from "../common/CheckBox";


const useStyles = makeStyles({
    root: {
        background: colorBackgroundPaper,
        borderRadius: '80px',
        margin: '0 auto ',
        width: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
        height: '350px',
        width: '350px',
    },
    text: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '1.25em',
        lineHeight: '1.5em',
        color: colorOrange,
        textAlign: 'center',
    },
    checkBox: {
        color: colorOrange,
    },
    loginButton: {
        background: colorOrange,
        color: colorBackgroundPaper,
        borderRadius: '18px',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '1.25em',
        lineHeight: '24px',
        display: 'flex',
        flex: 0.1,
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '125px',
        maxHeight: '55px',
        '&:hover': {
            background: '#ff6929'
        },
    },
    forMargin: {

    }
});


export const LoginForm = () => {

    const classes = useStyles()

    const [errorState, setErrorState] = useState(false);
    const [phoneValue, setPhoneValue] = useState(null)

    const handleUserInput = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setPhoneValue(value);
        console.log('phoneValue')
        console.log(phoneValue)
    }

    return (
        <Paper className={classes.root}>
            <Box
                className={classes.box}
                component="form"
                sx={{
                    gap: '15px',
                    '& > *': {
                        width: '100%',
                    },
                }}
                noValidate
                autoComplete="off"
            >
                <Typography className={classes.text}>
                    Вход
                </Typography>
                <TextField
                    id="outlined-basic"
                    name="phone"
                    label="Телефон"
                    variant="outlined"
                    error={false}

                    value={phoneValue}
                    onChange={handleUserInput}
                />
                <TextField
                    id="outlined-basic"
                    label="Пароль"
                    variant="outlined"
                />
                <FormControlLabel
                    control={<CheckBox
                        className={classes.checkBox}
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    }
                    label="Запомнить меня"
                />
                <Button className={classes.loginButton}>
                    Войти
                </Button>
            </Box>
        </Paper>
    )
}

export default LoginForm;