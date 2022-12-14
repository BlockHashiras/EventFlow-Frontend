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
            padding={{lg: "0.5rem 3rem", xl: "0.5rem 12rem"}}
            position="fixed"
            w="100%"
            zIndex={5}
            sx={navbarScroll? {"backgroundColor": "#eefef6", "boxShadow": "0px 0px 100px -20px #111"}: {"backgroundColor": "transparent"}}
            >
                <GridItem colSpan={1} >
                    <Text letterSpacing="0.2rem" fontSize="2xl" fontFamily='Poppins' fontWeight="bold" py="0.2rem" backgroundClip="text" bgGradient='linear(to-br, purple.700, red.900 70%)'>
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
