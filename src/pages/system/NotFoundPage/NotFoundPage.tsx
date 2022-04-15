import { Button, Box, Typography } from "@mui/material";
import ModalDialog from "../../../components/common/ModalDialog";
import { CC_ORIGIN } from "../../../config";

import ioc from "../../../lib/ioc";

export const NotFoundPage = () => {

    const handleReload = () => {
        const url = new URL(ioc.routerService.previousPath, CC_ORIGIN);
        window.location.href = url.toString();
    };

    return (
        <ModalDialog open>
            <Box
                sx={{
                    minHeight: 275,
                    minWidth: 225,
                }}
            >
                <Typography>
                    NOT FOUND
                </Typography>
                <Button onClick={handleReload}>
                    Reload
                </Button>
            </Box>
        </ModalDialog>
    )
}

export default NotFoundPage;