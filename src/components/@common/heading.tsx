import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";

const Heading: FC = ({ children }) => {
  return <Text style={styles.heading}>{children}</Text>;
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
});
