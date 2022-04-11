
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

import { useState} from 'react';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    test: {
        color: 'yellow',
        background: 'pink',
        border: 'none'
    }
});
export const DatePickerIn = () => {

    const classes = useStyles();

    const [value, setValue] = useState<Date | null>(
        new Date('2022-04-18T21:11:54'),
      );
    
      const handleChange = (newValue: Date | null) => {
        setValue(newValue);
      };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
        <DesktopDatePicker
          label="Заезд"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => (<TextField
              {...params}
              style={{
                width: '25%',
                justifyContent: 'center',
                padding: '0',
                borderLeft: '1px solid #6DB5CA',
                borderRight: '1px solid #6DB5CA',
              }}
              sx={{
                outline: 'none',
                '& input': {
                  color: '#6DB5CA',
                  textAlign: 'center',
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '20px',
                  lineHeight: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0',
                  width: '60%'
                },
                '& fieldset': {
                  border: 'none',
                  color: 'blue',

                },
                '& div': {
                  margin: '0',
                  justifyContent: 'center',
                },
                '& button': {
                  paddingLeft: '0',

                },
                '& label': {
                  textAlign: 'center',
                  fontFamily: 'Montserrat',
                  fontStyle: 'normal',
                  color: '#6DB5CA',
                  display: "flex",
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: '10px'
                },
                '& svg': {
                  color: '#FF7235'
                },

              }}
            />
          )}
        />
    </LocalizationProvider>
  );
}

export default DatePickerIn;
