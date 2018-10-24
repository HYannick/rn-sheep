import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from "./ListItem";

const Places = ({ places, onItemSelected }) => {
  return (
    <FlatList style={styles.places}
              data={places}
              renderItem={({ item }) => (
                <ListItem
                  name={item.name}
                  image={item.image}
                  selectItem={() => onItemSelected(item.key)}/>
              )}/>
  );
}

const styles = StyleSheet.create({
  places: {
    width: '100%',
    padding: 10
  }
});

export default Places