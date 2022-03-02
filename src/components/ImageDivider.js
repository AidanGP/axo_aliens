import React from 'react'
import { Box } from '@chakra-ui/react'

const ImageDivider = (props) => {
    return (
        <Box w="100%">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="visual" viewBox="0 0 960 200" width="100%" version="1.1">
                <rect x="0" y="0" width="960" height="200" fill={props.fill_1} />
                <path d={props.d} fill={props.fill_2} strokeLinecap="round" strokeLinejoin="miter" />
            </svg>
        </Box>
    )
}

export default ImageDivider