import { useToast } from '@chakra-ui/react';

interface NotificationOptions {
    title: string;
    description: string;
    status: 'success' | 'error';
    duration?: number;
}

const useCustomToast = () => {
    const toast = useToast();

    const showToast = (options: NotificationOptions) => {
        const { title, description, status, duration = 5000 } = options;
        toast({
            title,
            description,
            status,
            duration,
            isClosable: true,
        });
    };

    return showToast;
};

export default useCustomToast;
