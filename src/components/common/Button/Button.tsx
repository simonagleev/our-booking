
import MatButton, { ButtonProps } from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

interface IButtonProps extends ButtonProps {
    children?: React.ReactNode;
}

const useStyles = makeStyles({
    root: {
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
        padding: '1.25em 3.75em',
        '&:hover': {
            background: '#ff6929'
        },
    },
});

export const Button = ({
    className,
    children,
    ...otherProps
}: IButtonProps) => {
    const classes = useStyles();
    return(
        <MatButton 
            className={clsx(className, classes.root)}
            {...otherProps}
        >
            {children}
        </MatButton>
    )
}
 
export default Button;