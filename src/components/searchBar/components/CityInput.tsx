import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';
const testOptions = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    
]

const useStyles = makeStyles({
    root: {
        
    },
});

export const CityInput = () => {
    const classes = useStyles()
    return (
        <Autocomplete classes={{root: classes.root}}       // как поменять цвет текста инпута?
            clearOnEscape
            disablePortal
            id="city-input"
            options={testOptions}
            sx={{ width: 300,
            }}
            renderInput={(params) => <TextField {...params} label="Город" />}
        />
    )
}

  
export default CityInput;





