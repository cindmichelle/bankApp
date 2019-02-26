import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {Ionicons} from '@expo/vector-icons';

import {Card, RowDivider, IconButton} from '../core-ui/';

export default class HomeScreen extends React.Component<{}, {}> {
  static navigationOptions = () => {
    return {
      title: 'myBank',
    };
  };

  render() {
    return (
      <View style={styles.body}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.firstContainer}>
          <Card size="SMALL" style={{bottom: 30}}>
            <View style={{marginVertical: 16, marginHorizontal: 25}}>
              <Text style={styles.helloUserText}>Hello, User!</Text>
            </View>
            <RowDivider />
            <View style={{flexDirection: 'row'}}>
              <View style={{marginHorizontal: 25, marginVertical: 15}}>
                <Text style={styles.balanceHead}>MY BALANCE</Text>
                <Text style={styles.balanceValue}>Rp 15.000</Text>
              </View>

              <TouchableOpacity activeOpacity={0.6} style={styles.reloadButton}>
                <Ionicons name="md-refresh" size={55} color="#004080" />
              </TouchableOpacity>
            </View>
          </Card>
        </View>
        <View style={styles.secondContainer}>
          <Card
            size="MEDIUM"
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 10,
              flexWrap: 'wrap',
            }}
          >
            <IconButton
              name="wallet"
              size="SMALL"
              shape="ROUNDED"
              text="Top Up"
            />
            <IconButton
              name="cash"
              size="SMALL"
              shape="ROUNDED"
              text="Transfer"
            />
            <IconButton
              name="md-cash"
              size="SMALL"
              shape="ROUNDED"
              text="Transfer"
            />
            <IconButton
              name="md-cash"
              size="SMALL"
              shape="ROUNDED"
              text="Transfer"
            />
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  firstContainer: {
    flex: 1,
    backgroundColor: 'steelblue',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  secondContainer: {
    flex: 2,
    backgroundColor: 'skyblue',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
  },
  helloUserText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  reloadButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceHead: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  balanceValue: {color: 'steelblue', fontSize: 40, fontWeight: '500'},
});
