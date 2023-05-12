import { StyleSheet } from "react-native";
import React from "react";
import {
  NativeBaseProvider,
  Center,
  HStack,
  Text,
  Pressable,
  Icon,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

export default function Footer() {
  const [selected, setSelected] = React.useState(1);
  const s = {
    linearGradient: {
      colors: ["lightBlue.300", "violet.800"],
      start: [1, 1],
      end: [1, 0],
    },
  };
  return (
    <NativeBaseProvider config={config}>
      <HStack bg={s} alignItems="center" safeAreaBottom shadow={6} marginTop="2">
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="5"
          flex={1}
          onPress={() => setSelected(0)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 0 ? "home" : "home-outline"}
                />
              }
              color="white"
              size="md"
              fontWeight="bold"
            />
            <Text color="white" fontSize="12" fontWeight="bold">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialIcons name="search" />}
              color="white"
              size="md"
              fontWeight="bold"
            />
            <Text color="white" fontSize="12">
              Search
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 2 ? "cart" : "cart-outline"}
                />
              }
              color="white"
              size="md"
              fontWeight="bold"
            />
            <Text color="white" fontSize="12">
              Cart
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 3 ? "account" : "account-outline"}
                />
              }
              color="white"
              size="md"
              fontWeight="bold"
            />
            <Text color="white" fontSize="12">
              Account
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
