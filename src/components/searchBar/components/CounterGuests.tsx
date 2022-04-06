import * as React from 'react';

import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { observer } from "mobx-react";

import ioc from "../../../lib/ioc";
import {Stack} from "@mui/material";
import CounterService from "../../../lib/base/CounterService";


export const CounterGuests = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleIncrease = (id: number) => {
    ioc.counterService.increase(id)
  }

  const handleDecrease = (id: number) => {
    ioc.counterService.decrease(id)
  }
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
        {ioc.counterService.counters.map(i => (
          <Box>
            <Stack direction={'row'}>
              <MenuItem onClick={handleClose}>{i.title}</MenuItem>
              <Stack direction={'row'}>
                <Button onClick={() => handleDecrease(i.id)}>-</Button>
                  {i.count}
                <Button onClick={() => handleIncrease(i.id)}>+</Button>
              </Stack>
            </Stack>

          </Box>

        ))}

        {/*<MenuItem onClick={handleClose}>Взрослых</MenuItem>*/}
        {/*<MenuItem onClick={handleClose}>Детей</MenuItem>*/}
        {/*<MenuItem onClick={handleClose}>Номра</MenuItem>*/}
      </Menu>
    </>
  );
}

export default observer(CounterGuests) as React.FC;

//.css-1e6y48t-MuiButtonBase-root-MuiButton-root 
//MuiButtonBase-root-MuiMenuItem-root