import { useState, useEffect } from "react"
import { Navbar, NavAuth } from "./Navbar";
import { 
    Grid,
    GridItem,
    Text 
} from "@chakra-ui/react";


export const DesktopHeader = () => {
    const [navbarScroll, setNavbarScroll] = useState(false)

    const changeNavBackground = () =>{
        console.log(window.scrollY)
        window.scrollY > 40 ? setNavbarScroll(true) : setNavbarScroll(false)
    }

    useEffect(() => {
        changeNavBackground()
        window.addEventListener("scroll", changeNavBackground)
    }, [navbarScroll])

    return (
        <>
            <Grid
             templateColumns='repeat(5, 1fr)'
             gap={4}
             padding="0.5rem 4rem"
             position="fixed"
             w="100%"
             zIndex={5}
             sx={navbarScroll? {"backgroundColor": "black", "boxShadow": "0px 15px 50px -15px #111"}: {"backgroundColor": "transparent"}}
            >
                <GridItem colSpan={1} >
                    <Text letterSpacing="0.2rem" fontSize="xl" py="0.5rem" backgroundClip="text" bgGradient='linear(to-br, purple.500, red.400)'>
                        EVENTFLOW
                    </Text>
                </GridItem>
                <GridItem colSpan={3} sx={{"justifySelf": "center"}}>
                    <Navbar />
                </GridItem>
                <GridItem colSpan={1} sx={{"justifySelf": "end"}}>
                    <NavAuth />
                </GridItem>
            </Grid>
        </>
    );
};

export default DesktopHeader;
