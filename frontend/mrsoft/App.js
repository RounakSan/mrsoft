import React from "react";
import {
  NativeBaseProvider,
  Box,
  VStack,
  Center,
  HStack,
  Button,
  Text,
  ChevronRightIcon,
  Flex,
  Pressable,
  Icon,
} from "native-base";
import { SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};
export default function App() {
  const [selected, setSelected] = React.useState(1);
  const s = {
    linearGradient: {
      colors: ["lightBlue.300", "violet.800"],
      start: [1, 1],
      end: [1, 0],
    },
  };
  // borderBottomRadius="40%"
  return (
    <NativeBaseProvider config={config}>
      <Box w="100%" h="40%" bg={s}>
        <SafeAreaView>
          <Center
            _text={{
              color: "warmGray.50",
              fontWeight: "medium",
            }}
          >
            MRSOFT
          </Center>
        </SafeAreaView>
      </Box>
      <SafeAreaView>
        <Box>
          <VStack space={4} alignItems="center" pt="12" pb="20">
            <Button w="85%" variant="outline">
              <HStack justify="space-between">
                <Text>PRIMARY</Text>
                <ChevronRightIcon />
              </HStack>
            </Button>
            <Button w="85%" variant="outline" colorScheme="secondary">
              <HStack space={40}>
                <Text>NECTAR</Text>
                <ChevronRightIcon />
              </HStack>
            </Button>
            <Button w="85%" variant="outline">
              <HStack space={40}>
                <Text>DESHI</Text>
                <ChevronRightIcon />
              </HStack>
            </Button>
            <Button w="85%" variant="outline">
              <HStack space={40}>
                <Text>ritam santra</Text>
                <ChevronRightIcon />
              </HStack>
            </Button>
            <Button w="85%" variant="outline" colorScheme="secondary">
              <HStack space={40}>
                <Text>PRIMARY</Text>
                <ChevronRightIcon />
              </HStack>
            </Button>
          </VStack>
        </Box>
      </SafeAreaView>
      <HStack bg={s} alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
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

/*

function Example() {
  const [selected, setSelected] = React.useState(1);
  return <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop width="100%" maxW="300px" alignSelf="center">
       
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Cart
              </Text>
            </Center>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>;
}
*/
