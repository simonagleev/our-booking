import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import ioc from '../../../lib/ioc';
import RegisterModal from '../../RegisterModal';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
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

const open = () => {
    ioc.modalService.registerModalOpen()
}

export const Profile = () => {
    const classes = useStyles()
    return (
        <div className={classes.root} onClick={open}>
            <div>
                <PersonIcon style={{ color: '#FCF5EF' }}/>
                <RegisterModal/>
            </div>
            <div className={classes.text} >
                Профиль
            </div>
        </div>

    )
}
    
  
export default Profile;