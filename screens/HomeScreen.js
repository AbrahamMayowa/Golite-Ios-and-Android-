import React, {useEffect, useState}from 'react'
import {View, StyleSheet, Text, StatusBar, SafeAreaView,  ActivityIndicator, ScrollView} from 'react-native'
import HomeHeader from '../components/HomeHeader'
import Leagues from '../components/Leagues'
import MatchLists from '../components/MatchLIsts'
import footballDataFetch from '../hooks/footballdataFetch'
import { set } from 'react-native-reanimated'
import {useNetInfo} from "@react-native-community/netinfo";
import NetInfo from "@react-native-community/netinfo"
import ErrorComponent from '../components/ErrorComponent'


const  HomeScreen =()=>{
  const [matchData, setMatchData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorInternet, setErrorInternet] = useState({error: '', internetConnected: true})
  

  const handleDispatch = async ()=>{
      setLoading(true)
      const internetState = await NetInfo.fetch()
      if(internetState.isConnected){
        setErrorInternet({error: '', internetConnected: true})
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
            setErrorInternet({error: error.message, internetConnected: true})
  
        }
      }else{
        setErrorInternet({error: 'No internet connection', internetConnected: false})
        setLoading(false)
       

      }
  
  }

  const retry= async ()=>{
    setLoading(true)
    try{
    
      const res = await fetch('https://www.scorebat.com/video-api/v1/')
      
          if(!res.ok){
              throw new Error('A server error. Try again')
          } 
          const data = await res.json()
          console.log(data)
          setMatchData(data)
         
          setLoading(false)
       
      }catch(error){
          setErrorInternet({error: error.message, internetConnected: true})

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

      let conditionalElement = loading ? (<ActivityIndicator color='#5c65f1'/>) : (<MatchLists footballDataArray={matchData} />)
      if(errorInternet.error || !errorInternet.internetConnected){
        
        conditionalElement = <ErrorComponent errorMessage={errorInternet} retryHandle={handleDispatch}/>
      }
    return(
          <SafeAreaView>
            <ScrollView>
                <MyStatusBar backgroundColor='#5c65f1' />
                <HomeHeader />
                <Leagues />
                {conditionalElement}
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