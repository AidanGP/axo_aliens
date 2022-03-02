import React from 'react'
import { Box, Heading, Flex, useColorModeValue } from '@chakra-ui/react';
import ImageDivider from './ImageDivider';

function Roadmap() {
    const bg = useColorModeValue('light.pink', 'dark.pink')
    return (
        <>
            <Box
                backgroundColor={bg}
                h="60vh"
            >
                <Flex justifyContent='center'>
                    <Heading pb={16}>
                        Roadmap
                    </Heading>
                </Flex>
            </Box>
            <ImageDivider
                fill_1={useColorModeValue('#FFD2EA', '#FFA4D4')}
                fill_2={useColorModeValue('#FFCC99', '#FFAB57')}
                d="M0 74L14.5 88.2C29 102.3 58 130.7 87.2 139.3C116.3 148 145.7 137 174.8 131.8C204 126.7 233 127.3 262 126.7C291 126 320 124 349 125C378 126 407 130 436.2 130.2C465.3 130.3 494.7 126.7 523.8 130.8C553 135 582 147 611 149.7C640 152.3 669 145.7 698 143.3C727 141 756 143 785.2 141.2C814.3 139.3 843.7 133.7 872.8 132.8C902 132 931 136 945.5 138L960 140L960 201L945.5 201C931 201 902 201 872.8 201C843.7 201 814.3 201 785.2 201C756 201 727 201 698 201C669 201 640 201 611 201C582 201 553 201 523.8 201C494.7 201 465.3 201 436.2 201C407 201 378 201 349 201C320 201 291 201 262 201C233 201 204 201 174.8 201C145.7 201 116.3 201 87.2 201C58 201 29 201 14.5 201L0 201Z"
            />
        </>
    )
}

export default Roadmap