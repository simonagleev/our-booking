import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { colorBackground } from '../../../../../theme';


const usetyles = makeStyles({
    root: {
        fontFamily: 'Montserrat',
        width: '324px',
        minHeight: '114px',
        background: '#FCF5EF',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
        marginRight: '10px',
    },
    container: {
        padding: '10px 10px 15px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    title: {
        color: colorBackground,
        fontSize: '1.25em',
        lineHeight: '1.5em',
        padding: '13px 0 0 10px',
    },  
});

interface ICommonCardProps {
    children: React.ReactNode;
    title: string,
}

export const CommonCard = ({
    children,
    title,
    ...other
}: ICommonCardProps) => {
    const styles = usetyles()

    return (
        <Paper className={styles.root}>
            <Typography className={styles.title}>
                {title}
            </Typography>
            <Box className={styles.container}>
                {children}
            </Box>
        </Paper>
    )
}

export default CommonCard;