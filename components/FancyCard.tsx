import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevated]}>
            <Image
            source={{
                uri: 'https://lh3.googleusercontent.com/sZl-o9TGNYXucrPNHesxaMLXajhcPYqw43zojzHJ-y1yYYeQaNtJMrPUQImKgak3paKOMbEm0Av0e5bKG8_z31m1xVGN8J3x-EIAfgeETIhrLxwsw7xWEGstIuwyKYuHjOLFPCcvqIBY944PWFHBhgSEsVERXJljVEwPTD1xpJHhi5gHieiZcjl-rJ734bFiDxG1GzTxkX5nRc9lkRhtNHMdHDOSswMU-dgp8itMF8lTdEztOYz_bE_8H2FxN5NtCBmeOvxTi7f31wM2zrAE7oOzzeVy1_hYLFAWuXJ0CNqDfc-J-Ui9HY1RILj9Z1nYvEKGGDSTiT3tzysWHO9Vn6rXDFKE9TUGNE1_Z9_EaQ7B_HIU_z7oq2Hmmikl1Ap5t7N_pEI44ZhUGbIVirHKJyvc2LgtJgczCeNEgH7SnvvYBCM-OMWX5MnB949rXYn678iZyz7Q16wjPMevr1IQU4zfdOE2xoJQi8x3FhpD2-3moUoilZRBR5OQi-KII4hRYrEaRFnAiGqYeFz3Rqwx_Yw97kROwh2AnfhT03700AHkFqmYobTXjq0Q3IQpjcYQZ3vbtw=s400',
            }}
            style={styles.cardImage}
            />
      <View style={styles.cardBody}>
        <Text  style={styles.cardTitle}>Hawa Mahal</Text>
        <Text  style={styles.cardLable}>Pink City Jaipur</Text>
        <Text  style={styles.cardDesc}>The hawa mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone,
            it is on the edge of the City Palace
        </Text>
        <Text  style={styles.cardFooter}>12 minutes away</Text>
      </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 8,

    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical:12,
        marginHorizontal: 16,
    },
    elevated:{
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset:{
            width:1,
            height:1,
        },

    },
    cardImage:{
        height: 180,
        marginBottom:8,
        borderTopLeftRadius: 6,
        borderTopRightRadius:6,

    },
    cardBody:{
        flex: 1,
        flexGrow : 1,
        paddingHorizontal: 12,

    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,

    },
    cardLable:{
        color: '#000000',
        fontSize: 14,
        marginBottom:6,
    },
    cardDesc:{
        color: '#0FEE00',
        fontSize: 12,
        marginBottom:12,
        marginTop:6,
        flexShrink: 1,
    },
    cardFooter: {
        color: '#000000',
    },

});
