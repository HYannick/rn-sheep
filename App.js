import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './src/components/Search'
import Places from './src/components/Places';
import PlaceDetail from './src/components/PlaceDetail'
import { connect } from 'react-redux'
import { addPlace, deletePlace, selectPlace, unSelectPlace } from './src/store/actions'

// import placeImage from "./src/assets/default.png"
class App extends Component {

  placeSubmitHandler = (placeName) => {
    this.props.onAddPlace(placeName)
  }

  selectItemHandler = (index) => {
    this.props.onSelectPlace(index)
  }

  deleteItemHandler = () => {
    this.props.onDeletePlace()
  }

  closeModal = () => {
    this.props.onUnSelectPlace()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is our first react native app! eheh </Text>

        <PlaceDetail details={this.props.selectedPlace}
                     onItemDeleted={this.deleteItemHandler}
                     onModalClosed={this.closeModal}/>
        <Search onPlaceAdded={this.placeSubmitHandler}/>
        <Places places={this.props.places}
                onItemSelected={this.selectItemHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onUnSelectPlace: () => dispatch(unSelectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
