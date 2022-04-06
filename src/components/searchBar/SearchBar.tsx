import { Paper } from "@mui/material";
import CityInput from "./components/CityInput";
import CounterGuests from "./components/CounterGuests";

export const SearchBar = () => {
    return (
        <Paper elevation={8} style={{ borderRadius: '18px', backgroundColor: '#FCF5EF', display: 'flex' }}>
            <CityInput/>
            <CounterGuests/>
        </Paper>    
    )
}

export default SearchBar;