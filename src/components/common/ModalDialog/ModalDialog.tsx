
import React from 'react';

import { makeStyles } from "@mui/styles";

import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { colorOrange } from '../../../theme';

const useStyles = makeStyles({
    dialog: {
        '&:first-child': {
            padding: 0,
        },
        overflow: 'hidden',
    },
    container: {
        
        '& .MuiPaper-root': {
          borderRadius: '80px',
          border: '2px solid',
          borderColor: colorOrange,
        },
        '& .MuiBox-root': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '& p': {
            marginBottom: '20px'
          },
    },
});

interface IModalDialogProps extends Omit<DialogProps, keyof {
    open: never;
}> {
    children: React.ReactNode;
    open?: boolean;
    actions?: boolean;
    dividers?: boolean;
    onAccept?: () => void;
    onDismiss?: () => void;
}

export const ModalDialog = ({
    children,
    open = false,
    dividers = false,
    actions = false,
    onAccept = () => console.log('accept'),
    onDismiss = () => console.log('dismiss'),
    ...other
}: IModalDialogProps) => {
    const classes = useStyles();
    return (
        <Dialog open={open} {...other} className={classes.container}>
            <DialogContent dividers={dividers} className={classes.dialog}>
                {children}
            </DialogContent>
            {actions && (
                <DialogActions>
                    <Button color="primary" onClick={onAccept}>OK</Button>
                    <Button color="primary" onClick={onDismiss}>Cancel</Button>
                </DialogActions>
            )}
        </Dialog>
    );
};

export default ModalDialog;