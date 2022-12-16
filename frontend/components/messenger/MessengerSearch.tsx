import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import theme from "../../theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const MessengerSearch = () => {
  return (
    <View
      style={[
        theme.flexDirectionRow,
        theme.alignItemsCenter,
        styles.container,
        theme.pl2,
        theme.pr2,
        theme.positionRelative,
      ]}
    >
      <MaterialIcons name="search" size={23} />
      <TextInput
        style={[
          styles.textInput,
          theme.pr1,
          theme.fontLg,
          theme.fontWeightRegular,
        ]}
        placeholder="검색할 사람을 입력해주세요."
        placeholderTextColor="#777"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    height: 50,
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    color: "#333",
  },
});

export default MessengerSearch;
