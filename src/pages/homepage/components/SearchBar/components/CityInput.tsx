import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';


const testOptions = [
    { label: 'город', id: 0},
    { label: 'Санкт-Петербург', id: 1},
    { label: 'Питер',  id: 2},
    { label: 'Новосибирск',  id: 2},
    { label: 'Сочи',  id: 2},
    { label: 'Краснодар',  id: 2},
    { label: 'Иркутск',  id: 2},
    { label: 'Крым',  id: 2},
    { label: 'Чита',  id: 2},
    { label: 'Свердловск',  id: 2},

]

const useStyles = makeStyles({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export const CityInput = () => {
    const classes = useStyles()
    const [cityValue, setCityValue] = useState(null)
    return (
        <Autocomplete classes={{root: classes.root}}      
            value={cityValue}
            clearOnEscape
            disablePortal
            id="city-input"
            options={testOptions}
            filterOptions={(x) => x}
            sx={{ width: '25%',
                '& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root': {
                    color: '#6DB5CA',
                    border: 'none',
                    fontFamily: 'Montserrat',
    
                    display: 'flex',
                    justifyContent: 'center'
                  },
                '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                    color: '#6DB5CA',                                        // Меняет цвет label
                },
                '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                    borderStyle: 'none',                                // Убирает бордер у инпута
                },
                '& .css-qzbt6i-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator': {   // Убирает иконку треугольник справа
                    display: 'none',
                },
                '& label': {
                    position: 'absolute',
                    left: '30%',
                    fontFamily: 'Montserrat',
                    fontStyle: 'bold',
                    fontWeight: '400',
                    fontSize: '1.5rem',
                    lineHeight: '1.5rem',
                }
                
            }}
            renderInput={(params) => <TextField  {...params} label="город" />}
        />
    )
}

  
export default CityInput;





// .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root    тут цвет текста определяется у инпута

