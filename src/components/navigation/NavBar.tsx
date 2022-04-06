import AutoSizer from 'react-declarative/components/common/AutoSizer';

import { makeStyles } from '@mui/styles';

import Currency from './components/Currency';
import Language from './components/Language';
import Profile from './components/Profile';


const useStyles = makeStyles({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        maxWidth: '1260px',
        margin: '22px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {

    },
    rightPart: {
        width: '26.5%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});

export const NavBar = () => {
    const classes = useStyles();
    return (
        <nav className={classes.container}>
            <div className={classes.logo}>
                LOGO
            </div>
            <div className={classes.rightPart}>
                <Profile/>
                <Language/>
                <Currency/>
            </div>
        </nav>
    )
};

export default NavBar;