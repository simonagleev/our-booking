import * as React from 'react';

import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { observer } from "mobx-react";

import ioc from "../../../lib/ioc";


export const CounterGuests = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="CounterGuests-button"
        aria-controls={open ? 'CounterGuests-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
            color: '#6DB5CA',
            display: 'flex',
            alignItems: 'center',
        }}
      >
        КОЛ-ВО ГОСТЕЙ
      </Button>
      <Menu
        id="CounterGuests-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Взрослых</MenuItem>
        <MenuItem onClick={handleClose}>Детей</MenuItem>
        <MenuItem onClick={handleClose}>Номра</MenuItem>
      </Menu>
    </>
  );
}

export default observer(CounterGuests) as React.FC;

//.css-1e6y48t-MuiButtonBase-root-MuiButton-root 
//MuiButtonBase-root-MuiMenuItem-root