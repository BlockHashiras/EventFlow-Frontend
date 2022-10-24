import DesktopHeader from "./header-component/DesktopHeader";
import MobileHeader from "./header-component/MobileHeader";
import TabHeader from "./header-component/TabHeader";
import {
     useMediaQuery
} from "@chakra-ui/react";



export const MainHeader = () => {
    const [desktopSize] = useMediaQuery("(min-width: 62em)")
    const [tabSize] = useMediaQuery("(min-width: 48em)")
    return (
        <>
        {desktopSize ?
        <DesktopHeader /> :
        tabSize ?
        <TabHeader /> :
        <MobileHeader />
        }
        </>
    );
};

export default MainHeader;
