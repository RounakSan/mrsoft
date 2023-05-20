import { StyleSheet, Text, View, SafeAreaView, Ava } from "react-native";
import {
  NativeBaseProvider,
  Button,
  Box,
  HStack,
  Heading,
  FlatList,
  Avatar,
  VStack,
  Spacer,
  ScrollView,
  List,
} from "native-base";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import SafeViewAndroid from "./SafeViewAndroid";

import { LinearGradient } from "expo-linear-gradient";
const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

export default function Agenda(props) {
  return (
    <NativeBaseProvider config={config}>
      <Box w="100%" h="92.65%">
          
          {/* Take this heading out so that it doesnot render everytime */}
          <Heading
            fontSize="xl"
            paddingBottom="1"
            textAlign={"center"}
            bg="lightBlue.300"
          >
            Agenda for {props.date}
          </Heading>

          <ScrollView>
            <VStack>
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "muted.900",
                }}
                borderColor="muted.300"
                pl={["0", "4"]}
                pr={["0", "5"]}
                py="2"
              >
                <HStack space={[2, 3]} justifyContent="space-between">
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {props.name}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {props.time}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {props.speciality}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text
                    fontSize="xs"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    alignSelf="flex-start"
                  >
                    {props.phone}
                  </Text>
                </HStack>
              </Box>
            </VStack>
          </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}
