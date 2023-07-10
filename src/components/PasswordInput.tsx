"use client";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Field } from "formik";
import { FC, useState } from "react";
import Eye from "./icons/Eye";
import EyeInvisible from "./icons/EyeInvisible";

interface Props {
  isInvalid?: boolean;
  formLabel: string;
  id: string;
  errorMassage?: string;
}

const PasswordInput: FC<Props> = ({
  formLabel,
  id,
  errorMassage,
  isInvalid,
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel htmlFor={id}>
        <Box as={"span"} color={"red.500"} ml={1}>
          *
        </Box>
        {formLabel}
      </FormLabel>
      <InputGroup>
        <Field
          as={Input}
          type={showPass ? "text" : "password"}
          pr={4}
          id={id}
          name={id}
        />
        <InputLeftElement>
          <Button
            size="sm"
            onClick={() => setShowPass(!showPass)}
            bg={"none"}
            p={0}
            minWidth={"fit-content"}
          >
            {showPass ? <EyeInvisible /> : <Eye />}
          </Button>
        </InputLeftElement>
      </InputGroup>
      <FormErrorMessage>{errorMassage}</FormErrorMessage>
    </FormControl>
  );
};

export default PasswordInput;
