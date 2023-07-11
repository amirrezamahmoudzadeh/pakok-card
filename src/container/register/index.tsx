"use client";
import {
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Link,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { NextPage } from "next";
import Image from "next/image";
import * as Yup from "yup";
import bg from "../../../public/login-background.png";

interface FormValues {
  mobileNumber: string;
  firstName: string;
  lastName: string;
  checkbox: boolean;
}

const RegisterPage: NextPage = () => {
  const validationSchema = Yup.object().shape({
    mobileNumber: Yup.string()
      .required("لطفا شماره موبایل  را وارد کنید!")
      .min(11, "لطفا شماره موبایل  را درست وارد کنید!!")
      .max(11, "لطفا شماره موبایل  را درست وارد کنید!!")
      .matches(
        /(\+98|0098|98|0)?9\d{9}$/,
        "لطفا شماره موبایل  را درست وارد کنید!!"
      ),
    firstName: Yup.string().required("لطفا کلمه عبور  را وارد کنید!"),
    lastName: Yup.string().required("لطفا کلمه عبور  را وارد کنید!"),
    checkbox: Yup.bool().oneOf(
      [true],
      "برای ثبت نام نیاز است که قوانین و مقررات پاکوک را مطالعه و قبول کنید."
    ),
  });

  const initialValues: FormValues = {
    mobileNumber: "",
    firstName: "",
    lastName: "",
    checkbox: true,
  };

  const handleSubmitForm = (values: FormValues) => {
    console.log(values);
  };

  return (
    <VStack
      height={"100vh"}
      flexDirection={"column"}
      gap={4}
      dir="rtl"
      pt={"10vh"}
      alignItems={"stretch"}
      // px={4}
      maxW={"360px"}
      mx={"auto"}
    >
      <Card
        rounded={6}
        shadow={"base"}
        backgroundImage={bg.src}
        backgroundSize={"cover"}
      >
        <Center py={2}>
          <Image src={"/auth-logo.png"} alt="Pakok" width={180} height={70} />
        </Center>
        <VStack alignItems={"stretch"} p={4}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmitForm}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack gap={4}>
                  <FormControl
                    isInvalid={!!errors.firstName && touched.firstName}
                  >
                    <FormLabel htmlFor="firstName">
                      <Box as={"span"} color={"red.500"} ml={1}>
                        *
                      </Box>
                      نام
                    </FormLabel>
                    <Field
                      as={Input}
                      id="firstName"
                      name="firstName"
                      type="text"
                    />
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.lastName && touched.lastName}
                  >
                    <FormLabel htmlFor="lastName">
                      <Box as={"span"} color={"red.500"} ml={1}>
                        *
                      </Box>
                      نام خانوادگی
                    </FormLabel>
                    <Field
                      as={Input}
                      id="lastName"
                      name="lastName"
                      type="tel"
                    />
                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors.mobileNumber && touched.mobileNumber}
                  >
                    <FormLabel htmlFor="mobileNumber">
                      <Box as={"span"} color={"red.500"} ml={1}>
                        *
                      </Box>
                      شماره موبایل
                    </FormLabel>
                    <Field
                      as={Input}
                      id="mobileNumber"
                      name="mobileNumber"
                      type="tel"
                    />
                    <FormErrorMessage>{errors.mobileNumber}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors.checkbox && touched.checkbox}
                  >
                    <HStack alignItems={"baseline"} >
                      <Field
                        as={Checkbox}
                        colorScheme={"green"}
                        id="checkbox"
                        name="checkbox"
                        defaultChecked
                      />
                      <FormLabel htmlFor="checkbox" fontSize={14}>
                        <Link
                          as={"span"}
                          href="http://pakok.ir/rules"
                          target="_blank"
                          color={"blue.500"}
                        >
                          قوانین و مقررات پاکوک
                        </Link>{" "}
                        را مطالعه نموده و با کلیه موارد آن موافقم.
                      </FormLabel>
                    </HStack>
                    <FormErrorMessage>{errors.checkbox}</FormErrorMessage>
                  </FormControl>

                  <Button colorScheme="blue" type="submit" alignSelf={"end"}>
                    ارسال
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </VStack>
      </Card>
      <Button as={Link} href="" colorScheme="green">
        ثبت نام در سامانه
      </Button>
    </VStack>
  );
};

export default RegisterPage;
