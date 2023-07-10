import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

interface FormValues {
  mobileNumberOTP: string;
}

const validationSchema = Yup.object().shape({
  mobileNumberOTP: Yup.string()
    .required("لطفا شماره موبایل  را وارد کنید!")
    .min(11, "لطفا شماره موبایل  را درست وارد کنید!!")
    .max(11, "لطفا شماره موبایل  را درست وارد کنید!!")
    .matches(
      /(\+98|0098|98|0)?9\d{9}$/,
      "لطفا شماره موبایل  را درست وارد کنید!!"
    ),
});

const LoginByOTP = () => {
  const [stepOneIsDone, setstepOneIsDone] = useState(false);

  const initialValues: FormValues = {
    mobileNumberOTP: "",
  };

  const handleSubmitForm = (values: FormValues) => {
    console.log(values);
    setstepOneIsDone(true)
  };

  return (
    <>
      {!stepOneIsDone ? (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmitForm}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack>
                <FormControl
                  isInvalid={!!errors.mobileNumberOTP && touched.mobileNumberOTP}
                >
                  <FormLabel htmlFor="mobileNumberOTP">
                    <Box as={"span"} color={"red.500"} ml={1}>
                      *
                    </Box>
                    شماره موبایل
                  </FormLabel>
                  <Field
                    as={Input}
                    id="mobileNumberOTP"
                    name="mobileNumberOTP"
                    type="tel"
                  />
                  <FormErrorMessage>{errors.mobileNumberOTP}</FormErrorMessage>
                </FormControl>
                <Button alignSelf={"flex-end"} colorScheme="blue" type="submit">
                  ارسال
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
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
          <HStack justifyContent={"space-between"} w={"full"}>
            <Button
              colorScheme="blue"
              onClick={() => setstepOneIsDone(false)}
              variant={"ghost"}
            >
              بازگشت
            </Button>
            <Button colorScheme="blue" variant={"outline"}>
              ارسال مجدد
            </Button>
            <Button colorScheme="blue">ورود</Button>
          </HStack>
        </VStack>
      )}
    </>
  );
};

export default LoginByOTP;
