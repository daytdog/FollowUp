//Libraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

//Styling
import {styles} from '../styles/global';

//AddItem Component
const AddPersonButton = ({navigation, screenName, addPerson}) => {
  return (
    <View style={styles.apView}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(screenName, {
            addPerson: addPerson,
          })
        }
        style={styles.apBtn}>
        <Text style={styles.apText}>Add Person</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPersonButton;
