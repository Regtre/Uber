import { View, Text, SafeAreaView } from "react-native";
import React, { Children } from "react";
import tw from 'twrnc';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <SafeAreaView style={tw`flex-1 text-black dark:text-white`}>
      <View style={[tw`p-5`, className ? tw`${className}` : null]}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;
