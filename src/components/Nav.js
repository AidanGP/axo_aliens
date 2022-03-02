import {
    Box,
    Flex,
    Avatar,
    Spacer
} from '@chakra-ui/react';

import NavBarContainer from './NavBarContainer'
import MenuItems from './MenuItems';
import NavCollapse from './NavCollapse';
import HeroInfo from './HeroInfo';



export default function Nav() {

    return (
        <>

            <NavBarContainer py={{ base: 0, lg: 2 }}>
                <Box display={{ base: "block", lg: "none" }}>
                    <Flex h={16} alignItems={'center'}>
                        <Avatar src='https://bit.ly/broken-link' />
                        <Spacer />
                        <NavCollapse />
                    </Flex>
                </Box>
                <MenuItems />
            </NavBarContainer>

            <HeroInfo />
        </>
    );
}