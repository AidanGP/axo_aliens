import React from 'react'
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    IconButton,
    useDisclosure,
    Stack,
    Heading
} from '@chakra-ui/react'
import { DragHandleIcon } from '@chakra-ui/icons'

import MenuItem from './MenuItem'
import NavIcons from './NavIcons';

function NavCollapse() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <IconButton
                aria-label="Menu Collapse"
                onClick={onOpen}
                bgColor="transparent"
                _focus={{ outline: 0 }}
                icon={<DragHandleIcon />}
            />
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Stack direction="column" align="center" spacing={8} py={12}>
                        <Heading size='xl'>AXO Aliens</Heading>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Rarity</MenuItem>
                        <MenuItem>Roadmap</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                        <MenuItem>Team</MenuItem>
                    </Stack>
                    <NavIcons dirn="column" w={12} h={12} fontSize="20px" />
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default NavCollapse