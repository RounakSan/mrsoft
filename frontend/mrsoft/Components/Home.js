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
  Pressable,
  Icon,
} from "native-base";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import Footer from "./Footer";
const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};
import SafeViewAndroid from "./SafeViewAndroid";

export default function Home({ navigation }) {
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
    <Box h="105%"> 
      <Box w="100%" h="40%" bg={s}>
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
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
            <Button
              w="85%"
              variant="outline"
              onPress={() => {
                navigation.navigate("ListedDoctors");
              }}
            >
              <HStack space={40}>
                <Text alignItems="flex-start">Listed Doctors</Text>
                <ChevronRightIcon alignItems="flex-end" />
              </HStack>
            </Button>
            <Button w="85%" variant="outline" colorScheme="secondary" onPress={()=>{navigation.navigate("MySchedule");}}>
              <HStack space={40}>
                <Text alignItems="flex-start">My Schedule</Text>
                <ChevronRightIcon alignItems="flex-end" />
              </HStack>
            </Button>
            <Button w="85%" variant="outline">
              <HStack space={40}>
                <Text>DESHI</Text>
                <ChevronRightIcon ml="10" />
              </HStack>
            </Button>
            <Button w="85%" variant="outline">
              <HStack space={40}>
                <Text>Ritam Santra</Text>
                <ChevronRightIcon ml="10" />
              </HStack>
            </Button>
            <Button w="85%" variant="outline" colorScheme="secondary">
              <HStack space={40}>
                <Text>PRIMARY</Text>
                <ChevronRightIcon ml="10" />
              </HStack>
            </Button>
          </VStack>
        </Box>
        
      </SafeAreaView>
      <Footer/>
     </Box> 
    </NativeBaseProvider>
  );
}

