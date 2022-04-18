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

export const HotelNameCard = () => {
    const styles = usetyles()

    return (
        <CommonCard title="Название отеля">
            
        </CommonCard>
    )
}

export default HotelNameCard;