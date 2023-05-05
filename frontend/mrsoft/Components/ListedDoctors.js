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
export default function ListedDoctors({ navigation }) {
  const [data, setData] = useState(null);
  const getDocs = async () => {
    try {
      const response = await fetch(
        `http://192.168.0.123:3000/docRoutes/fetchAllDoc`,
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
    <NativeBaseProvider>
      <SafeAreaView>
        <HStack space={30} justifyContent="space-between">
          <Button
            onPress={() => {
              navigation.goBack();
            }}
          >
            Back
          </Button>
        </HStack>
      </SafeAreaView>
      {/* {console.log(data)} */}
      <Box w="100%" h="79.65%">
        <Box>
          <Heading fontSize="xl" p="4" pb="3">
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
                          uri: "https://upload.wikimedia.org/wikipedia/commons/a/ae/People%27s_doctor_of_the_USSR",
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
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({});
