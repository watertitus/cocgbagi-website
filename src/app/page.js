// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Stack,
  Text,
  Heading,
  List,
  ListItem,
  OrderedList,
  SimpleGrid,
  Button,
  Flex,
  Image,
} from '@chakra-ui/react'
import { useState } from 'react'
import { CustumSelect, FloatingFormControl } from './component/FloatingInputLabel'
// import Image from 'next/image'

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const YesNo = [
    { value: "No", label: "Not Yet" },
    { value: "Yes", label: "Yes" },
    // Add more titles as needed
  ];
  const gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    // Add more titles as needed
  ];

  return (
    <Box bg={'#'} fontFamily={'Rubik'} color={"gray.700"}>
      <Box
        width={'100%'}
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
            <Image height={'5em'} src={'images/cocgbagi_logo.png'} alt='Logo' />
          </Flex>

          <Flex display={{ base: 'none', md: 'flex' }} flex={1} justify={'center'} >
            <Text textAlign={'center'}>{Date()}</Text>
          </Flex>

          <Flex display={{ base: 'flex', md: 'flex' }} flex={1} align={'end'} justify={'flex-end'}>
            <Button>Register</Button>
          </Flex>

        </Flex>

      </Box>
      <Stack
        spacing={2}
        // width={{ base: '100%', md: '70%', lg: '70%', sm: '100%' }}
        mx={'auto'}
      // bg={'blue.50'}
      >
        <Stack
          p={5}
          mx={'auto'}
          width={{ base: '100%', md: '70%', lg: '70%', sm: '100%' }}
        >
          <Stack py={'2em'} spacing={5}  justifyContent={'center'} bg={''}>
            <Heading
              fontFamily={'Rubik'}
              fontSize={{ base: '3em', md: '4em' }}
              color={'#322f90'} textAlign={''}
              lineHeight={1} >A one-day Youth Bible Lecturship</Heading>
            <Box>
              <Heading fontFamily={'Rubik'} fontSize={'2em'} color={'#322f90'}>Theme:</Heading>
              <Text fontSize={'20pt'}>
                Christian Youth: Maintaining Godly Disposition in today’s Digital & Social Media world Text: 2Tim 2:22
              </Text>
            </Box>
          </Stack>
          <Box>
            <Heading fontFamily={'Rubik'} fontSize={'1.7em'} color={'#322f90'}>Topics:</Heading>
            <OrderedList fontSize={'14pt'} >
              <ListItem>
                <b>Digital Discipleship: Navigating Godly Virtue in cyberspace.</b>
                Proverbs 4:23
                <Text>
                  This topic can explore how young individuals can uphold their faith and values in the digital age. It can cover areas such as maintaining integrity while using the evolving technology in this changing world, discerning digital and social media influences, and using technology as a tool for positive engagement.
                </Text>
              </ListItem>
              <ListItem>
                <b> Godly Foundations for marriage in today&rsquo;s world</b>
                1 Corinthians 6:18
                <Text fontSize={'14pt'}>

                  This topic discusses the challenges youth face in maintaining godly relationships. It can address issues such as communication, trust, and the impact of digital technology on marital dynamics

                </Text>
              </ListItem>
            </OrderedList>
          </Box>
          <Box>
            <Heading fontFamily={'Rubik'} fontSize={'1.7em'} color={'#322f90'}>Date:</Heading>
            <Text fontSize={'14pt'}>
              Saturday March 30, 2024.
            </Text>
          </Box>
          <Box>
            <Heading fontFamily={'Rubik'} fontSize={'1.7em'} color={'#322f90'}>Time:</Heading>
            <Text fontSize={'14pt'}>
              10:00AM to 3:00PM
            </Text>
          </Box>
        </Stack>
        <Box
          mx={'auto'}
          as={'form'} bg={'white'} p={5}
          width={{ base: '100%', md: '70%', lg: '70%', sm: '100%' }}
        >
          <Heading fontFamily={'Rubik'} fontSize={'2em'} color={'#322f90'}>Let&rsquo;s confirm your Attendance</Heading>
          <SimpleGrid columns={{ base: 1, md: 2}} spacing={5} bg={'red'}>
            <CustumSelect
              name="title"
              placeholder="Gender"
              // formLabel="Title"
              options={gender}
              label={gender.label}
            />
            <CustumSelect
              name="title"
              placeholder="Are you baptized"
              // formLabel="Title"
              options={YesNo}
              label={YesNo.label}
            />

            <FloatingFormControl
              name={'fname'}
              label={'My first name is:'}
            />
            <FloatingFormControl
              name={'lname'}
              label={'My last name is:'}
            />
            <FloatingFormControl
              name={'email'}
              label={'My Email Address is:'}
              type={'email'}
            />
            <FloatingFormControl
              name={'tel'}
              label={'My Phone Number is:'}
              type={'tel'}
            />
            <FloatingFormControl
              name={'tel'}
              label={'I worship with the bethren meeting at:'}
              type={'tel'}
            />
            <CustumSelect
              name="title"
              placeholder="State"
              // formLabel="Title"
              value={''}
              options={YesNo}
              label={YesNo.label}
            />

          </SimpleGrid>
          <Button type='submit' >Submit</Button>
        </Box>
      </Stack>
      <Box py={'5em'} bg={'#322f90'}>

      </Box>
    </Box>
  )
}