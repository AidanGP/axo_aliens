import React from 'react'
import { Box, useColorMode, useColorModeValue, Flex } from '@chakra-ui/react'

function NavBarContainer({ children, ...props }) {
    const accent = useColorModeValue('light.accent', 'dark.accent');
    return (
        <Box
            px={6}
            mt={8}
            width={['95%', '95%', '85%', '75%']}
            bgColor='white'
            borderTopWidth={2}
            borderLeftWidth={2}
            borderRightWidth={2}
            borderBottomWidth={8}
            borderColor={accent}
            rounded="100"
            position='fixed'
            top={8}
            left={'50%'}
            transform={'translate(-50%, -50%)'}
            zIndex="20"
            {...props}
        >
            {children}
        </Box>
    )
}

export default NavBarContainer