import { View} from 'react-native'
import React from 'react'
import {Stack,Text,FormControl,Input,Divider,Box,WarningOutlineIcon} from 'native-base'

export default function ModalComponent() {
  return (
    <View>
    {/* <ScrollView w="100%"> */}
      <Stack space={2.5} alignSelf="center" px="4" safeArea mt="4" w={{
      base: "100%",
      md: "25%"
    }}>
        <Box>
          <Text bold fontSize="xl" mb="4">
            Default
          </Text>
          <FormControl mb="5">
            <FormControl.Label>Project Title</FormControl.Label>
            <Input />
            <FormControl.HelperText>
              <Text>Give your project a title.</Text>
            </FormControl.HelperText>
          </FormControl>
          <Divider />
        </Box>
        <Box>
          <Text bold fontSize="xl" mb="4">
            Disabled
          </Text>
          <FormControl isDisabled mb="5">
            <FormControl.Label _disabled={{
            _text: {
              color: "gray.400",
              fontWeight: "bold"
            }
          }}>
              Project Title
            </FormControl.Label>
            <Input placeholder="Title" />
            <FormControl.HelperText>
              <Text>Give your project a title.</Text>
            </FormControl.HelperText>
          </FormControl>
          <Divider />
        </Box>
        <Box>
          <Text bold fontSize="xl" mb="4">
            Invalid
          </Text>
          <FormControl isInvalid>
            <FormControl.Label>Project Title</FormControl.Label>
            <Input placeholder="Title" />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Something is wrong.
            </FormControl.ErrorMessage>
          </FormControl>
        </Box>
      </Stack>
    {/* </ScrollView>; */}
    </View>
  )
}

// const styles = StyleSheet.create({})