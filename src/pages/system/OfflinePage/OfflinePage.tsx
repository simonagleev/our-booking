import { Button, Box, Typography } from "@mui/material";
import ModalDialog from "../../../components/common/ModalDialog";
import { CC_ORIGIN } from "../../../config";

import ioc from "../../../lib/ioc";
import { colorBackground } from "../../../theme";

export const OfflinePage = () => {

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
                <Typography sx={{color: 'red'}}>
                    OFFLINE
                </Typography>
                <Button onClick={handleReload} sx={{color: colorBackground}}>
                    Reload
                </Button>
            </Box>
        </ModalDialog>
    )
}

export default OfflinePage;