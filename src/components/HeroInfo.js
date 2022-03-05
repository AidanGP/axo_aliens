import React from 'react'
import { Box, Stack, Button, useColorModeValue, Image, HStack } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';


import banner from '../images/banner.png'
import banner_dark from '../images/banner_dark.png'
import banner_text from '../images/banner_text.png'
import cloud_left from '../images/cloud-left.svg'
import cloud_right from '../images/cloud-right.svg'
import stars from '../images/stars.svg'

import blurb from '../images/headings/blurb.png'

function HeroInfo() {
    const accent = useColorModeValue('light.accent', 'dark.accent');
    const bgBanner = useColorModeValue(banner, banner_dark);
    const bgGrad = useColorModeValue('linear(to-t, light.purple 50%, light.pink 90%, light.orange 100%)',
        'linear(to-t, dark.purple 50%, dark.pink 90%, light.orange 100%)');

    const buttonbg = useColorModeValue('linear(to-r, light.green, dark.green)',
        'linear(to-r, light.purple, light.pink)');

    return (
        <Box w='100vw' bgGradient={bgGrad}>
            {/* <Image src={cloud_left} /> */}
            <Stack direction='column' align='center' spacing={0}>
                {/* <Heading fontFamily='Alba' align='center' fontSize='120px' letterSpacing={3} color={accent}>AXOALIENS</Heading> */}
                <HStack>
                    <Box w='20%' display={{ base: 'none', lg: 'block' }}>
                        <Image src={cloud_left} draggable={false} />
                    </Box>

                    <Box w={{ base: '100%', lg: '60%' }} px={'15%'} align='center' pt={40} bgImage={stars} bgRepeat='no-repeat' bgPos='50% 0%'>
                        <Image src={banner_text} objectPosition='center' w='100%' draggable={false} />
                    </Box>
                    <Box w='20%' display={{ base: 'none', lg: 'block' }} >
                        <Image src={cloud_right} draggable={false} />
                    </Box>


                </HStack>
                <Image w={'300px'} pb={4} src={blurb} />
                {/* <Heading size="xl" fontFamily='Mat' color={accent}>The Delivery Service for the Dead</Heading> */}
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
                    fontFamily='Mat'
                    shadow='inner'
                    _focus={{ outline: 0 }}
                    _hover={{
                        bgGradient: buttonbg,
                        transform: 'rotate(-12deg)',
                        transitionDuration: '1s',
                        letterSpacing: 0.1
                    }}
                >
                    Join our Discord
                </Button>

            </Stack>
            <Image src={bgBanner} objectPosition='center' objectFit='contain' draggable={false} />

        </Box >
    )
}

export default HeroInfo