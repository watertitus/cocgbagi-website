// app/page.tsx
'use client'

import {
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
  useToast,
  Link
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { CustumSelect, FloatingFormControl } from './component/FloatingInputLabel'
import { useFormik } from 'formik'
import axios from 'axios'
// import Image from 'next/image'
import { StatesInNG } from './data'
import * as Yup from 'yup'
import IndexPage from './component/IndexPage'
export default function Page() {
  const toast = useToast();
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
  const [loading, setLoading] = useState(false)
  const [registered, setRegistered] = useState(false)
  const modifiedStates = StatesInNG.map(state => ({ label: state, value: state }));

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
    validationSchema: Yup.object({
      fname: Yup.string().required('Enter your First name'),
      lname: Yup.string().required('Enter your Last name'),
      gender: Yup.string().required('Please select your gender'),
      email: Yup.string().email('Please Enter a Valid Email address').required('Email is required'),
      phone: Yup.string().required('Please Enter a Phone number'),
      baptized: Yup.string().required('Please select if you are baptized'),
      congregation: Yup.string().required('Please Enter your congregation where you place you membership'),
      state: Yup.string().required('Please Select the State where your congregation is located'),
    }),

    onSubmit: async (values) => {
      setLoading(true);

      try {
        const response = await axios.post('https://api.cocgbagi.com/auth/register.php', values);

        if (response.data.status === "200") {
          toast({
            title: "Registration Message",
            description: response.data.message,
            position: "top",
            status: "success",
            isClosable: true,
          });
          setRegistered(true);
        } else {
          toast({
            title: "Registration Message",
            description: response.data.message,
            position: "top",
            status: "error",
            isClosable: true,
          });
        }
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "An error occurred during registration.",
          position: "top",
          status: "error",
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    },
  });


  return (
    <Box bg={'#'} fontFamily={'Rubik'} color={"gray.700"}>
      <IndexPage pageTitle={'Church of CHrist, Gbagi Ibadan Youth Lectureship'} />
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
        pb={'4em'}
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
                <b>Digital Discipleship: Navigating Godly Virtue in cyberspace. </b>
                Proverbs 4:23
                <Text>
                 We hope that this topic will  explore how young individuals can uphold their faith and values in the digital age. It encompasses areas such as maintaining integrity while using evolving technology, discerning digital and social media influences, and utilizing technology as a tool for positive engagement
                </Text>
              </ListItem>
              <ListItem>
                <b> Godly Foundations for marriage in today&rsquo;s world. </b>
                1 Corinthians 6:18 
                <Text fontSize={'14pt'}>

                  We hope that this  topic will delve into the challenges youth face in maintaining godly relationships, covering issues such as communication, trust, and the impact of digital technology on marital dynamics.

                </Text>
              </ListItem>
            </OrderedList>
          </Box>

        </Stack>
        {registered ?
          <>
            <Stack
              p={5}
              spacing={4}
              mx={'auto'}
              width={{ base: '100%', md: '70%', lg: '70%', sm: '100%' }}
            >
              <Heading mb={2} fontFamily={'Rubik'} fontSize={'2em'} color={'#322f90'}>
                Thank you for registering!
              </Heading>
              <Text fontSize={'20pt'} color={'#322f90'}>
                You have successfully registered for the Youth Bible Lectureship. We look forward to having you join us on Saturday, March 30, 2024, from 10:00 AM to 3:00 PM.
              </Text>
            </Stack>
          </>
          :
          <Box
            mx={'auto'}
            as={'form'} bg={'white'} p={5}
            width={{ base: '100%', md: '70%', lg: '70%', sm: '100%' }}
            onSubmit={formik.handleSubmit}
            method='post'
          >
            <Heading pb={5} fontFamily={'Rubik'} fontSize={'2em'} color={'#322f90'}>Let&rsquo;s confirm your Attendance</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} bg={'white'} py={2}>
              <CustumSelect
                isInvalid={formik.errors.gender && formik.touched.gender}
                errorMessage={formik.errors.gender}
                name="gender"
                placeholder="Gender"
                // formLabel="Title"
                onChange={formik.handleChange}
                value={formik.values.gender}
                options={gender}
                label={gender.label}
              />
              <CustumSelect
                isInvalid={formik.errors.baptized && formik.touched.baptized}
                errorMessage={formik.errors.baptized}
                name="baptized"
                placeholder="Are you baptized"
                // formLabel="Title"
                options={YesNo}
                label={YesNo.label}
                onChange={formik.handleChange}
                value={formik.values.baptized}
              />

              <FloatingFormControl
                isInvalid={formik.errors.fname && formik.touched.fname}
                errorMessage={formik.errors.fname}
                name={'fname'}
                label={'My first name is:'}
                onChange={formik.handleChange}
                value={formik.values.fname}
              />
              <FloatingFormControl
                isInvalid={formik.errors.lname && formik.touched.lname}
                errorMessage={formik.errors.lname}
                name={'lname'}
                label={'My last name is:'}
                onChange={formik.handleChange}
                value={formik.values.lname}
              />
              <FloatingFormControl
                isInvalid={formik.errors.email && formik.touched.email}
                errorMessage={formik.errors.email}
                name={'email'}
                label={'My Email Address is:'}
                type={'email'}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <FloatingFormControl
                isInvalid={formik.errors.phone && formik.touched.phone}
                errorMessage={formik.errors.phone}
                name={'phone'}
                label={'My Phone Number is:'}
                type={'tel'}
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              <FloatingFormControl
                isInvalid={formik.errors.congregation && formik.touched.congregation}
                errorMessage={formik.errors.congregation}
                name={'congregation'}
                label={'I worship with the bethren meeting at:'}
                type={'text'}
                onChange={formik.handleChange}
                value={formik.values.congregation}
              />
              <CustumSelect
                errorMessage={formik.errors.state}
                isInvalid={formik.errors.state && formik.touched.state}
                name="state"
                placeholder="Select State"
                // formLabel="Title"
                options={modifiedStates}
                label={modifiedStates.label}
                onChange={formik.handleChange}
                value={formik.values.state}

              />

            </SimpleGrid>
            <Button

              isLoading={loading}
              loadingText={'Submiting...'}
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
        }


      </Stack>

      <Box py={'5em'} bg={'#1c1129'}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          maxW={{ base: '100%', md: '70%', lg: '70%', sm: '100%' }}
          mx="auto"
          px={5}
          color={'#fff'}
        >
          <Box>
            <Text fontSize="lg">© {new Date().getFullYear()} Church of Christ Gbagi, Ibadan</Text>
          </Box>
          <Box mt={{ base: 4, md: 0 }}>
            <Flex>
              <Link pr={4}>Sermons</Link>
              <Link>Teachings</Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}