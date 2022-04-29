import React, { useState, useEffect } from "react";
import {
  Text,
  FlatList,
  Icon,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,

} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });

export default function App() {
  const [list, setList] = useState();

  useEffect(() => {
    const Item = async () => {
      const req = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await req.json();

      if (json) {
        setList(json);
      }
    };

    Item();
  }, []);

  return (
    <NativeBaseProvider>
      <Text
        justifyContent="center"
        alignSelf="center"
        fontSize={20}
        mt={10}
        color="#155e75"
        fontWeight="bold"
      >
        Lista
      </Text>
      <Center
        justifyContent="center"
        alignItems="center"
        padding={2}
        mt={3}
        pb={4}
        flexDirection="column"
      >
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <Box
              key={item.id}
              m={2}
              display="flex"
              backgroundColor="#155e75"
              padding={3}
              borderRadius={6}
            >
              {/* <Icon
                size={28}
                as={FontAwesome5}
                name="calendar-alt"
                color="#fff"
                _dark={{
                  color: "#fff",
                }}
              /> */}

              <Text fontWeight="bold" fontSize={16}>
                {item.id},
              </Text>
              <Text fontWeight="bold" fontSize={16}>
                {item.title}.
              </Text>
            </Box>
          )}
          keyExtractor={(item, index) => item.id.toString()}
        ></FlatList>
      </Center>
    </NativeBaseProvider>
  );
}

