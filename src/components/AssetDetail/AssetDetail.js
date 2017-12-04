import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';

class AssetDetail extends Component {
  render() {
    const { asset, makeAssetOffline, page } = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.navbar}>
          <Text style={styles.navbarTextLeft}>Mulesoft</Text>
          <Text style={styles.navbarText}>Login</Text>
        </View>
        <View>
          <View style={styles.pages}>
            <View style={styles.page}>
              <Text>{asset.name}</Text>
            </View>
          </View>
          <View style={styles.header}>
            <View style={styles.leftInnerHeader}>
              <Text style={styles.headerTitle}>{asset.name}</Text>
              <Text style={styles.headerRating}>{`${asset.numberOfRates} reviews`}</Text>
            </View>
            <View style={styles.rightInnerHeader}>
              <TouchableOpacity
                onPress={() => makeAssetOffline({ asset, page })}
              >
                <Text style={styles.offlineButton}>Offline</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.content}>
            <HTMLView value={page} />
          </View>
          <View style={styles.reviews}>
            <Text style={styles.reviewsTitle}>Reviews</Text>
            <Text style={styles.reviewsContent}>
              {`${asset.name} doesn't have any reviews yet`}
            </Text>
          </View>
        </View>
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
  pages: {
    height: 50,
    backgroundColor: '#e8e9ea',
  },
  page: {
    padding: 15,
  },
  header: {
    paddingTop: 15,
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-around',
  },
  leftInnerHeader: {
    paddingTop: 10,
  },
  rightInnerHeader: {},
  offlineButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#e8e9ea',
    backgroundColor: '#48c1ed',
    color: '#eeeeee',
    paddingLeft: 11,
    paddingTop: 19,
  },
  headerRating: {
    fontSize: 12,
  },
  headerTitle: {
    fontSize: 22,
  },
  content: {
    padding: 10,
    paddingTop: 0,
    paddingBottom: 15,
  },
  reviews: {
    padding: 10,
    borderTopWidth: 2,
    borderColor: '#e8e9ea',
    marginBottom: 60,
  },
  reviewsTitle: {
    fontSize: 20,
    paddingBottom: 5,
  },
  reviewsContent: {
    fontSize: 12,
    fontStyle: 'italic',
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
});

export default AssetDetail;
