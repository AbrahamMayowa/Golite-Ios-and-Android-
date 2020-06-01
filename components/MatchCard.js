import React from 'react'
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native'
import NativeTouch from './NativeTouch'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
const moment = require('moment')

MaterialIcons.loadFont();

export default MatchCard=({match})=>{
    const {thumbnail, date, side1, side2, competition} = match
    const momentTime = moment(date).fromNow()
    return(
        <NativeTouch style={styles.match}>
            <View style={styles.cardImage}>
                <Image style={styles.image} source={{uri: thumbnail}} />
            </View>
            <View style={styles.teamsVersus}>
                <Text style={styles.teamText}>{side1.name}</Text>
                <View style={styles.versusBackground}>
                    <Text style={styles.versusText}>VS</Text>
                </View>
                <Text style={styles.teamText}>{side2.name}</Text>
         
            </View>

            <View style={styles.dateCompetition}>
                <View style={styles.date}>
                <Ionicons name="md-calendar" name='ios-calendar' size={16}/>
                    <Text style={styles.dateCompetitionText}>{momentTime}</Text> 
                </View>
                <View style={styles.competition}>
                    
                    <Ionicons name="md-trophy" name='ios-trophy' size={16}/>
                    <Text style={styles.dateCompetitionText}>{competition.name}</Text> 
                </View>
            </View>
        </NativeTouch>
    )
}

const styles = StyleSheet.create({
    match:{
        width: Dimensions.get('window').width,
        height: 300
    },
    cardImage:{
        width: '100%',
        height: '55%'
    },
    image:{
        width: '100%',
        height: '100%'
    },
    teamsVersus:{
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffff'
    },
    teamText:{
        fontSize: 16,
        fontWeight: '700',
        color: '#5c65f1'
    },
    versusBackground:{
        backgroundColor: '#f7dbd5',
        width: 35,
        height: 35,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    versusText:{
        color: '#c70039',
        fontWeight: '700'
    },
    dateCompetition:{
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f7f8fc',
        alignItems: 'center'
    },
    date: {
        flexDirection: 'row',

    },
    dateCompetitionText:{
        marginLeft: 4,
        fontSize: 14,
        color: '#a8adfc',
        fontWeight: '700'
    },
    competition:{
        flexDirection: 'row',
    },



    
})