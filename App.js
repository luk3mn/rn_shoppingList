// https://reactnative.dev/docs/asyncstorag

import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Modal, TextInput, ScrollView, FlatList } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage"

import ItemList from './src/components/ItemList';

export default function App() {

  const [item, setItem] = useState([]);
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('');

  // Armazenamento de dados
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@item', JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }

  // Leitura de dados
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@item');
      if (value) {
        setItem(JSON.parse(value));
      }
    } catch (error) {
      console.log(error)
    }
  }

  const addItems = function() {
    // validação do input
    if (!input) return;

    const data = {
      key: input,
      item: input
    };

    setItem([...item, data]); // add o item ao final do array
    setOpen(false); // Fecha o modal
    setInput(''); // limpa o campo 
  }

  // Marca o item comprado
  const checkItem = useCallback((data) => {
    // alert("mudar de cor")
    const find = item.filter(r => r.key !== data.key)
    setItem(find);
  })

  // Remove um item da lista
  const removeItem = useCallback((data) => {
    const find = item.filter(r => r.key !== data.key)
    // setItem(find);
  })

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    storeData(item);
  }, [item]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#121d31" barStyle="light-content" />
      <View style={styles.titleArea}>
        <Text style={styles.title}>Lista de compras</Text>
      </View>

      <ScrollView style={styles.listArea}>
        <FlatList
          marginHorizontal={10}
          showsHorizontalScrollIndicator={false}
          data={item}
          keyExtractor={ (item) => String(item.key)}
          renderItem={ ({item}) => <ItemList data={item} checkItem={checkItem} removeItem={removeItem}/> }
        />
      </ScrollView>

      <Modal animationType='slide' transparent={true} visible={open}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={styles.closeModal}>
              <Ionicons name="ios-close" size={40} color={"#264653"} onPress={() => setOpen(false)} />
            </View>
            <View style={styles.addItem}>
              <TextInput
                style={styles.input}
                value={item.key}
                onChangeText={ (item) => {setInput(item)}}
                placeholder='Informe o item'
                placeholderTextColor={'#264653'}
              />
              <TouchableOpacity style={styles.btnAdd} onPress={addItems} >
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: "#e9c46a",
    borderWidth: 5,
    borderColor: "#ddc",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 7,
    width: 350
  },
  closeModal: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "#264653",
    borderRadius: 30,
    padding: 7,
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    color: "#264653",
  },
  btnAdd: {
    backgroundColor: "#264653",
    borderRadius: 30,
    padding: 7,
    marginVertical: 10,
    width: 100,
  },
  btnText: {
    textAlign: 'center',
    color: "#e9c46a",
    fontSize: 15,
    fontWeight: "600",
  }
});