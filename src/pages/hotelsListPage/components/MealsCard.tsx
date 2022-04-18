import { ClassNames } from "@emotion/react";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Box } from "@mui/system";

import CommonCard from "./common/Card";

const usetyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    checkBox: {
        borderRadius: '7px',
        color: '#000',
        fontSize: '0.87em',
        lineHeight: '1em',
        '& svg': {
            color: '#6DB5CA',
            borderRadius: '7px',
        }
    },
    text: {
        color: '#000',
        fontSize: '0.87em',
        lineHeight: '1em',
        flex: 1,  
    }
    
});

const options = [
    {
        value: 'noMeals',
        label: 'Питание не включено',
    },
    {
        value: 'Breakfast',
        label: 'Завтрак включён',
    },
    {
        value: 'twoMeals',
        label: 'Завтрак + обед или ужин включены',
    },
    {
        value: 'threeMeals',
        label: 'Завтрак, обед и ужин включены',
    },
    {
        value: 'fullMeal',
        label: 'Все включено',
    },

];

export const MealsCard = () => {
    const styles = usetyles()

    return (
        <CommonCard title="Питание">
            {
                options.map(i => (
                    <Box className={styles.root}>
                        <FormControlLabel
                            control={
                                <Checkbox className={styles.checkBox}  name="antoine" />
                            }
                            label={i.label}
                        />
                        {/* <Checkbox className={styles.checkBox}/>
                        <Typography className={styles.text}>{i.label}</Typography> */}
                    </Box>
                ))
            }
        </CommonCard>
    )
}

export default MealsCard;