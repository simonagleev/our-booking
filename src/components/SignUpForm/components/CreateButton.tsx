import { makeStyles } from '@mui/styles';
import ioc from '../../../lib/ioc';


const useStyles = makeStyles({
    counterButton: {
      background: '#FF7235',
      color: '#fff',
      borderRadius: '3.5px',
      border: 'none',
      minHeight: '40px',
      margin: '0 .8em .8em 0',
      
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
        background: '#ff6929',
        transition: '250ms',
      },
      '&:active': {
        boxShadow: '0 3px 0 #bfa199',
        transition: '250ms',
      } 
    },
  });

  

export const CreateButtom = () => {
   const classes = useStyles(); 
   return (
       <button className={classes.counterButton} onClick={() => ioc.personSerice.onUserRegister()}>
           Создать аккаунт
       </button>
   )
}
export default CreateButtom;