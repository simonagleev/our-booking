import * as React from 'react';

import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';

import CommonCard from "./common/Card";

import { styled } from '@mui/system';
import { useState } from 'react';




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

const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: Montserrat;
    font-size: 0.875em;
    box-sizing: border-box;
    min-height: calc(1.5em + 22px);
    min-width: 230px;
    background: #FCF5EF;
    border: 1px solid #6DB5CA;
    border-radius: 7px;
    margin-top: 0.5em;
    padding: 10px;
    text-align: left;
    line-height: 1.5;
    color: #000;
  
    &:hover {
      background: #FCF5EF;
      border-color: #6DB5CA;
      outline: 2px solid #6DB5CA;
      cursor: pointer;
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      outline: 3px solid #6DB5CA;
    }
  
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: '▴';
      }
    }
    &:focus {
        outline: 2px solid #6DB5CA;
    }
    &::after {
      content: '▾';
      float: right;
    }
    `,
);

const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-family: Montserrat;
    font-size: 0.875em;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px 0;
    min-width: 230px;
    background: #FCF5EF;
    border: 1px solid #6DB5CA;
    border-radius: 7px;
    color: black;
    overflow: auto;
    outline: 2px solid #6DB5CA;;
    `,
);

const StyledOption = styled(OptionUnstyled)(
    () => `
    list-style: none;
    padding: 8px;
    border-radius: 0.45em;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: #FCF5EF;
      color: #6DB5CA;
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: #FCF5EF;
      color: #6DB5CA;
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: #FCF5EF;
      color: #6DB5CA;
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: #6DB5CA;
    }

    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: #FCF5EF;
      color: #6DB5CA;
      cursor: pointer;
    }
    `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = (props: SelectUnstyledProps<string>) => {
    const components: SelectUnstyledProps<string>['components'] = {
      Root: StyledButton,
      Listbox: StyledListbox,
      Popper: StyledPopper,
      ...props.components,
    };
  
    return <SelectUnstyled {...props} components={components} />;
}

export const SortingCard = () => {
    const classes = usetyles()

    const [sortOption, setSortOption] = React.useState('EUR');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSortOption(event.target.value);
    };

    const [value, setValue] = useState<any>('По популярности');

    return (
        <CommonCard title="Сортировка">
                {/* <TextField className={classes.input}
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
                </TextField> */}
                <div>
                    <CustomSelect value={value} onChange={setValue}>
                        <StyledOption value={'mostPopular'}>По популярности</StyledOption>
                        <StyledOption value={'priceDown'}>По уменьшению цены</StyledOption>
                        <StyledOption value={'priceUp'}>По возрастанию цены</StyledOption>
                    </CustomSelect>
                </div>
                
        </CommonCard>
    )
}

export default SortingCard;
