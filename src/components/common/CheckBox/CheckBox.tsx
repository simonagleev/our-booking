import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import MatCheckBox, { CheckboxProps } from "@mui/material/Checkbox"

interface ICheckBoxProps extends CheckboxProps {
}

const useStyles = makeStyles({
    root: {
    
        },
})

export const CheckBox = ({
    className,
    ...otherProps
}: ICheckBoxProps) => {
    const classes = useStyles();
    return(
        <MatCheckBox 
            className={clsx(className)}
            {...otherProps}
        />
    )
}
 
export default CheckBox;

