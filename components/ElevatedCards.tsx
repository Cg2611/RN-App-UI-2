import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.textHeading}>Elevated Cards</Text>
      <ScrollView horizontal= {true} style={styles.container}>
        <View style={[styles.card, styles.elevated]}>
         <Text> Tap </Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
         <Text> to </Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
         <Text> scroll </Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
         <Text> more  </Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
         <Text> ...</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
         <Text>  ...</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    textHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 10,

    },
    container:{
        padding:8,

    },
    card:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        height:100,
        width:100,
        borderRadius: 4,
        margin: 8,
    },
    elevated:{
        backgroundColor: '#EF5354',
        elevation: 4,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowColor: '#333',
        shadowOpacity: 1,
    },
});
