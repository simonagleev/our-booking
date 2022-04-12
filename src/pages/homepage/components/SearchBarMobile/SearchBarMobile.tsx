import { Box, Paper } from "@mui/material";
import { makeStyles } from '@mui/styles';
import CityInput from "../SearchBar/components/CityInput";
import CounterGuests from "../SearchBar/components/CounterGuests";
import DatePickerInMobile from "../SearchBar/components/DatePickerInMobile";
import DatePickerOutMobile from "../SearchBar/components/DatePickerOutMobile";
import FindButton from "../SearchBar/components/FindButton";

const useStyles = makeStyles({
    button: {
        width: '100%',
    },
})

export const SearchBarMobile = () => {
    const classes = useStyles();
    return (
        <div style={{
            display: 'flex', 
            alignItems: 'center', 
            height: '100vh',
            marginTop: '-10vh',
        }}>
            <Box
                style={{width: 'calc(100% - 16px)'}}
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
                            width: '100%',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '& > :not(style)': {
                            m: 2,
                            },
                            borderBottom: '1px solid #6DB5CA',
                        }}
                    >
                        <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 0,
                            },
                        }}
                    >
                        <DatePickerInMobile/>
                    </Box> 
                        
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
                        <DatePickerOutMobile/> 
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

                <FindButton className={classes.button}/>
            </Box>
        </div>
        
          
    )
}

export default SearchBarMobile;