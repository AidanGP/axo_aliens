import React from 'react'
import { Box, Heading, useColorModeValue, Text } from '@chakra-ui/react';
import ImageDivider from './ImageDivider';


function About() {
    const bg = useColorModeValue('light.green', 'dark.green')
    return (
        <>
            <Box backgroundColor={bg} px={[4, 4, 32, 64]} pt={16} align="center">
                <Box>
                    <Heading pb={12} size="4xl">About</Heading>
                </Box>
                <Box w='60%'>
                    <Text>AXO Aliens is an NFT collection of 7,777 alien axolotls who fetch food offerings from the Land of the Living and deliver to their respective Souls in the Land of the Dead.</Text>
                    <br />
                    <Text>Tasty Bones have to contend with 45 Hungry Ghosts⁤ and 5 Demons who try to steal the food offering. The Demons are of varying shapes, sizes, and power levels (sounds rare!).</Text>
                </Box>
            </Box>
            <ImageDivider
                fill_1={useColorModeValue('#B3FFC7', '#79E8B3')}
                fill_2={useColorModeValue('#BBEFFF', '#80B1FF')}
                d="M0 77L14.5 84C29 91 58 105 87.2 113.8C116.3 122.7 145.7 126.3 174.8 134C204 141.7 233 153.3 262 144C291 134.7 320 104.3 349 93.2C378 82 407 90 436.2 100.7C465.3 111.3 494.7 124.7 523.8 128.8C553 133 582 128 611 130C640 132 669 141 698 144.3C727 147.7 756 145.3 785.2 139.7C814.3 134 843.7 125 872.8 117.7C902 110.3 931 104.7 945.5 101.8L960 99L960 201L945.5 201C931 201 902 201 872.8 201C843.7 201 814.3 201 785.2 201C756 201 727 201 698 201C669 201 640 201 611 201C582 201 553 201 523.8 201C494.7 201 465.3 201 436.2 201C407 201 378 201 349 201C320 201 291 201 262 201C233 201 204 201 174.8 201C145.7 201 116.3 201 87.2 201C58 201 29 201 14.5 201L0 201Z"
            />
        </>
    )
}

export default About