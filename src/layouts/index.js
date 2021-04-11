import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';

const Layout = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader} />
      {children}
    </SafeAreaView>
  );
};

export default Layout;
