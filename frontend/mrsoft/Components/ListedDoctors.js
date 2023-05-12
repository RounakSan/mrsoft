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
export default function ListedDoctors({ navigation }) {
  const [data, setData] = useState(null);
  const s = {
    linearGradient: {
      colors: ["lightBlue.300", "violet.800"],
      start: [1, 1],
      end: [1, 0],
    },
  };
  const getDocs = async () => {
    try {
      const response = await fetch(
        `http://192.168.0.187:3000/docRoutes/fetchAllDoc`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setData(json);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getDocs();
  }, []);

  return (
    <NativeBaseProvider config={config}>
      {/*
        <HStack space={30} justifyContent="space-between">
          <Button
            onPress={() => {
              navigation.goBack();
            }}
          >
            Back
          </Button>
        </HStack>
           */}
      {/* {console.log(data)} */}
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}> 
      <Box w="100%" h="92.65%">
        <Box >
        
          <Heading fontSize="xl" paddingBottom="1" textAlign={"center"} bg="" >
            Listed doctor
          </Heading>
          
          <ScrollView>
            <List>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <Box
                    borderBottomWidth="1"
                    _dark={{
                      borderColor: "muted.50",
                    }}
                    borderColor="muted.800"
                    pl={["0", "4"]}
                    pr={["0", "5"]}
                    py="2"
                  >
                    <HStack space={[2, 3]} justifyContent="space-between">
                      <Avatar
                        size="48px"
                        source={{
                          uri: "#",
                        }}
                      />
                      <VStack>
                        <Text
                          _dark={{
                            color: "warmGray.50",
                          }}
                          color="coolGray.800"
                          bold
                        >
                          {item.doc_name}
                        </Text>
                        <Text
                          color="coolGray.600"
                          _dark={{
                            color: "warmGray.200",
                          }}
                        >
                          {item.speciality}
                        </Text>
                        <Text
                          color="coolGray.600"
                          _dark={{
                            color: "warmGray.200",
                          }}
                        >
                          {item.degree}
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
                  </Box>
                )}
                keyExtractor={(item) => item.id}
              />
            </List>
          </ScrollView>
        </Box>
      </Box>
      
      <Footer />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
