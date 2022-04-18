import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

import CommonCard from "./common/Card";

const usetyles = makeStyles({
    text: {
        color: '#000',
        fontSize: '0.75em',
        lineHeight: '0.9em',
        flex: 1,  
    }
    
});

export const CityCard = () => {
    const styles = usetyles()

    return (
        <CommonCard title="Город. страна">
            <Typography className={styles.text}>Сроки</Typography>
            <Typography className={styles.text}>Кол-во номеров, гости</Typography>
        </CommonCard>
    )
}

export default CityCard;