import { makeStyles } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import ioc from '../../../lib/ioc';

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
    const handler = () => {
        ioc.routerService.push('/sign-up-form')
    }

export const Profile = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div>
                <PersonIcon style={{ color: '#FCF5EF' }}/>
            </div>
            <div className={classes.text} onClick={handler}>
                Профиль
            </div>
        </div>

    )
}
    
  
export default Profile;