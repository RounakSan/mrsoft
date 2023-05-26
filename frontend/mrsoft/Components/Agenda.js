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

export default function Agenda() {
  const docs = [
    { name: "sex", time: "midnight", speciality: "hotsex", phone: 5845159565 },
    { name: "sex", time: "midnight", speciality: "hotsex", phone: 5845159565 },
    { name: "sex", time: "midnight", speciality: "hotsex", phone: 5845159565 },
    { name: "sex", time: "midnight", speciality: "hotsex", phone: 5845159565 },
    { name: "sex", time: "midnight", speciality: "hotsex", phone: 5845159565 },
    { name: "sex", time: "midnight", speciality: "hotsex", phone: 5845159565 },
    { name: "sex", time: "midnight", speciality: "hotsex", phone: 5845159565 },
  ];
  return (
    <NativeBaseProvider config={config}>
      <Box w="100%" h="92.65%">
          <ScrollView>
            <VStack>
              {docs.map((item,index)=>{
                return(<Box key={index}
                  borderBottomWidth="1"
                  _dark={{
                    borderColor: "muted.900",
                  }}
                  borderColor="muted.300"
                  px="5"
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
                        {item.name}
                      </Text>
                      <Text
                        color="coolGray.600"
                        _dark={{
                          color: "warmGray.200",
                        }}
                      >
                        {item.time}
                      </Text>
                      <Text
                        color="coolGray.600"
                        _dark={{
                          color: "warmGray.200",
                        }}
                      >
                        {item.speciality}
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
                      {item.phone}
                    </Text>
                  </HStack>
                </Box>)
              }
              )}
              
            </VStack>
          </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}
