import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const LoginWithOTP = () => {
  const [stepOneIsDone, setstepOneIsDone] = useState(false);
  return (
    <>
      {!stepOneIsDone ? (
        <VStack>
          <FormControl>
            <FormLabel>
              <Box as={"span"} color={"red.500"} ml={1}>
                *
              </Box>
              شماره موبایل
            </FormLabel>
            <Input type="tel" />
            <FormHelperText></FormHelperText>
          </FormControl>
          <Button
            alignSelf={"flex-end"}
            colorScheme="blue"
            onClick={() => setstepOneIsDone(true)}
          >
            ارسال
          </Button>
        </VStack>
      ) : (
        <VStack>
          <FormControl>
            <FormLabel>
              <Box as={"span"} color={"red.500"} ml={1}>
                *
              </Box>
              رمز یکبارمصرف
            </FormLabel>
            <Input type="number" />
            <FormHelperText></FormHelperText>
          </FormControl>
          <HStack justifyContent={"space-between"} w={"full"} >
            <Button
              colorScheme="blue"
              onClick={() => setstepOneIsDone(false)}
              variant={"ghost"}
            >
              بازگشت
            </Button>
            <Button colorScheme="blue" variant={"outline"} >ارسال مجدد</Button>
            <Button colorScheme="blue">ورود</Button>
          </HStack>
        </VStack>
      )}
    </>
  );
};

export default LoginWithOTP;
