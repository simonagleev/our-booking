
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
        new Date('2014-08-18T21:11:54'),
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
          renderInput={(params) => <TextField {...params} />}
          
        />
    </LocalizationProvider>
  );
}

export default DatePickerIn;
