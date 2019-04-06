import React from 'react';
import ProopTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import {COLORS} from '../constants';

const propTypes = {
  title: ProopTypes.string.isRequired,
  count: ProopTypes.number.isRequired,
};

const Header =  ({ title, count }) => 
( <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={[
        styles.counterBlock,{backgroundColor:
          count < 5 ? COLORS.WHITE : COLORS.ORANGE}]
      }>
        <Text style={styles.counterText}>
          {count}
        </Text>
      </View>
  </View>);

Header.propTypes = propTypes;
export default Header;


const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: COLORS.DARK_GREY,
      alignItems: 'center',
      width: '100%',
      height: 60,
      paddingHorizontal: 16,
    },
    titleText:{
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    counterText:{
      fontSize: 14,
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
    counterBlock: {
      backgroundColor: 'white',
      borderRadius: 4,
    }
});