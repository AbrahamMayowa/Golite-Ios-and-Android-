import React, {useState, useEffect} from 'react'

import {View, StyleSheet, Text,  ActivityIndicator} from 'react-native'
import MatchList from '../components/MatchLIsts'
import NoItem from '../components/NoItem'

export default LeagueScreen =({route, navigation})=>{
    const [matchData, setMatchData] = useState([])
    const [loading, setLoading] = useState(false)
    const {leagueCode} = route.params
  
    const handleDispatch = async ()=>{
        setLoading(true)
        try{
        const res = await fetch('https://www.scorebat.com/video-api/v1/')
            if(!res.ok){
                throw new Error('A server error. Try again')
            } 
            const data = await res.json()
            const updatedData = data.filter(match => match.competition.id.toString() === leagueCode)
            setMatchData(updatedData)
            setLoading(false)
         
        }catch(error){
            console.log(error)
  
        }
    }
  
  
    useEffect(()=>{
      handleDispatch()
    }, [])

    if(loading){
        return <View><ActivityIndicator /></View>
    }
    return(
        <MatchList footballDataArray={matchData} leagueScreen={true}/>
    )
}

const styles = StyleSheet.create({

})