import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import useCustomToast from './useCustomToast';
import { ENDPOINT_API } from './api';

interface Participant {
    congregation: string;
    phone: string;
    email: string;
    lname: string;
    fname: string;
    id: any;
}

interface ParticipantModalProps {
    isOpen: boolean;
    onClose: () => void;
    participant: Participant | null;
}

const ParticipantModal: React.FC<ParticipantModalProps> = ({ isOpen, onClose, participant }) => {
    if (!participant) return null;
    const showToast = useCustomToast();
    const handleCheckIn = async (participantId: number) => {
        console.log('Attempting to check in participant:', participantId); // Debugging

        const url = ENDPOINT_API + 'actions/markAttendance.php';
        console.log('Check-in URL:', url); // Debugging
        const response = await axios.post(url, { participant_id: participantId });
        console.log('Check-in Response:', response.data); // Debugging
        if (response.data.status === 200) {
            showToast({
                title: 'Success',
                description: 'Operation completed successfully.',
                status: 'success',
            });

        }

    };

    // Formik form configuration
    const formik = useFormik({
        initialValues: {
            participant_id: '', // Initialize participant_id as a string
        },
        onSubmit: async (values) => {
            const response = await axios.post(ENDPOINT_API + 'actions/markAttendance.php', values);
            console.log('Check-in Response:', response.data); // Debugging
            if (response.data.status === 200) {
                showToast({
                    title: 'Success',
                    description: 'Operation completed successfully.',
                    status: 'success',
                });

            }
        },
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Participant Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>Name: {participant.fname} {participant.lname}</p>
                    <p>Congregation: {participant.congregation}</p>
                    <p>Phone: {participant.phone}</p>
                    <p>Email: {participant.email}</p>
                    <form onSubmit={formik.handleSubmit}>
                        <input type="text" value={formik.values.participant_id} name='participant_id' onChange={formik.handleChange} />
                        <button
                            type='submit'
                            // onClick={() => handleCheckIn(participant.id)}
                            className="h-10 px-10 bg-green-600 rounded-lg font-medium text-lg text-white"
                        >
                            Check In
                        </button>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ParticipantModal;
