import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';

import { useState } from "react";
import { FieldType, One, TypedField } from "react-declarative";
import ioc from "../../lib/ioc";

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
        paddingTop: '45px',
        paddingBottom: '40px',
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
});

const fields: TypedField<IAuthData>[] = [
    {
        type: FieldType.Text,
        fieldRightMargin: "0",
        fieldBottomMargin: "1",
        columns: '12',
        name: 'phone',
        title: 'Телефон',
        description: 'Required',
        inputFormatterTemplate: '+0 (000) 000-00-00',
        inputFormatterAllowed: /[0-9]/,
    },
    {
        type: FieldType.Text,
        fieldRightMargin: "0",
        fieldBottomMargin: "1",
        columns: '12',
        name: 'password',
        title: 'Пароль',
        description: 'Required',
        isInvalid: ({
            password,
        }) => !password.match(/[0-9a-zA-Z]/) ? 'Доступны символы 0-9, A-Z, a-z' : null,
        inputFormatterTemplate: '00000000000000000000',
    },
    {
        type: FieldType.Checkbox,
        title: 'Запомнить',
        name: 'remember',
        defaultValue: true,
    },
]

interface IAuthData {
    phone: string,
    password: string
    remember: boolean
}

export const LoginForm = () => {

    const classes = useStyles()

    const [data, setData] = useState<IAuthData | null>(null)

    const handleChange = (data: IAuthData, initial: boolean) => {
        if (!initial) {
            setData(data)
        }
    };

    const handleInvalid = () => {
        setData(null)
    }

    const handleAuth = () => {
        if (data) {
            ioc.authService.auth(data.phone, data.phone, data.remember)
        }
    };

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
                <One
                    fields={fields}
                    onChange={handleChange}
                    onInvalid={handleInvalid}
                />
                <Button disabled={!data} className={classes.loginButton} onClick={handleAuth}>
                    Войти
                </Button>
            </Box>
        </Paper>
    )
}

export default LoginForm;