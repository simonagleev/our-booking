import Button from "@mui/material/Button";


export const FindButton = () => {

    return(
        <Button 
            sx={{
                color: '#FCF5EF',
                backgroundColor: '#FF7235',
                borderRadius: '18px',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '20px',
                lineHeight: '24px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px 60px'
            }}
            variant="contained">
                Найти
        </Button>
    )
}
 
export default FindButton;