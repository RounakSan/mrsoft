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
    // console.log(data);
  }, []);

  const s = {
    linearGradient: {
      colors: ["lightBlue.300", "violet.800"],
      start: [1, 1],
      end: [1, 0],
    },
  };
  return (
    <NativeBaseProvider config={config}>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}> 
      <Box w="100%" h="92.65%">
        <Box >
        
          <Heading fontSize="xl" paddingBottom="1" textAlign={"center"} bg="lightBlue.300" >
            Listed doctor
          </Heading>
          
          <ScrollView>
    
                <VStack>
                  {data!=null && data.map((item,index)=>{
                    return(
                    <Box
                    key={index}
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
                  )})}
                  
                  </VStack>
          </ScrollView>
        </Box>
      </Box>
      
      <Footer />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
