import Container from "@mui/material/Container";
import NavBar from "../NavBar";

interface IScaffoldProps {
    children: React.ReactNode;
}

export const Scaffold = ({
    children,
}: IScaffoldProps) => {

    return (
        <Container maxWidth="lg">
            <NavBar />
            {children}
        </Container>
    )
};

export default Scaffold;
