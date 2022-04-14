import Button from "@mui/material/Button";
import ioc from "../../../../../lib/ioc";

interface IFindButtonProps {
    className?: string;
}

export const FindButton = ({
    className,
}: IFindButtonProps) => {

    const test = () => {
        ioc.routerService.replace('/hotels')
        
    }

    return(
        <Button 
            onClick={test}
            className={className}
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
                flex: 0.1,
                alignItems: 'center',
                textAlign: 'center',
                padding: '1.25em 3.75em',
                '&:hover': {
                    background: '#ff6929'
                },
            }}
            variant="contained">
                Найти
        </Button>
    )
}
 
export default FindButton;