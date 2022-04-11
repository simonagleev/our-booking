import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import endOfWeek from 'date-fns/endOfWeek';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfWeek from 'date-fns/startOfWeek';
import { DesktopDatePicker } from '@mui/lab';

type CustomPickerDayProps = PickersDayProps<Date> & {
 
};

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})<CustomPickerDayProps>(({ theme }) => ({
  ...( {
    backgroundColor: '#FCF5EF',
    color: '#000',
    '&:hover, &:focus': {
      backgroundColor: '#FF7235',

    },
    '& ::selection': {
        color: 'red',
    }
  }),
  ...( {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
    
  }),
  ...( {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    
  }),
})) as React.ComponentType<CustomPickerDayProps>;

export default function CustomDay() {
  const [value, setValue] = React.useState<Date | null>(null);

  const renderWeekPickerDay = (
    date: Date,
    selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>,
  ) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = startOfWeek(value);
    const end = endOfWeek(value);

    const dayIsBetween = isWithinInterval(date, { start, end });
    const isFirstDay = isSameDay(date, start);
    const isLastDay = isSameDay(date, end);

    return (
      <CustomPickersDay 
        {...pickersDayProps}
        disableMargin
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="frf"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderDay={renderWeekPickerDay}
        renderInput={(params) => (<TextField
            {...params}
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '0',
            }}
            sx={{
              outline: 'none',
              '& input': {
                color: '#6DB5CA',
                textAlign: 'start',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '24px',
                display: 'flex',
                padding: '0',
                width: '80%'
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
                padding: '0',
              },
              '& label': {
                textAlign: 'center',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                color: '#6DB5CA',
                display: "none",
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: '10px'
              },
              '& svg': {
                color: '#FF7235'
              },
              '& .css-bkrceb-MuiButtonBase-root-MuiPickersDay-root.Mui-selected': {
                backgroundColor: 'orange'
              }

            }}
          />
        )}
        inputFormat="'Week of' MMM d"
      />
    </LocalizationProvider>
  );
}
