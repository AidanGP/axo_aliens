import React from 'react'
import { Stack } from '@chakra-ui/react';
import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { FaDiscord, FaTwitter, FaInstagram, FaGem } from 'react-icons/fa';
import { GiSailboat } from 'react-icons/gi'



const IconLink = ({ name, icon, ...rest }) => {
    const accent = useColorModeValue('light.accent', 'dark.accent')
    return (
        <IconButton
            aria-label={name}
            icon={icon}
            color={accent}
            bgColor="transparent"
            _focus={{ outline: 0 }}
            {...rest}
        />
    )
}

function NavIcons({ children, dirn, ...rest }) {
    return (
        <Stack direction={dirn ? dirn : ["column", "column", "row", "row"]} align="center" spacing={3}>
            <IconLink name="Twitter" icon={<FaTwitter />} {...rest} />
            <IconLink name="Instagram" icon={<FaInstagram />} {...rest} />
            <IconLink name="Discord" icon={<FaDiscord />} {...rest} />
            <IconLink name="OpenSea" icon={<GiSailboat />} disabled {...rest} />
            <IconLink name="Rarity" icon={<FaGem />} disabled {...rest} />
            {children}
        </Stack>
    )
}

export default NavIcons