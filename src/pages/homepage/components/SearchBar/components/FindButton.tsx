
import Button from "../../../../../components/common/Button/Button";
import LoginModal from "../../../../../components/LoginModal";
import ioc from "../../../../../lib/ioc";

interface IFindButtonProps {
    className?: string;
}


export const FindButton = ({
    className,
}: IFindButtonProps) => {

    const open = () => {
        ioc.modalService.setLoginModal(true)
    }

    return(
        <>
        <Button 
            onClick={open}
            // className={className}
        >
            Найти
        </Button>
        <LoginModal/>
        </>
    )
}
 
export default FindButton;


// <Button 
//             onClick={open}
//             className={className}
//             sx={{
//                 color: '#FCF5EF',
//                 backgroundColor: '#FF7235',
//                 borderRadius: '18px',
//                 fontFamily: 'Montserrat',
//                 fontStyle: 'normal',
//                 fontWeight: '700',
//                 fontSize: '1.25em',
//                 lineHeight: '24px',
//                 display: 'flex',
//                 flex: 0.1,
//                 alignItems: 'center',
//                 textAlign: 'center',
//                 padding: '1.25em 3.75em',
//                 '&:hover': {
//                     background: '#ff6929'
//                 },
//             }}
//             variant="contained">
//                 Найти
//         </Button>