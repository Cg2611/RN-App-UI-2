import { StyleSheet, Image, Text, View, Linking,TouchableOpacity } from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink);
    }

  return (
    <View>
      <Text style={styles.headingText}> Blog Card </Text>
      <View style={[styles.card, styles.elevated]}>
         <View style={styles.headerContainer}>
            <Text style={styles.headerText}> What is new in JS 21 ES12 </Text>
         </View>
         <Image source={{
                uri: 'https://lh3.googleusercontent.com/sZl-o9TGNYXucrPNHesxaMLXajhcPYqw43zojzHJ-y1yYYeQaNtJMrPUQImKgak3paKOMbEm0Av0e5bKG8_z31m1xVGN8J3x-EIAfgeETIhrLxwsw7xWEGstIuwyKYuHjOLFPCcvqIBY944PWFHBhgSEsVERXJljVEwPTD1xpJHhi5gHieiZcjl-rJ734bFiDxG1GzTxkX5nRc9lkRhtNHMdHDOSswMU-dgp8itMF8lTdEztOYz_bE_8H2FxN5NtCBmeOvxTi7f31wM2zrAE7oOzzeVy1_hYLFAWuXJ0CNqDfc-J-Ui9HY1RILj9Z1nYvEKGGDSTiT3tzysWHO9Vn6rXDFKE9TUGNE1_Z9_EaQ7B_HIU_z7oq2Hmmikl1Ap5t7N_pEI44ZhUGbIVirHKJyvc2LgtJgczCeNEgH7SnvvYBCM-OMWX5MnB949rXYn678iZyz7Q16wjPMevr1IQU4zfdOE2xoJQi8x3FhpD2-3moUoilZRBR5OQi-KII4hRYrEaRFnAiGqYeFz3Rqwx_Yw97kROwh2AnfhT03700AHkFqmYobTXjq0Q3IQpjcYQZ3vbtw=s400',
               }}
         style={styles.cardImage}
         />
         <View style ={styles.bodyContainer}>
            <Text numberOfLines={3}>
            JavaScript, often abbreviated as "JS", is a versatile programming language primarily used to add interactivity and dynamic behavior to web pages, allowing developers to create features like animated elements, interactive forms, and real-time updates without needing to reload the entire page; it works alongside HTML (for structure) and CSS (for styling) as a core technology of the web, enabling complex interactions on websites through its ability to manipulate the Document Object Model (DOM) and respond to user events like clicks and mouse movements; while primarily client-side, JavaScript can also be used on the server with platforms like Node.js, making it a powerful tool for full-stack development

            </Text>
         </View>

         <View style ={styles.footerContainer}>
            <TouchableOpacity
            onPress={()=>openWebsite('https://reactnative.dev/docs/touchableopacity')}>
               <Text style={styles.socialLink}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>openWebsite('https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=16')}
            >
               <Text style={styles.socialLink}>Follow Me</Text>
            </TouchableOpacity>
         </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
      fontSize:24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
    },
    card: {
      height: 360,
      width:350,
      borderRadius:6,
      marginHorizontal:16,
      marginVertical: 12,

    },
    elevated: {
      backgroundColor: '#E07C24',
      elevation: 3,
      shadowOffset: {
         width: 1,
         height: 1,
      },
      shadowColor: '#333',
      shadowOpacity: 0.4,

    },
    headerContainer: {
      height: 40,
      flexDirection: 'row',

      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 600,
    },
    cardImage: {
        height:190,
    },
    bodyContainer:{
      padding:10,

    },
    footerContainer: {
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
   },

    socialLink: {
      fontSize: 16,
      color: '#000000',
      backgroundColor: '#FFF',
      paddingHorizontal: 20,
      paddingVertical:8,
      borderRadius: 6,
    },
});
