import React, { FC } from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../config/colors";

const Paragraph: FC = ({ children }) => {
  return <Text style={styles.paragraph}>{children}</Text>;
};

export default Paragraph;

const styles = StyleSheet.create({
  paragraph: {
    marginBottom: 8,
    lineHeight: 19,
    color: colors.dark,
  },
});
