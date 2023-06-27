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
            Date
          </Text>
          <FormControl mb="5">
            <FormControl.Label>Doctor Name</FormControl.Label>
            <Input />
            <FormControl.HelperText>
              <Text>Select your doctor</Text>
            </FormControl.HelperText>
          </FormControl>
          <Divider />
        </Box>
      </Stack>
    {/* </ScrollView>; */}
    </View>
  )
}

// const styles = StyleSheet.create({})