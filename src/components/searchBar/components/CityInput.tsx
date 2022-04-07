import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@mui/styles';

const testOptions = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
]

const useStyles = makeStyles({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    test: {
        color: 'yellow',
        background: 'pink',
        border: 'none'
    }
});

export const CityInput = () => {
    const classes = useStyles()
    return (
        <Autocomplete classes={{root: classes.root}}      
            
            clearOnEscape
            disablePortal
            id="city-input"
            options={testOptions}
            sx={{ width: 300,
                '& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root': {
                    color: '#90cbf9',
                    border: 'none',
                    fontFamily: 'Montserrat',
                  },
                '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                    color: '#90cbf9',                                        // Меняет цвет label
                },
                '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                    borderStyle: 'none',                                // Убирает бордер у инпута
                },
                '& .css-qzbt6i-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator': {   // Убирает иконку треугольник справа
                    display: 'none',
                },
                
            }}
            renderInput={(params) => <TextField  {...params} label="ГОРОД" />}
        />
    )
}

  
export default CityInput;





// .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root    тут цвет текста определяется у инпута

