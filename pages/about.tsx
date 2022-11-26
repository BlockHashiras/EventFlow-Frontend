import React from "react"
import {
    Box,
    Grid,
    GridItem,
    Heading,
    Text,
    Image,
    Button,
    Flex
} from "@chakra-ui/react";
import { aboutData } from "../about-component/data/aboutData";
import Link from "next/link";

const About = () => {

    return (
        <Box
        w="100%"
        fontFamily='Lato'
        className="about-wrapper"
        p='5rem 6rem'
        >
            <Box
            w={{lg: '100%',xl:'60%'}}
            mx={{xl: "20%"}}
            pt='4rem'
            >
                <Heading fontFamily="Lato" fontSize={{lg: "45px ", xl:"50px"}} px={{lg: "8rem"}} textAlign='center'>We are a team of passionate individuals</Heading>
                <Grid templateColumns='repeat(3, 1fr)' gap={4} p="3rem 1rem">
                    {
                        aboutData.map((item, index) =>
                            <GridItem
                            key={index}
                            >
                                <Image m="1.5rem 40%" src={item.headerImage} alt="about-image" width="3rem" height="3rem"/>
                                <Heading textAlign='center' as='h4' size="md">{item.headers}</Heading>
                                <Text mt='1rem' textAlign="center" fontSize="15px">{item.desc}</Text>
                                <Flex justify='space-evenly' mt='1rem'>
                                    {index == 0 ?
                                        <Link href="#mission">
                                            <Button px="2rem" bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}}>More</Button>
                                        </Link> :
                                        index == 1 ?
                                        <Link href="#vision">
                                            <Button px="2rem" bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}}>More</Button>
                                        </Link> :
                                        <Button px="2rem" bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}}>More</Button>
                                    }
                                    </Flex>
                            </GridItem>
                        )
                    }
                </Grid>
            </Box>
            <Box
            w="60%"
            m="8% 20% 0% 20%"
            >
                <section id="mission">
                    <Heading textAlign='center' mb="5%">Mission</Heading>
                    <Text textAlign='justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </section>
                <section id="vision">
                    <Heading textAlign='center' my="5%">Vision</Heading>
                    <Text textAlign='justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                </section>
            </Box>
        </Box>
    );
}

export default About;