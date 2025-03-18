import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CustomTextInputProps extends TextInputProps {
  label: string;
  error?: string;
}
export const CustomTextInput: React.FC<CustomTextInputProps> = ({// //export const CustomTextInPut = (CustomTextInPutProps: any) => { }
  label,
  error,
  editable = true,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label} <Text style={{ color: "red" }}>*</Text>
      </Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focused,
          error && styles.errorBorder,
          !editable && styles.disabled,
        ]}zsss
      >
        <TextInput
          style={[styles.input, !editable && styles.disabledText]}
          placeholder="Place holder"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={editable}
          {...props}
        />
        {error && <MaterialIcons name="error" size={20} color="red" />}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 45,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  focused: {
    borderColor: "#007bff",
  },
  disabled: {
    backgroundColor: "#f4f4f4",
  },
  disabledText: {
    color: "#999",
  },
  errorBorder: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 3,
  },
});
