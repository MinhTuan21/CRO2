import React from "react";
import { View, Text, StyleSheet, Image, Pressable, Alert, StatusBar } from "react-native";

interface SectionViewProps { 
  title: string; data: { 
  label: string; value: string }[]; 
  image?: string; 
  showButton?: boolean;
}
export const SectionView: React.FC<SectionViewProps> = ({ //export const SectionView = (SectionViewProps: any) => { }
  title,
  data,
  image,
  showButton = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.card}>
        {data.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
          
        ))}
        {image && <Image source={{ uri: image }} style={styles.image} />}
        {showButton && (
        <Pressable 
          style={({ pressed }) => [
            styles.button, 
            { backgroundColor: pressed ? '#ddd' : '#007bff' }
          ]}
          onPress={() => Alert.alert("Thông báo", "Hehee hết nội dung rồi >.<")}
          >
          <Text style={styles.buttonText}>Chi tiết</Text>
        </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 20 , paddingTop: StatusBar.currentHeight},
  title: { 
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 7,
    padding: 10 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  row: { marginBottom: 8 },
  label: { 
    fontSize: 14, 
    color: "gray" },
  value: { 
    fontSize: 16, 
    fontWeight: "bold" },
  image: { 
    width: "100%", 
    height: 150, 
    borderRadius: 10, 
    marginTop: 10 },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "white", fontWeight: "bold" },
});
