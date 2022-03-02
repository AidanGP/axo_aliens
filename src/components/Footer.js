import React from 'react'
import { Box, Stack, Avatar, Text, useColorModeValue } from '@chakra-ui/react';
import NavIcons from './NavIcons';

function Footer() {
    const bg = useColorModeValue('light.yellow', 'dark.yellow')
    return (
        <>
            <Box
                backgroundColor={bg}
                minH="30vh"
                pt="16"
                pb="32"
            >
                <Stack direction="column" spacing={16} alignItems={'center'}>
                    <Avatar size='2xl' src='https://bit.ly/broken-link' />
                    <NavIcons color={'black'} w={12} h={12} fontSize="20px" _hover={{ backgroundColor: "rgb(0, 0, 0, 0.2)" }} />

                    <Text fontSize="lg">
                        © 2022 AXO Aliens NFT. All right reserved.
                    </Text>
                </Stack>
            </Box>
        </>
    )
}

export default Footer