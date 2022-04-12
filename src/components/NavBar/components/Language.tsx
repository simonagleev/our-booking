import LanguageIcon from '@mui/icons-material/Language';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        cursor: 'pointer',
    },
});

export const Language = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <LanguageIcon style={{ color: '#FCF5EF', margin: '0 10px'}}/>
        </div>
         
    )
}
  
export default Language;