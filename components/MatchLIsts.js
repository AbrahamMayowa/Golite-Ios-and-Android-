import React from 'react'
import {View, StyleSheet, Text, FlatList, Dimensions} from 'react-native'
import MatchCard from '../components/MatchCard'

export default MatchList =({footballDataArray})=>{
 

    return(
        <View style={styles.matchlist}>
            <Text style={styles.listText}>Matches</Text>
            <FlatList
                data={footballDataArray}
                renderItem={({item}) => <MatchCard match={item} />}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    matchlist:{
        marginTop: 35
    },
    listText:{
        //fontFamily: 'Roboto-Bold',
        fontSize: 20,
        fontWeight: '700',
        paddingLeft: 12,
        marginBottom: 7
    }
})