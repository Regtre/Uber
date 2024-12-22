import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { View, Text } from "react-native";
import React from "react";

const SearchBar = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: "YOUR API KAY",
        language: "en",
      }}
    />
  );
};

export default SearchBar;
