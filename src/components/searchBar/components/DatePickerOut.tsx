
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

import { useState} from 'react';

export const DatePickerOut = () => {
    const [value, setValue] = useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
      );
    
      const handleChange = (newValue: Date | null) => {
        setValue(newValue);
      };

  return (
    <LocalizationProvider  dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Выезд"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField sx={{ color: 'yellow',
            '&.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root': {
                color: 'red',
            }
        }} {...params} />}
          
        />
    </LocalizationProvider>
  );
}

export default DatePickerOut;
