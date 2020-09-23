import React, { FC } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  Animated,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import colors from "../../config/colors";

export interface IListItemProps {
  title: string;
  subtitle: string;
  leftText: string;
  rightText: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  renderRightActions?:
    | ((
        progressAnimatedValue: Animated.AnimatedInterpolation,
        dragAnimatedValue: Animated.AnimatedInterpolation
      ) => React.ReactNode)
    | undefined;
}

const ListItem: FC<IListItemProps> = ({
  title,
  subtitle,
  leftText,
  rightText,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.leftSideContainer}>
            <Text style={styles.leftText}>{leftText}</Text>
            <View>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
              <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
          </View>
          <Text style={styles.rightText}>{rightText}</Text>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  title: {
    fontWeight: "bold",
    maxWidth: 200,
  },
  subtitle: {
    color: colors.medium,
  },
  leftSideContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftText: {
    fontSize: 16,
    marginRight: 8,
  },
  rightText: {
    fontSize: 16,
  },
});
