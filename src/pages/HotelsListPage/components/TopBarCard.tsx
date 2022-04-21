
import EventNoteIcon from '@mui/icons-material/EventNote';
import { Button } from '@mui/material';
import { orange } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { colorOrange } from '../../../theme';



const usetyles = makeStyles({
    root: {
        fontFamily: 'Montserrat',
        width: '324px',
        minHeight: '114px',
        background: '#FCF5EF',
        borderRadius: '10px',
        display: 'flex',
        
        alignItems: 'center',
        marginBottom: '10px',
        marginRight: '10px',
    },
    container: {
        display: 'flex', 
    },
    title: {

    },
    icon: {
        color: '#FCF5EF',
        width: '60px',
        height: '65px',
        
    },
    iconBackground: {
        background: colorOrange,
        borderRadius: '17px'
    }
})  

export const TopBar = () => {
    const classes = usetyles()

    return (
        <Paper className={classes.root}>
            <Box>
                <Button className={classes.iconBackground}>
                    <EventNoteIcon className={classes.icon} sx={{width: '60px',
        height: '65px'}}/>
                </Button>
            </Box>
            
            <Typography className={classes.title}>
                hehehe
            </Typography>
        </Paper>
    )
}

export default TopBar;