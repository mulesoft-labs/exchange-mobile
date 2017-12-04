import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, NetInfo } from 'react-native';
import AssetGrid from './AssetGrid';
import { defaultAssets, defaultPages } from '../../services/data';

class Home extends Component {
  constructor(props) {
    super(props);

    this.makeAssetOffline = this.makeAssetOffline.bind(this);

    this.state = {
      assets: {
        list: {
          mulesoft: defaultAssets,
          offline: [],
          mulesoftDisconnected: [],
        },
        data: {},
      },
      home: { currentSearch: 'mulesoft' },
      pages: defaultPages,
      reviews: {},
    };
  }

  makeAssetOffline({ asset, portal }) {
    console.log(asset);
    console.log(portal);
    console.log(this);

    console.log(this.state.assets.list.offline.concat([asset]));


    this.setState({
      assets: {
        ...this.state.assets,
        list: {
          ...this.state.assets.list,
          offline: this.state.assets.list.offline.concat([asset]),
        },
      },
    }, () => console.log(this.state));
  }

  onChangeSearch(value) {
    console.log('inside onChangeSearch');
    console.log(value);
    const { home } = this.state;
    console.log(home.currentSearch);
    if (value !== home.currentSearch) {
      return NetInfo.isConnected.fetch().then((isConnected) => {
        if (!isConnected && value === 'mulesoft') {
          return this.setState({ home: { currentSearch: 'mulesoftDisconnected' } });
        }
        return this.setState({ home: { currentSearch: value } });
      });
    }

    return null;
  }

  render() {
    const { navigate } = this.props.navigation;
    const { assets, pages, home } = this.state;
    console.log('inside home');
    console.log(assets.list[home.currentSearch]);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTextLeft}>Mulesoft</Text>
          <Text style={styles.navbarText}>Login</Text>
        </View>
        <View style={styles.topPanel}>
          <TouchableOpacity
            onPress={() => this.onChangeSearch('mulesoft')}
            style={styles.option}
          >
            <Text>Mulesoft</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onChangeSearch('offline')}
            style={styles.option}
          >
            <Text>Offline Assets</Text>
          </TouchableOpacity>
        </View>
        <AssetGrid
          style={styles.grid}
          assets={assets.list[home.currentSearch]}
          pages={pages}
          navigate={navigate}
          makeAssetOffline={this.makeAssetOffline}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f6',
    flexDirection: 'column',
  },
  navbar: {
    backgroundColor: '#1b1d1d',
    height: 50,
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navbarText: {
    color: '#cccccc',
    fontSize: 14,
  },
  navbarTextLeft: {
    color: '#cccccc',
    fontSize: 18,
  },
  topPanel: {
    height: 100,
  },
  option: {
    padding: 15,
  },
});

export default Home;
