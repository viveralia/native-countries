import React, { FC } from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import colors from "../../config/colors";

export interface IDeleteActionProps {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const DeleteAction: FC<IDeleteActionProps> = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="delete-outline" size={24} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DeleteAction;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: colors.danger,
    justifyContent: "center",
    width: 70,
  },
});
