import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  title: string;
  showBackButton?: boolean;
  showRightIcon?: boolean;
}

export const Header: React.FC<Props> = ({ //export const Header = (Props: any) => { }
  title,
  showBackButton = false,
  showRightIcon = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {showBackButton && (
          <Pressable>
            <AntDesign name="left" size={24} color="black" />
          </Pressable>
        )}
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        {showRightIcon && (
          <Pressable>
            <AntDesign name="user" size={24} color="black" />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    height: 80,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 2,
    alignItems: "center",
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
