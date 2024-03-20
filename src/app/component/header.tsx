'use client'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect, useState } from 'react';

interface Props { }

const Header: NextPage<Props> = ({ }) => {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const formattedDateTime = currentDateTime.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    return <Box
        width={'100%'}
        className='fixed top-0 z-50 bg-white items-center'


    >
        <Flex

            px={5}
            width={{ base: '100%', md: '75%', lg: '70%' }}
            mx={'auto'}
            justifyContent={'space-between'}
            flexDir={'row'} h={'7em'}
            // bg={'#322f90'}
            alignItems={'center'}
            justifyItems={'center'}

        >

            <Flex flex={1} justify={{ base: 'start', md: 'start' }} >
                <Image height={'5em'} src={'/images/cocgbagi_logo.png'} alt='Logo' />
            </Flex>

            <Flex display={{ base: 'none', md: 'flex' }} flex={1} justify={'center'} >
                <Text textAlign={'center'} className=''>{formattedDateTime}</Text>
            </Flex>

            <Flex display={{ base: 'flex', md: 'flex' }} flex={1} align={'end'} justify={'flex-end'}>
                <Button
                    as={'a'}
                    bg={'#ff9800'}
                    border={'1px solid #ff9800'}
                    px={'2.5em'}
                    py={'2em'}
                    href='/contact'
                    _hover={{
                        // bg: '#1c1129',
                        color: '#fff',
                        border: '1px solid #1c1129'
                    }}
                >Contact Us</Button>
            </Flex>

        </Flex>

    </Box>
}

export default Header