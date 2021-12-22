import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function App() {

  const [open, setOpen] = useState(false)
  const [item, setItem] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Lista de compras</Text>
      </View>

      <View scrollEnabled style={styles.listArea}>
        {/* <FlatList /> */}
        {/* <ScrollView>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </ScrollView> */}
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
      </View>


      <Modal animationType='slide' transparent={true} visible={open}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={styles.closeModal}>
              <Ionicons name="ios-close" size={35} color={"#264653"} onPress={() => setOpen(false)} />
            </View>
            <View style={styles.addItem}>
              <TextInput
                style={styles.input}
                value={item}
                onChangeText={ (item) => {setItem(item)}}
                placeholder='Informe o item'
                placeholderTextColor={'#264653'}
              />
              <TouchableOpacity style={styles.btnAdd} >
                <Text style={styles.btnText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setOpen(true)}
        >
          <Ionicons name="ios-add" size={35} color={"#264653"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#264653',
    alignItems: 'center',
  },
  titleArea: {
    padding: 15,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    color: "#e9c46a"
  },
  listArea: {
    flex: 1,
    borderWidth: 1,
    // borderColor: '#264653',
    borderColor: '#000',
    borderRadius: 15,
    width: "100%",
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  buttonArea: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 25,
    width: '100%',
    height: 80,
  },
  button: {
    backgroundColor: "#e76f51",
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0,0.2)',
  },
  modalView: {
    backgroundColor: "#e9c46a",
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: 300
  },
  closeModal: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "#264653",
    borderRadius: 30,
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    color: "#264653",
  },
  btnAdd: {
    backgroundColor: "#264653",
    borderRadius: 30,
    padding: 2,
    marginVertical: 5,
    width: 100,
  },
  btnText: {
    textAlign: 'center',
    color: "#e9c46a",
    fontSize: 15,
    fontWeight: "600",
  }
});
