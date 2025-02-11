import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: 'Chaithanya',
            status: 'Teacher',
            imageUrl: 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=',
        },
        {
            uid: 2,
            name: 'Chaithanya Ganesh',
            status: 'Coder',
            imageUrl: 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=',

        },
        {
            uid: 3,
            name: 'Chaithanya',
            status: 'Chess Player',
            imageUrl: 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=',
        },
        {
            uid: 4,
            name: 'Chaithanya Ganesh',
            status: 'News Reader',
            imageUrl: 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=',
        },
    ];

  return (
    <View>
      <Text style= {styles.headingText}>Contact List</Text>
      <ScrollView style= {styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl})=>(
            <View key={uid} style={styles.userCard} >
                <Image source={{ uri : imageUrl }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.name} > {name}</Text>
                <Text style={styles.status}> {status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingBottom: 4,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
        paddingBottom: 6,
    },
    userCard:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#8D3DAF',
        marginBottom:3,
        padding: 8,
        borderRadius: 10,


    },
    userImage:{
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginRight: 14,
    },
    name:{
        fontSize: 16,
        fontWeight: 600,
        color: '#FFF', 

    },
    status:{
        fontSize:12,

    },



});
