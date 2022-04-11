
import { makeStyles } from '@mui/styles';

import GoogleSVG from './GoogleSVG';

const useStyles = makeStyles({
  googleButton: {
    background: '#2D3748',
    color: '#fff',
    borderRadius: '3.5px',
    border: 'none',
    minHeight: '40px',
    marginRight: '.8em',

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '0.8em',
    lineHeight: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem',
    transition: '250ms',

    '&:hover': {
      cursor: 'pointer',
      background: '#2a313e',
      transition: '250ms',
    },
    '&:active': {
      boxShadow: '0 3px 0 #bfa199',
      transition: '250ms',
    }
  }
});


export const GoogleSignInButton = () => {
  const classes = useStyles();
  return (
    <button className={classes.googleButton}>
      <GoogleSVG />
      <div style={{ marginLeft: '8px' }}>
        Продолжить через Google
      </div>
    </button>
  )
}
export default GoogleSignInButton;

