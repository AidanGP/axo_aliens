import React from 'react'
import { Box, Stack, Heading, Button, useColorModeValue, Image } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';


import banner from '../images/banner.png'
import banner_dark from '../images/banner_dark.png'

function HeroInfo() {
    const accent = useColorModeValue('light.accent', 'dark.accent');
    const bgBanner = useColorModeValue(banner, banner_dark);
    const bgGrad = useColorModeValue('linear(to-t, light.purple 50%, light.pink 90%, light.orange 100%)',
        'linear(to-t, dark.purple 50%, dark.pink 90%, light.orange 100%)');

    const buttonbg = useColorModeValue('linear(to-r, light.green, dark.green)',
        'linear(to-r, light.purple, light.pink)');

    return (
        <Box w='100vw' pt={48} bgGradient={bgGrad}>
            <Stack direction='column' align='center' spacing={8} mb={4}>
                <Heading align='center'>AXO</Heading><Heading>Aliens</Heading>
                <Heading size="xl">Lorem ipsum dolor</Heading>
                <Button
                    leftIcon={<ChevronLeftIcon />}
                    rightIcon={<ChevronRightIcon />}
                    color={accent}
                    size="lg"
                    bgColor='white'
                    variant='outline'
                    borderTopWidth={3}
                    borderLeftWidth={3}
                    borderRightWidth={3}
                    borderBottomWidth={6}
                    borderColor={buttonbg}
                    px={8}
                    py={6}
                    shadow='inner'
                    _focus={{ outline: 0 }}
                    _hover={{
                        bgGradient: buttonbg,
                        transform: 'rotate(-2deg)',
                        letterSpacing: 0.1
                    }}
                >
                    Join our Discord
                </Button>

            </Stack>
            <Image src={bgBanner} objectPosition='center' objectFit='contain' />
            {/* <Image
                // objectFit='cover'
                objectFit='cover'
                backgroundPosition='center'
                // objectPosition='50% 100%'
                src={bgBanner} /> */}

        </Box >
    )
}

export default HeroInfo