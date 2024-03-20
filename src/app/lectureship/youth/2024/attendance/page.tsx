"use client"
import { NextPage } from 'next'
import { FloatingFormControl } from '../../../../component/FloatingInputLabel'
import { useEffect, useState } from 'react';
import FetchParticipant from '../../../../component/FetchParticipants';
import { useFormik } from 'formik';
import axios from 'axios';
import { Button, useToast } from '@chakra-ui/react';


interface Props { }
interface Props {
    participants: Participant[]; // Define an interface for participant data
}

interface Participant {

    congregation: string;
    phone: string;
    email: string;
    lname: string;
    fname: string;
    id: any;


}


const Page: NextPage<Props> = () => {
    const toast = useToast();
    const [searchTerm, setSearchTerm] = useState(''); // State variable for search term
    const [searchResults, setSearchResults] = useState<Participant[]>([]); // State variable for search results
    const { loading, data: participants, error } = FetchParticipant({ apiUrl: 'fetch/participant.php' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase()); // Update search term on input change and convert to lowercase
    };

    useEffect(() => {
        filterParticipants(); // Call filter function on component mount and search term change
    }, [searchTerm]); // Dependency array for useEffect

    const toastNotification = (title: string, description: string, status: 'success' | 'error') => {
        toast({
            title,
            description,
            status,
            duration: 5000,
            isClosable: true,
        });
    };

    const filterParticipants = () => {
        if (!searchTerm) {
            setSearchResults([]); // Clear results if search term is empty
            return;
        }

        const filtered = participants?.filter(
            (participant) =>
                participant.email.toLowerCase().includes(searchTerm) || participant.phone.toLowerCase().includes(searchTerm)
        );

        setSearchResults(filtered); // Update search results based on filtered data
    };

    const handleCheckIn = async (participantId: number) => {
        console.log('Attempting to check in participant:', participantId); // Debugging
        try {
            const url = ENDPOINT_API + 'actions/markAttendance.php';
            console.log('Check-in URL:', url); // Debugging
            const response = await axios.post(url, { participant_id: participantId });
            console.log('Check-in Response:', response.data); // Debugging
            if (response.data.status === 200) {
                toastNotification('Checked In', 'Participant has been successfully checked in.', 'success');
            }
        } catch (error) {
            console.error('Check-in Error:', error); // Debugging
            toastNotification('Check-In Error', 'An error occurred while trying to check in the participant.', 'error');
        }
    };


    return (
        <div className='h-[85vh] md:bg-grady-100 md:w-4/5 md:mx-auto py-5 md:my-28 my-32 rounded-lg px-5 space-y-5 items-center md:fixed md:left-20 md:right-20 w-full mx-2' >
            <p className='text-center text-3xl font-bold'>Registration Point</p>
            <div className=' md:w-3/5 mx-auto grid md:grid-cols-1 md:gap-5 md:p-5 gap-2 relative '>

                <input
                    type='email'
                    className='h-12 border-2 active:border-gray-400 border-gray-200 focus-within:border-gray-200 w-full py-2 px-3  text-lg text-center'
                    placeholder='Search by email or Phone Number'
                    value={searchTerm}
                    onChange={handleChange}

                />

                {searchResults.length > 0 ? (
                    <div className="md:grid md:grid-cols-1 flex-start space-y-2  justify-around w-full py-4  gap-2 text-lg rounded-lg overflow-scroll h-96">
                        {searchResults?.map((participant) => (
                            <div key={participant.id} className="w-full flex-1 space-y-2 bg-gray-50  py-3 px-3">
                                <p>
                                    Name:<strong> {participant.fname} {participant.lname}</strong>{' '}
                                </p>
                                <p>
                                    Congregation: <strong>{participant.congregation}</strong>
                                </p>
                                <p>
                                    Phone: <strong>{participant.phone}</strong>
                                </p>
                                <p>
                                    Email: <strong>{participant.email}</strong>
                                </p>
                                <div className="justify-center items-center">
                                    <button
                                        onClick={() =>
                                            handleCheckIn(participant.id)
                                        }
                                        className="h-10 px-10 bg-green-600 rounded-lg font-medium text-lg text-white "
                                    >
                                        Check In
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='bg-red-300 py-3 px-5 text-center rounded-lg'>
                        <p className='text-lg font-bold text-balance text-red-700'>No participants found for "{searchTerm}"</p>
                    </div>
                )}
            </div>
        </div>
    )

}

export default Page