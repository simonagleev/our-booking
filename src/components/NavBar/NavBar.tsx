import AutoSizer from 'react-declarative/components/common/AutoSizer';

import { makeStyles } from '@mui/styles';

import Currency from './components/Currency';
import Language from './components/Language';
import Profile from './components/Profile';


const useStyles = makeStyles({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        width: '100%',
        maxWidth: '1260px',
        margin: '22px auto',
        display: 'flex',
        justifyContent: 'stretch',
        alignItems: 'center',
    },
    logo: {
        color: '#FCF5EF'
    },
    rightPart: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: .5
    },
    empty: {
        flex: 1,
    }
});

export const NavBar = () => {
    const classes = useStyles();
    return (
        <nav className={classes.container}>
            
            <div className={classes.logo}>
                Hotel-Motel
            </div>
            <div className={classes.empty}>

            </div>
            <div className={classes.rightPart}>
                <Profile/>
                <div className={classes.empty}></div>
                <Language/>
                <div className={classes.empty}></div>
                <Currency/>
            </div>
        </nav>
    )
};

export default NavBar;