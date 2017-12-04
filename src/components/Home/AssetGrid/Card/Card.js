import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Card extends Component {
  onPress() {
    const { navigate, asset, page, makeAssetOffline } = this.props;
    console.log('inside onPress Card');
    console.log(this.props);
    navigate('AssetDetail', { asset, makeAssetOffline, page });
  }

  render() {
    const { asset } = this.props;
    console.log('inside Card render');
    console.log(asset);

    return (
      <TouchableOpacity
        onPress={() => this.onPress()}
      >
        <View style={styles.card}>
          <View style={styles.top}>
            <Text>{asset.type}</Text>
            <Text>{asset.rating}</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.centerText}>{asset.name}</Text>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.bottomText}>{asset.createdBy.userName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#e8e9ea',
    padding: 5,
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 18,
  },
  bottom: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 12,
    color: '#777777',
  },
});

export default Card;
