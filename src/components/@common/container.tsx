import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const Container: FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
  },
});
