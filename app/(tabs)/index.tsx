import SearchBar from "@/components/SearchBar";
import Container from "@/components/ui/Container";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  useColorScheme,
} from "react-native";

import tw from "twrnc";

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  const black_logo = require("@/assets/images/Uber_Black.png");
  const white_logo = require("@/assets/images/Uber_White.png");

  return (
    <Container>
      <Image
        source={ colorScheme === "dark" ? white_logo : black_logo }
        style={tw`w-24 h-10`}
        resizeMode="contain"
      />
      <SearchBar />
      {/* NavOptions */}
      {/* Sugestions */}
    </Container>
  );
}
