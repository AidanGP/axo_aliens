import React from 'react'
import { Link, useColorModeValue, Text, transform } from '@chakra-ui/react'

const MenuItem = (props) => {
    const accent = useColorModeValue('light.accent', 'dark.accent')
    return (
        <Link
            fontSize='md'
            fontWeight='bold'
            color={accent}
            href={props.to}
            _hover={{
                textDecoration: 'none',
                transform: 'rotate(-12deg)',
                transitionDuration: '1s'
            }}
        >
            <Text>{props.children}</Text>

        </Link>
    )
}
export default MenuItem