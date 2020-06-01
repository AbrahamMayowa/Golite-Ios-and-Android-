import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import NativeTouch from './NativeTouch'

export default Leagues =()=>{
    return(
        <View style={styles.leagues}>
            <View style={styles.leagueList}>
                <NativeTouch style={[styles.league, styles.leagueLeft, styles.one]}>
                    <Text style={styles.leagueText}>English Premier League</Text>
                </NativeTouch>

                <NativeTouch style={[styles.league, styles.two]}>
                <Text style={styles.leagueText}>BundesLiga</Text>
                </NativeTouch>

                <NativeTouch style={[styles.league, styles.leagueLeft, styles.three]}>
                <Text style={styles.leagueText}>Seria A</Text>
                </NativeTouch>

                <NativeTouch style={[styles.league, styles.four]}>
                <Text style={styles.leagueText}>League One</Text>
                </NativeTouch>

                <NativeTouch style={[styles.league, styles.leagueLeft, styles.five]}>
                <Text style={styles.leagueText}>La Liga</Text>
                </NativeTouch>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    leagues:{
        width: Dimensions.get('window').width,
        display: 'flex',
        alignItems: 'center',
        marginVertical: 6,

        
    },
    leagueList:{
   
        marginTop: -70,
        borderRadius: 10,
        width: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',
       
    },
    league:{
        width: '48%',
        paddingLeft: 12,
        paddingBottom: 15,
        height: Dimensions.get('window').width * 0.90 * 0.40,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        borderRadius: 5
    },
    leagueLeft:{
        marginRight: 12
    },
    one:{
        backgroundColor: '#BDC0F3',
    },
    two: {
        backgroundColor: '#f7ecd5'
    },
    three:{
        backgroundColor: '#c70039'
    },
    four:{
        backgroundColor: '#7077'
    },
    five: {
        backgroundColor: '#7077e5'
    },
    leagueText:{
        fontSize: 17,
        //fontFamily: 'Roboto_Bold',
        fontWeight: '700'
        
    }
})