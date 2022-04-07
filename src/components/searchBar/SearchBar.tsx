import { Box, Paper } from "@mui/material";
import CityInput from "./components/CityInput";
import CounterGuests from "./components/CounterGuests";
import FindButton from "./components/FindButton";

export const SearchBar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                '& > :not(style)': {
                m: 1,
                },
            }}
         >
            <Paper elevation={8} style={{ 
                borderRadius: '18px', 
                backgroundColor: '#FCF5EF', 
                display: 'flex' 
                }}>
                <CityInput/>
                <div>Заезд</div>
                <div>Выезд</div>
                <CounterGuests/>
            </Paper> 

            <FindButton/>
        </Box>
          
    )
}

export default SearchBar;