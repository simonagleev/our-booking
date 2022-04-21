import { Box, Checkbox, FormControlLabel, Rating, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import { colorOrange } from "../../../theme";

import CommonCard from "./common/Card";

const usetyles = makeStyles({
    text: {
        color: '#000',
        fontSize: '0.75em',
        lineHeight: '0.9em',
        flex: 1,
    },
    rating: {
        '& svg': {
            color: colorOrange,
        },
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
    test: {
        '& div': {
            height: '30px',
            background: 'red'
        },
    }
});

const stars = [
    {
        id: 1,
        value: 5,
    },
    {
        id: 2,
        value: 4,
    },
    {
        id: 3,
        value: 3,
    },
    {
        id: 4,
        value: 2,
    },
    {
        id: 5,
        value: 1,
    },
];

export const RatingCard = () => {

    const styles = usetyles()

    const [value, setValue] = useState<number | null>(2);

    return (
        <CommonCard title="Количество звезд">
            {stars.map(i => (
                <Box sx={{maxHeight: '30px'}}>
                    <FormControlLabel
                        className={styles.test}
                        control={
                            <Checkbox className={styles.checkBox} name="ratingCheckBox" />
                        }
                        label={<Rating
                            className={styles.rating}
                            name="simple-controlled"
                            value={i.value}
                            readOnly
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        }
                    />
                </Box>
            ))}



        </CommonCard>
    )
}

export default RatingCard;