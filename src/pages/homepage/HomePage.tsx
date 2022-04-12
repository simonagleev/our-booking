import { useTheme } from "@mui/material";
import { AutoSizer } from "react-declarative";
import ISize from "react-declarative/model/ISize";
import ioc from "../../lib/ioc";
import Desctop from "./views/Desktop";
import Mobile from "./views/Mobile";
import Tablet from "./views/Tablet";

export const HomePage = () => {

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
                <Mobile/>
            )
        } else if (width < md && width > sm) {
            return (
                <Tablet/>
            )
        } else {
            return (
                <Desctop/>
            )
        }
    };

    return (
        <div>
             {/* Ниже тут Запрашиваем ширину от контейнера и высоту от общего окна для Автосайзера, чтоб он считал от этих данных */}
            <AutoSizer heightRequest={() => window.innerHeight - 80} disableWidth target={document.body} selector='.MuiContainer-root'>
                {renderContent}
            </AutoSizer>
        </div>
        
    )
}
    
export default HomePage;