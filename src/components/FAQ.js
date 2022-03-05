import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Image,
    useColorModeValue
} from '@chakra-ui/react'
import ImageDivider from './ImageDivider';
import head from '../images/headings/faq.png'

function FAQItem({ question, answer }) {
    return (
        <>
            <AccordionItem>
                <h2>
                    <AccordionButton _focus={{ outline: 0 }}>
                        <Box py={6} flex='1' textAlign='left'>
                            {question}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel py={8}>
                    {answer}
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}

function FAQ() {
    const bg = useColorModeValue('light.orange', 'dark.orange')
    return (
        <>
            <Box backgroundColor={bg}>
                <Box mx={[4, 4, 32, 64]} align="center">
                    <Image w={64} src={head} draggable='false' />
                    <Accordion w="100%" allowToggle>
                        <FAQItem question="How much is whitelist mint?" answer="Presale mint price is 20 matic" />
                        <FAQItem question="How much is public mint?" answer="Public Sale mint price is 30 matic" />
                        <FAQItem question="How many can a whitelisted member mint?" answer="Up to 5 NFT's per wallet" />
                        <FAQItem question="How many can a non-whitelisted member mint?" answer="Up to 10 NFT's per transaction" />
                    </Accordion>
                </Box >
            </Box>
            <ImageDivider
                fill_1={useColorModeValue('#FFCC99', '#FFAB57')}
                fill_2={useColorModeValue('#C5C5FF', '#A4A4F4')}
                d="M0 91L14.5 102.3C29 113.7 58 136.3 87.2 135.8C116.3 135.3 145.7 111.7 174.8 98C204 84.3 233 80.7 262 85.7C291 90.7 320 104.3 349 114.8C378 125.3 407 132.7 436.2 125.3C465.3 118 494.7 96 523.8 87.8C553 79.7 582 85.3 611 98.8C640 112.3 669 133.7 698 144.3C727 155 756 155 785.2 141C814.3 127 843.7 99 872.8 100C902 101 931 131 945.5 146L960 161L960 201L945.5 201C931 201 902 201 872.8 201C843.7 201 814.3 201 785.2 201C756 201 727 201 698 201C669 201 640 201 611 201C582 201 553 201 523.8 201C494.7 201 465.3 201 436.2 201C407 201 378 201 349 201C320 201 291 201 262 201C233 201 204 201 174.8 201C145.7 201 116.3 201 87.2 201C58 201 29 201 14.5 201L0 201Z"
            />
        </>
    )
}

export default FAQ