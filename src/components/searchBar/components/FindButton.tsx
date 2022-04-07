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
                fontSize: '1.25em',
                lineHeight: '24px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.25em 3.75em'
            }}
            variant="contained">
                Найти
        </Button>
    )
}
 
export default FindButton;