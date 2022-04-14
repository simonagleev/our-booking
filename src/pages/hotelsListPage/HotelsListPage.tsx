import { useTheme } from "@mui/material";
import { AutoSizer } from "react-declarative";
import ISize from "react-declarative/model/ISize";


export const HotelsListPage = () => {
    const {
        breakpoints: {
            values: {
                lg,
                md,
                sm,
                xl,
                xs,
            }
        }
    } = useTheme();

    const renderContent = ({ width }: ISize) => {
        if (width < sm) {
            return (
                <p>Mobole</p>
            )
        } else if (width < md && width > sm) {
            return (
                <p >Tablet</p>
            )
        } else {
            return (
                <p>Desctop</p>
            )
        }
    };

    return (
        <div>
            <AutoSizer heightRequest={() => window.innerHeight - 80} disableWidth target={document.body} selector='.MuiContainer-root'>
                {renderContent}
            </AutoSizer>
        </div>
    )
}

export default HotelsListPage;