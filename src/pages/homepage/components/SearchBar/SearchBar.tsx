import { Box, Paper } from "@mui/material";
import CityInput from "./components/CityInput";
import CounterGuests from "./components/CounterGuests";
import DatePickerIn from "./components/DatePickerIn";
import DatePickerOut from "./components/DatePickerOut";
import FindButton from "./components/FindButton";

export const SearchBar = () => {
    return (
        <div style={{
            display: 'flex', 
            alignItems: 'center', 
            height: '100vh',
            marginTop: '-10vh',
        }}>
            <Box
                style={{width: '100%'}}
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
                    width: '100%',

                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            },
                            flex: 1,
                        }}
                    >
                        <CityInput/>
                    </Box>   
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            '& > :not(style)': {
                            m: 1,
                            },
                            flex: 1,
                            borderLeft: '1px solid #6DB5CA',
                            borderRight: '1px solid #6DB5CA',
                        }}
                    >
                        <DatePickerIn/>
                    </Box>  
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            '& > :not(style)': {
                            m: 1,
                            },
                            flex: 1,
                            borderRight: '1px solid #6DB5CA',
                        }}
                    >
                        <DatePickerOut/> 
                    </Box> 
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            },
                            flex: 1,
                        }}
                    >
                        <CounterGuests/>
                    </Box>   
                </Paper> 

                <FindButton/>
            </Box>
        </div>
        
          
    )
}

export default SearchBar;