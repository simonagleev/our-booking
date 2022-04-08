import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    text: {
        color: '#FCF5EF',
        fontFamily: 'Montserrat',
        fontSize: '1.25em',
        fontWeight: '700',
        lineHeight: '1.5e',
        letterSpacing: '0em',
        textAlign: 'center',
    },
});

export const Currency = () => {
    const classes = useStyles()
    return (
        <div className={classes.text}>
            RUB
        </div>  
    )
}

export default Currency;