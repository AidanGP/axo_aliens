import React from 'react'
import MenuItem from './MenuItem'
import NavIcons from './NavIcons';

import { Stack, Spacer, IconButton, useColorMode, useColorModeValue, Flex, Avatar, Box } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function MenuItems() {
    const { colorMode, toggleColorMode } = useColorMode();
    const accent = useColorModeValue('light.accent', 'dark.accent');
    return (
        <>
            <Box
                display={{ base: "none", lg: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Flex h={16} alignItems={'center'}>
                    <Avatar src='https://bit.ly/broken-link' />
                    <Stack direction="row" spacing={5} pl={5}>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Rarity</MenuItem>
                        <MenuItem>Roadmap</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                        <MenuItem>Team</MenuItem>
                    </Stack>
                    <Spacer />
                    <NavIcons>
                        <IconButton
                            onClick={toggleColorMode}
                            aria-label='Toggle Color Mode'
                            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            color={accent}
                            bgColor="transparent"
                            _focus={{ outline: 0 }}
                        />
                    </NavIcons>
                </Flex>
            </Box>
        </>
    )
}

export default MenuItems