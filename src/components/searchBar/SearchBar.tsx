import { Box, Paper } from "@mui/material";
import CityInput from "./components/CityInput";
import CounterGuests from "./components/CounterGuests";
import DatePickerIn from "./components/DatePickerIn";
import DatePickerOut from "./components/DatePickerOut";
import FindButton from "./components/FindButton";

export const SearchBar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: "space-between",
                '& > :not(style)': {
                m: 1,
                },
                
            }}
         >
            <Paper elevation={8} style={{ 
                borderRadius: '18px', 
                backgroundColor: '#FCF5EF', 
                display: 'flex',
                flex: 1,
                }}>
                <CityInput/>
                <DatePickerIn/>
                <DatePickerOut/>
                <CounterGuests/>
            </Paper> 

            <FindButton/>
        </Box>
          
    )
}

export default SearchBar;