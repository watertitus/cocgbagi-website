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
import { useFormik } from 'formik'
import axios from 'axios'
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
  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      gender: '',
      email: '',
      phone: '',
      baptized: '',
      congregation: '',
      state: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
     const response =  axios.post('http://localhost:8000/auth/register.php', values)
     console.log(response.data)
    },
  });
  return (
    <Box bg={'#'} fontFamily={'Rubik'} color={"gray.700"}>
      <Box width={'100%'}
        // h={'100dvh'}
        pb={5}
        bgGradient="linear(to-br, blue.900, blue.900)"
        backgroundImage={`url('/images/bg.jpg')`} // Replace with the path to your image
        backgroundSize="cover"
        backgroundPosition="center"
      // height="400px" // Set the desired height

      >
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
              <Image height={'5em'} src={'images/coc_logo_white.png'} alt='Logo' />
            </Flex>

            <Flex display={{ base: 'none', md: 'flex' }} flex={1} justify={'center'} >
              <Text textAlign={'center'} textColor={'white'}>{Date()}</Text>
            </Flex>

            <Flex display={{ base: 'flex', md: 'flex' }} flex={1} align={'end'} justify={'flex-end'}>
              <Button
                bg={'#ff9800'}
                border={'1px solid #ff9800'}
                px={'2.5em'}
                py={'2em'}

                _hover={{
                  // bg: '#1c1129',
                  color: '#fff',
                  border: '1px solid #1c1129'
                }}
              >Register</Button>
            </Flex>

          </Flex>

        </Box>

        <Stack
          mx={'auto'}
          width={{ base: '100%', md: '70%', lg: '70%', sm: '100%' }}
          py={'2em'}
          spacing={'2em'}
          justifyContent={'center'}
          bg={''}
          px={{ base: '1em' }}
        >
          <Heading
            fontFamily={'Rubik'}
            fontSize={{ base: '3em', md: '4em' }}
            color={'yellow.100'} textAlign={''}
            lineHeight={1} >A one-day Youth Bible Lecturship</Heading>
          <Box>
            <Heading fontFamily={'Rubik'} fontSize={'2em'} color={'#ff9800'}>Theme:</Heading>
            <Text fontSize={'20pt'} color={'#fff'}>
              Christian Youth: Maintaining Godly Disposition in today’s Digital & Social Media world Text: 2Tim 2:22
            </Text>
          </Box>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={10}>
            <Box>
              <Heading fontFamily={'Rubik'} fontSize={'1.7em'} color={'#ff9800'}>Date:</Heading>
              <Text fontSize={'20pt'} color={'#fff'}>
                Saturday March 30, 2024.
              </Text>
            </Box>
            <Box>
              <Heading fontFamily={'Rubik'} fontSize={'1.7em'} color={'#ff9800'}>Time:</Heading>
              <Text fontSize={'20pt'} color={'#fff'}>
                10:00AM to 3:00PM
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Stack
        spacing={'1em'}
        // width={{ base: '100%', md: '70%', lg: '70%', sm: '100%' }}
        mx={'auto'}
      // bg={'blue.50'}
      >
        <Stack
          p={5}
          spacing={4}
          mx={'auto'}
          width={{ base: '100%', md: '70%', lg: '70%', sm: '100%' }}
        >

          <Box>
            <Heading mb={2} fontFamily={'Rubik'} fontSize={'1.7em'} color={'#322f90'}>Topics:</Heading>

            <OrderedList fontSize={'14pt'} spacing={5}>
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

        </Stack>
        <Box
          mx={'auto'}
          as={'form'} bg={'white'} p={5}
          width={{ base: '100%', md: '70%', lg: '70%', sm: '100%' }}
          onSubmit={formik.handleSubmit}
        >
          <Heading pb={5} fontFamily={'Rubik'} fontSize={'2em'} color={'#322f90'}>Let&rsquo;s confirm your Attendance</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} bg={'white'} py={2}>
            <CustumSelect
              name="gender"
              placeholder="Gender"
              // formLabel="Title"
              onChange={formik.handleChange}
              value={formik.values.gender}
              options={gender}
              label={gender.label}
            />
            <CustumSelect
              name="baptized"
              placeholder="Are you baptized"
              // formLabel="Title"
              options={YesNo}
              label={YesNo.label}
              onChange={formik.handleChange}
              value={formik.values.baptized}
            />

            <FloatingFormControl
              name={'fname'}
              label={'My first name is:'}
              onChange={formik.handleChange}
              value={formik.values.fname}
            />
            <FloatingFormControl
              name={'lname'}
              label={'My last name is:'}
              onChange={formik.handleChange}
              value={formik.values.lname}
            />
            <FloatingFormControl
              name={'email'}
              label={'My Email Address is:'}
              type={'email'}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <FloatingFormControl
              name={'phone'}
              label={'My Phone Number is:'}
              type={'tel'}
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <FloatingFormControl
              name={'congregation'}
              label={'I worship with the bethren meeting at:'}
              type={'text'}
              onChange={formik.handleChange}
              value={formik.values.congregation}
            />
            <CustumSelect
              name="state"
              placeholder="State"
              // formLabel="Title"

              options={YesNo}
              label={YesNo.label}
              onChange={formik.handleChange}
              value={formik.values.state}

            />

          </SimpleGrid>
          <Button
            type='submit'
            bg={'#ff9800'}
            px={'2.5em'}
            py={'2em'}
            _hover={{
              bg: '#1c1129',
              color: '#ff9800'
            }}
          >Submit</Button>
        </Box>
      </Stack>

      <Box py={'5em'} bg={'#1c1129'}>

      </Box>
    </Box>
  )
}