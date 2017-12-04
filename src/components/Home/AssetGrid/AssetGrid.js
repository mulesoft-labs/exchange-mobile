import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './Card';

class AssetGrid extends Component {
  render() {
    const { assets, pages, navigate, makeAssetOffline } = this.props;
    // hacer una lista hacia abajo scrolleable
    console.log('inside AssetGrid');
    console.log(assets);
    console.log(assets);
    console.log(assets && assets.length === 0);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Assets</Text>
        {assets && assets.length !== 0 ?
          <View
            style={styles.list}
          >
            {(assets || []).map((asset, key) => (
              <Card
                key={`key-${key}`}
                asset={asset}
                page={pages[`${asset.groupId}/${asset.assetId}/${asset.version}/home`]}
                navigate={navigate}
                makeAssetOffline={makeAssetOffline}
              />
            ))}
          </View> :
          <View style={styles.emptyResult}>
            <Text style={styles.emptyResultText}>Empty Result</Text>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 10,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    color: '#3a3b3c',
    paddingBottom: 10,
    fontSize: 20,
  },
  emptyResult: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyResultText: {
    fontSize: 30,
    color: '#3a3b3c',
  },
});

export default AssetGrid;
