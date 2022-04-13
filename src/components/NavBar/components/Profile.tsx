import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import ioc from '../../../lib/ioc';
import RegisterModal from '../../RegisterModal';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        flex: 1
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
    ioc.modalService.setRegisterModal(true)
}

export const Profile = () => {
    const classes = useStyles()
    return (
        <div className={classes.root} >
            <div >
                <PersonIcon style={{ color: '#FCF5EF' }} onClick={open}/>
                <RegisterModal/>
            </div>
            <div className={classes.text} onClick={open}>
                Профиль
            </div>
        </div>
    )
}
    
  
export default Profile;