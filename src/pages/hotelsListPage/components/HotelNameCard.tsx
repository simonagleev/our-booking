
import * as React from 'react';

import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
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

const StyledInputElement = styled('input')(
    ({ theme }) => `
    width: 210px;
    font-size: 0.875rem;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 1.5;
    color: #000;
    background: #FCF5EF;
    border: 1px solid #6DB5CA;
    border-radius: 7px;
    padding: 10px;
  
    &:hover {
      background: #FCF5EF;
      border-color: #6DB5CA;
    }
  
    &:focus {
      outline: 2px solid #6DB5CA;
    }
  `,
);

const CustomInput = React.forwardRef(function CustomInput(
    props: InputUnstyledProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) {
    return (
      <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
    );
});

export const HotelNameCard = () => {
    const styles = usetyles()

    return (
        <CommonCard title="Название отеля">
            <CustomInput aria-label="Demo input" placeholder="Например, Hilton" />
        </CommonCard>
    )
}

export default HotelNameCard;
