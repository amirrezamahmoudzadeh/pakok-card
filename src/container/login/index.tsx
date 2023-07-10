"use client";
import PasswordInput from "@/components/PasswordInput";
import {
  Box,
  Button,
  Card,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import bg from "../../../public/login-background.png";
import LoginWithOTP from "./LoginWithOTP";

const setTabPanelDetails = (type: 1 | 2) => {
  if (type === 1) {
    return {
      tabTilte: "ورود با نام کاربری",
      buttonTitle: "فراموشی رمز عبور",
    };
  } else {
    return {
      tabTilte: "فراموشی رمز عبور",
      buttonTitle: "ورود با نام کاربری",
    };
  }
};

const LoginPage: NextPage = () => {
  const [tabPanelType, setTabPaneType] = useState<1 | 2>(1);
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
        <Tabs isFitted>
          <TabList fontSize={14}>
            <Tab flex={1}>{setTabPanelDetails(tabPanelType).tabTilte}</Tab>
            <Tab flex={1}>ورود با رمز یکبارمصرف</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={3}>
              <VStack gap={4}>
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
                <PasswordInput formLabel="کلمه عبور" />
                {tabPanelType === 2 && (
                  <PasswordInput formLabel="تکرار کلمه عبور" />
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
                  <Button colorScheme="blue">ارسال</Button>
                </HStack>
              </VStack>
            </TabPanel>
            <TabPanel p={3}>
              <LoginWithOTP />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
      <Button colorScheme="green">ثبت نام در سامانه</Button>
    </VStack>
  );
};

export default LoginPage;
