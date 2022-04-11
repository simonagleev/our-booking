import { Box, Paper } from "@mui/material";
import CityInput from "../SearchBar/components/CityInput";
import CounterGuests from "../SearchBar/components/CounterGuests";
import DatePickerIn from "../SearchBar/components/DatePickerIn";
import DatePickerOut from "../SearchBar/components/DatePickerOut";
import FindButton from "../SearchBar/components/FindButton";

export const SearchBarMobile = () => {
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
                    flexDirection: "column",
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
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',

                    }}>
                    <Box
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderBottom: '1px solid #6DB5CA',
                        }}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: '100%',
                            },
                        }}
                    >
                        <CityInput/>
                    </Box>   
                   
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '& > :not(style)': {
                            m: 2,
                            },
                            borderBottom: '1px solid #6DB5CA',
                        }}
                    >
                        <DatePickerIn/>
                    </Box> 
                    
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 2,
                            },
                            
                        }}
                    >
                        <DatePickerOut/> 
                    </Box> 
                     
                    <Box
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            
                        }}
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 2,
                            },
                            borderTop: '1px solid #6DB5CA',
                            
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

export default SearchBarMobile;