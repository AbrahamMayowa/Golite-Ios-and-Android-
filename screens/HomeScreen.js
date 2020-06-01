import React, {useEffect, useState}from 'react'
import {View, StyleSheet, Text, StatusBar, SafeAreaView,  ActivityIndicator, ScrollView} from 'react-native'
import HomeHeader from '../components/HomeHeader'
import Leagues from '../components/Leagues'
import MatchLists from '../components/MatchLIsts'
import footballDataFetch from '../hooks/footballdataFetch'

const  HomeScreen =()=>{
  
  const [matchData, setMatchData] = useState([])
  const [loading, setLoading] = useState(false)

  const handleDispatch = async ()=>{
      setLoading(true)
      try{
      const res = await fetch('https://www.scorebat.com/video-api/v1/')
          if(!res.ok){
              throw new Error('A server error. Try again')
          } 
          const data = await res.json()
          setMatchData(data)
         
          setLoading(false)
       
      }catch(error){
          console.log(error)

      }
  }


  useEffect(()=>{
    handleDispatch()
  }, [])
 
    const MyStatusBar = ({backgroundColor, ...props}) => (
        <View style={[styles.statusBar, { backgroundColor }]}>
          <StatusBar translucent backgroundColor={backgroundColor} {...props} />
          <View style={styles.appBar} />
        </View>
      )
    
    return(
          <SafeAreaView>
            <ScrollView>
                <MyStatusBar backgroundColor='#5c65f1' />
                <HomeHeader />
                <Leagues />
                {loading ? (<ActivityIndicator color='#5c65f1'/>) : 
                (<MatchLists footballDataArray={matchData} />)}
            </ScrollView>
          </SafeAreaView>
         
            
            
   
    )
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    statusBar:{
        height: STATUSBAR_HEIGHT
    },
    appBar: {
        backgroundColor:'#5c65f1',
        height: APPBAR_HEIGHT,
      },

})

export default HomeScreen