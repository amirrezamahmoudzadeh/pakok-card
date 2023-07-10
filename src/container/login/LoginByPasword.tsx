"use client";
import PasswordInput from "@/components/PasswordInput";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { setTabPanelDetails } from ".";

interface Props {
  tabPanelType: 1 | 2;
  setTabPaneType: (value: 1 | 2) => void;
}

interface FormValues {
  mobileNumber: string;
  password: string;
  repeatPassword?: string;
}

const LoginByPasword: FC<Props> = ({ tabPanelType, setTabPaneType }) => {
  const validationSchema = Yup.object().shape({
    mobileNumber: Yup.string()
      .required("لطفا شماره موبایل  را وارد کنید!")
      .min(11, "لطفا شماره موبایل  را درست وارد کنید!!")
      .max(11, "لطفا شماره موبایل  را درست وارد کنید!!")
      .matches(
        /(\+98|0098|98|0)?9\d{9}$/,
        "لطفا شماره موبایل  را درست وارد کنید!!"
      ),
    password: Yup.string().required("لطفا کلمه عبور  را وارد کنید!"),
    repeatPassword:
      tabPanelType === 2
        ? Yup.string().required("لطفا کلمه عبور  را وارد کنید!")
        : Yup.string(),
  });

  const initialValues: FormValues =
    tabPanelType === 1
      ? {
          mobileNumber: "",
          password: "",
          repeatPassword: "",
        }
      : {
          mobileNumber: "",
          password: "",
        };

  const handleSubmitForm = (values: FormValues) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmitForm}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <VStack gap={4}>
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
            <PasswordInput
              formLabel="کلمه عبور"
              errorMassage={errors.password}
              id="password"
              isInvalid={!!errors.password && touched.password}
            />
            {tabPanelType === 2 && (
              <PasswordInput
                formLabel="تکرار کلمه عبور"
                id="repeatPassword"
                errorMassage={errors.repeatPassword}
                isInvalid={!!errors.repeatPassword && touched.repeatPassword}
              />
            )}
            <HStack w={"full"} justifyContent={"space-between"}>
              <Button
                onClick={() => {
                  if (tabPanelType === 1) {
                    setTabPaneType(2);
                  } else {
                    setTabPaneType(1);
                  }
                }}
                colorScheme="green"
              >
                {setTabPanelDetails(tabPanelType).buttonTitle}
              </Button>
              <Button colorScheme="blue" type="submit">
                ارسال
              </Button>
            </HStack>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default LoginByPasword;
