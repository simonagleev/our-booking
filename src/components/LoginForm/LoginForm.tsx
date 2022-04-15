
import { FieldType, One, TypedField } from "react-declarative";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { makeStyles } from '@mui/styles';
import clsx from "clsx";

import { useState } from "react";

import Button from "../common/Button/Button";
import ModalDialog from "../common/ModalDialog";

import ioc from "../../lib/ioc";

const useStyles = makeStyles({
    root: {
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginBottom: '25px',
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

    const handleClose = () => {
        ioc.modalService.setLoginModal(false);
    };

    return (
        <ModalDialog open className={clsx(classes.root, 'fuck')} onClose={handleClose}>
            <Box className={classes.box}>
                <Typography variant="h2" color="primary" className={classes.text}>
                    Вход
                </Typography>
                <One
                    fields={fields}
                    onChange={handleChange}
                    onInvalid={handleInvalid}
                />
                <Button disabled={!data} onClick={handleAuth}>
                    Войти
                </Button>
            </Box>
        </ModalDialog>
    )
}

export default LoginForm;