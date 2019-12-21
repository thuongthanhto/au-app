import React from 'react';
import {Modal, Alert, View, Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

const EalLevelModal = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>

          <TouchableHighlight
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default EalLevelModal;
