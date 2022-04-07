import * as React from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';


import { observer } from "mobx-react";

import ioc from "../../../lib/ioc";

const useStyles = makeStyles({
  counterButton: {
    background: '#FF7235',
    borderRadius: '9px',
    border: 'none',
    boxShadow: '2px 1px 1px #bfa199',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem',

    '&:hover': {
      cursor: 'pointer',
      background: '#ff6929'
    },
    '&:active': {
      boxShadow: '0 3px 0 #bfa199',
    } 
  },
  menuFrame: {
    background: '#FCF5EF'
  },
  counterMenuElement: {
    display: 'flex',
    fontSize: '1.25em',
    minWidth: '300px',
    maxWidth: '415px',
    background: '#FCF5EF',
    padding: '0.5em 1em'
  },
});

export const CounterGuests = () => {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const createDecreaseHandler = (id: number) => (e: any) => {
    e.preventDefault();
    // e.stopPropaganation();
    ioc.counterService.decrease(id)
  }

  const createIncreaseHandler = (id: number) => (e: any) => {
    e.preventDefault();
    ioc.counterService.increase(id)
  }
  return (
    <>
      <Button
        className={classes.menuFrame}
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
        sx={{
          '& .css-6hp17o-MuiList-root-MuiMenu-list': {
            paddingTop: 0,
            paddingBottom: 0,
            background: '#FCF5EF',
            maxWidth: '415px',
          },
        }}
        id="CounterGuests-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {ioc.counterService.counters.map((i, idx) => (
          <MenuItem className={classes.counterMenuElement} key={idx}>
            <Typography style={{flex: 1}} > 
              {i.title}
            </Typography>
            <Box style={{display: 'flex', justifyContent: 'space-around', flex: 1}}>
              <Box>
              <button className={classes.counterButton}  onClick={createDecreaseHandler(i.id)}>-</button>
              </Box>
              {i.count}
              <Box>
                <button className={classes.counterButton} onClick={createIncreaseHandler(i.id)}>+</button>
              </Box>
            </Box>
            
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default observer(CounterGuests) as React.FC;

//.css-1e6y48t-MuiButtonBase-root-MuiButton-root 
//MuiButtonBase-root-MuiMenuItem-root

//.css-6hp17o-MuiList-root-MuiMenu-list