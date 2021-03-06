
import { AutoSizer, FieldType, One, TypedField } from "react-declarative";
import CityCard from "./components/CityCard";
import HotelNameCard from "./components/HotelNameCard";
import MealsCard from "./components/MealsCard";
import RatingCard from "./components/RatingCard";
import SortingCard from "./components/SortingCard";
import TopBar from "./components/TopBarCard";

export const HotelsListPage = () => {



    const fields: TypedField[] = [
        {
            type: FieldType.Group,
            columns: '3',
            tabletColumns: '12',
            phoneColumns: '12',
            fieldRightMargin: '1',
            fields: [
                {
                    type: FieldType.Component,
                    fieldRightMargin: "1",
                    fieldBottomMargin: '20px',
                    element: () => (
                        <CityCard />
                    )
                },
                {
                    type: FieldType.Component,
                    fieldRightMargin: "1",
                    columns: '12',
                    element: () => (
                        <SortingCard />
                    )
                },
                {
                    type: FieldType.Component,
                    fieldRightMargin: "1",
                    columns: '12',
                    element: () => (
                        <HotelNameCard />
                    )
                },
                {
                    type: FieldType.Component,
                    fieldRightMargin: "10",
                    columns: '12',
                    element: () => (
                        <MealsCard />
                    )
                },
                {
                    type: FieldType.Component,
                    fieldRightMargin: "1",
                    columns: '12',
                    element: () => (
                        <RatingCard />
                    )
                },
            ]
        },
        {
            type: FieldType.Group,
            columns: '9',
            tabletColumns: '12',
            phoneColumns: '12',
            fields: [
                {
                    type: FieldType.Component,
                    columns: '12',
                    element: () => (
                        <TopBar />
                    )
                },
            ]
        },
    ];

    const renderContent = () => {
        return (
            <One
                fields={fields}
            />
        )
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