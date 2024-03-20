import {
    ChakraProvider,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    extendTheme,
    Box,
    Select
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)"
};

export const theme = extendTheme({
    components: {
        Form: {
            variants: {
                floating: {
                    container: {
                        _focusWithin: {
                            label: {
                                ...activeLabelStyles
                            }
                        },
                        "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, .chakra-select:not(:focus):not(:placeholder-shown) + label, textarea:not(:placeholder-shown) ~ label": {
                            ...activeLabelStyles
                        },
                        label: {
                            top: 0,
                            left: 0,
                            zIndex: 2,
                            position: "absolute",
                            backgroundColor: "white",
                            pointerEvents: "none",
                            mx: 3,
                            px: 1,
                            my: 3,
                            transformOrigin: "left top"

                        },

                    }
                }
            }
        }
    }
});

export function FloatingFormControl({
    label = null,
    helperText = null,
    errorMessage = null,
    isInvalid = false,

    h = "50px",
    py = 5,
    ...rest

}) {
    return (
        <ChakraProvider theme={theme}>
            <Box  >
                <FormControl
                    variant="floating"
                    id="first-name"
                    isInvalid={isInvalid}

                >
                    <Input
                        placeholder=" "
                        h={h}
                        {...rest}
                    />

                    <FormLabel>{label}</FormLabel>
                    <FormHelperText>{helperText}</FormHelperText>
                    <FormErrorMessage>{errorMessage}</FormErrorMessage>
                </FormControl>
            </Box>
        </ChakraProvider>
    );
}

export function CustumSelect({ formLabel = null,
    options,
    isInvalid = false,
    errorMessage = null,
    ...rest }) {


    return (
        <ChakraProvider theme={theme}>
            <FormControl isInvalid={isInvalid} variant={'floating'} >
                <FormLabel >{formLabel}</FormLabel>
                <Select
                    h="50px"
                    {...rest}
                >
                    {options.map((option) => (
                        <option
                            key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Select>
                <FormErrorMessage>{errorMessage}</FormErrorMessage>
            </FormControl>
        </ChakraProvider>
    );
}