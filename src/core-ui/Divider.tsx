import * as React from 'react';
import {View, StyleSheet} from 'react-native';

export function RowDivider() {
  return <View style={styles.rowDivider} />;
}

export function ColumnDivider() {
  return <View style={styles.columnDivider} />;
}

const styles = StyleSheet.create({
  rowDivider: {
    flexDirection: 'row',
    backgroundColor: '#000',
    width: '100%',
    height: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },

  columnDivider: {
    flexDirection: 'row',
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
    height: '80%',
    width: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
