import React from 'react';
import { StyleSheet, Modal, Text, View, Image, Button } from 'react-native';

const placeDetail = ({details, onItemDeleted, onModalClosed}) => {
  let modalContent = null;
  if(details) {
    modalContent = <View>
      <Image source={details.image} style={styles.placeImage}/>
      <Text style={styles.placeName}>{details.name}</Text>
    </View>
  }
  return (
    <Modal onRequestClose={onModalClosed} visible={details !== null} animationType="slide">
      <View>
        {modalContent}
        <View>
          <Button title="delete" color="crimson" onPress={onItemDeleted}/>
          <Button title="close" onPress={onModalClosed}/>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 22,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold'
  }
});

export default placeDetail