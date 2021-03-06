import { useState } from 'react';

import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import ioc from '../../../../../lib/ioc';


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

    const [value, setValue] = useState<string | null>(ioc.citySearchService.cities[0])
    const [inputValue, setInputValue] = useState('');

    
    return (
        <Autocomplete classes={{root: classes.root}} 
            value={value}
            onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            }}   
            clearOnEscape
            id="city-input"
            autoComplete
            autoHighlight
            options={ioc.citySearchService.cities}
            sx={{ 
                '& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root': {
                    color: '#6DB5CA',
                    border: 'none',
                    fontFamily: 'Montserrat',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 0,
                    margin: 0,
                    paddingRight: '0px',
                  },
                '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root': {
                    padding: 0,
                    margin: 0,
                    color: '#6DB5CA',                                        // Меняет цвет label
                },
                '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                    borderStyle: 'none',   // Убирает бордер у инпута
                    padding: 0,
                    margin: 0                             
                },
                '& .css-qzbt6i-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-popupIndicator': {   // Убирает иконку треугольник справа
                   color: '#6DB5CA',
                   padding: 0,
                   margin: 0
                },
                '& label': {
                    display: 'none',
                },
                '& input': {
                    width: '100%',
                    fontFamily: 'Montserrat',
                    fontWeight: '400',
                    fontSize: '1.5rem',
                    lineHeight: '1.5rem',
                    textAlign: 'center',
                    padding: 0,
                    margin: 0,
                },
                '& div': {
                    padding: 0,
                    margin: 0,
                    paddingRight: '0px !important',
                },
            }}
            renderInput={(params) => <TextField  {...params} label='город' />}
        />
    )
}

  
export default CityInput;


