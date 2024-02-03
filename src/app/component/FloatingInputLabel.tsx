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
                            my: 2,
                            transformOrigin: "left top"

                        },

                    }
                }
            }
        }
    }
});

export function FloatingFormControl({
    label,
    helperText,
    errorMessage,
    isInvalid = null,
    name = null,
    value,
    onChange,
    onBlur,
    type,
    disabled,
    ref,
    placeholder
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
                        defaultValue={''}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder=" "
                        py={5}
                        onBlur={onBlur}
                        type={type}
                        disabled={disabled}
                        ref={ref}
                    />

                    <FormLabel>{label}</FormLabel>
                    <FormHelperText>{helperText}</FormHelperText>
                    <FormErrorMessage>{errorMessage}</FormErrorMessage>
                </FormControl>
            </Box>
        </ChakraProvider>
    );
}

export function CustumSelect({ formLabel,
    options = [],
    name,
    isInvalid,
    value: propValue,
    onChange,
    disabled,
    placeholder,
    label,
    w,
    formErroMsg, }) {

    const [value, setValue] = useState(propValue || "");
    return (
        <ChakraProvider theme={theme}>
            <FormControl isInvalid={isInvalid} w={w} variant={'floating'} >
                <FormLabel >{formLabel}</FormLabel>
                <Select
                    defaultValue={''}
                    isInvalid={isInvalid}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        onChange(e);
                    }}
                    disabled={disabled}
                >
                    {options.map((option) => (
                        <option
                            key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Select>
                <FormErrorMessage>{formErroMsg}</FormErrorMessage>
            </FormControl>
        </ChakraProvider>
    );
}