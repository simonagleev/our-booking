import { makeStyles } from '@mui/styles';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import CommonCard from "./common/Card";
import { AutoSizer } from 'react-declarative';
import { borderRadius } from '@mui/system';

const usetyles = makeStyles({
    text: {
        color: '#000',
        fontSize: '0.75em',
        lineHeight: '0.9em',
        flex: 1,
    },
    input: {
        width: '100%',
        border: '1px sold #6DB5CA',
        borderColor: '#6DB5CA',
        borderRadius: '7px',
        height: '2.8em',
        outline: 'none',
    },
});

const options = [
    {
        value: 'mostPopular',
        label: 'По популярности',
    },
    {
        value: 'priceDown',
        label: 'По уменьшению цены',
    },
    {
        value: 'priceUp',
        label: 'По возрастанию цены',
    },

];

export const SortingCard = () => {
    const classes = usetyles()

    const [sortOption, setSortOption] = React.useState('EUR');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSortOption(event.target.value);
    };
    return (
        <CommonCard title="Сортиовка">
                <TextField className={classes.input}
                    id="sorting"
                    select
                    label="Select"
                    value={sortOption}
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                {/* <div>
                    <select id="sorting" name="sorting" className={classes.input}>
                        <option value="mostPopular">По популярности</option>
                        <option value="priceDown">По уменьшению цены</option>
                        <option value="priceUp">По возрастанию цены</option>
                    </select>
                </div> */}
                
        </CommonCard>
    )
}

export default SortingCard;
