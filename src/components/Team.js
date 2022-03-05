import React from 'react'
import { Box, Heading, SimpleGrid, useColorModeValue, Image, HStack, Text, Spacer, IconButton } from '@chakra-ui/react';
import ImageDivider from './ImageDivider';

import a from '../images/team/1.png'
import b from '../images/team/2.png'
import c from '../images/team/3.png'
import { FaTwitter } from 'react-icons/fa';


import head from '../images/headings/team.png'

const TeamMember = ({ name, role, color, alt_color, src }) => {
    return (
        <Box
            bg={color}
            rounded="12px"
            shadow='lg'
            _hover={{
                boxShadow: 'inner'
            }}
        >
            <HStack spacing={8}>
                <Image w='120px' pl={2} rounded='12px' justifySelf='flex-start' src={src} draggable={false} />
                <Box align="left">
                    <HStack>
                        <Heading size='lg' fontFamily={'Mat'} fontWeight='hairline' color={alt_color}>
                            {name}
                        </Heading>
                        <IconButton
                            icon={<FaTwitter />}
                            color={alt_color}
                            bgColor="transparent"
                            size='md'
                            _hover={{ backgroundColor: "rgb(0, 0, 0, 0.1)" }}
                            _focus={{ outline: 0 }}
                        />
                    </HStack>
                    <Text size="md" color={alt_color}>
                        {role}
                    </Text>
                </Box>
                <Spacer />

            </HStack>
        </Box>
    )
}


function Team() {
    const bg = useColorModeValue('light.purple', 'dark.purple')
    return (
        <>
            <Box backgroundColor={bg} align="center">
                <Image w={64} src={head} draggable='false' />
                <Box w={['95%', '95%', '95%', '98%', '85%', '70%']} py={8}>
                    <SimpleGrid columns={{ base: '1', lg: '3' }} spacingY={4} spacingX={{ base: 0, lg: 5, xl: 10 }} >
                        <TeamMember color="light.orange" alt_color="dark.orange" name="Jason" role="Project Manager" src={a} />
                        <TeamMember color="light.green" alt_color="dark.green" name="Brenden" role="Developer" src={b} />
                        <TeamMember color="light.blue" alt_color="dark.blue" name="Randall" role="Community Manager" src={c} />
                    </SimpleGrid>
                </Box>
            </Box>
            <ImageDivider
                fill_1={useColorModeValue('#C5C5FF', '#A4A4F4')}
                fill_2={useColorModeValue('#FFE98A', '#FFDE4F')}
                d="M0 105L14.5 107C29 109 58 113 87.2 115C116.3 117 145.7 117 174.8 122.5C204 128 233 139 262 135.8C291 132.7 320 115.3 349 109.3C378 103.3 407 108.7 436.2 118.2C465.3 127.7 494.7 141.3 523.8 149C553 156.7 582 158.3 611 153.3C640 148.3 669 136.7 698 127.3C727 118 756 111 785.2 112.2C814.3 113.3 843.7 122.7 872.8 117.7C902 112.7 931 93.3 945.5 83.7L960 74L960 201L945.5 201C931 201 902 201 872.8 201C843.7 201 814.3 201 785.2 201C756 201 727 201 698 201C669 201 640 201 611 201C582 201 553 201 523.8 201C494.7 201 465.3 201 436.2 201C407 201 378 201 349 201C320 201 291 201 262 201C233 201 204 201 174.8 201C145.7 201 116.3 201 87.2 201C58 201 29 201 14.5 201L0 201Z"
            />
        </>
    )
}

export default Team