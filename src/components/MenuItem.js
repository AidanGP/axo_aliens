import React from 'react'
import { Link, useColorModeValue, Text } from '@chakra-ui/react'

const MenuItem = (props) => {
    const accent = useColorModeValue('light.accent', 'dark.accent')
    return (
        <Link
            fontSize='md'
            fontWeight='bold'
            color={accent}
            href={props.to}
        >
            <Text>{props.children}</Text>

        </Link>
    )
}
export default MenuItem