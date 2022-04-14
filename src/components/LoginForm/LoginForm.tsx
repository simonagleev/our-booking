import { ClassNames } from "@emotion/react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';
import { colorBackgroundPaper, colorOrange } from "../../theme";

const useStyles = makeStyles({
    root: {
        background: colorBackgroundPaper,
        borderRadius: '80px',
        margin: '5% auto 0',
        width: '40%',
        maxWidth: '900px',
        minWidth: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '1.25em',
        lineHeight: '1.5em',
        color: colorOrange,
    },
    checkBox: {
        color: colorOrange
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
   

        '&:hover': {
            background: '#ff6929'
        },
    }
});


export const LoginForm = () => {

    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <Box
                className={classes.box}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Typography className={classes.text}>
                    Вход
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Телефон"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Пароль"
                    variant="outlined"
                />
                <FormControlLabel
                    control={<Checkbox
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