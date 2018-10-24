import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback, Image} from 'react-native';

const listItem = ({name, selectItem, image}) => {
  return (
    <TouchableNativeFeedback onPress={selectItem  }>
      <View style={styles.listItem}>
        <Image resizeMode='contain' source={image} style={styles.placeImage}/>
        <Text>{name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    elevation: 5,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  placeImage: {
    marginRight: 10,
    width: 50,
    height: 50
  }
});

export default listItem