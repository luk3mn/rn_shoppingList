import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons';

export default function ItemList({ data, checkItem, removeItem }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => checkItem(data)}>
        <Ionicons name='md-checkmark-circle' size={30} color={"#2a9d8f"} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeItem(data)}>
        <Ionicons name='md-remove-circle' size={30} color={"#e76f51"} />
      </TouchableOpacity>
      <View>
        <Text style={styles.textItem}> {data.item} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: "center",
    backgroundColor: "#e9c46a",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 15,
  },
  textItem: {
    color: "#264653",
    fontSize: 18,
    fontWeight: "700",
  }
})