
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import LeagueScreen from './screens/LeagueScreen'
import MatchStreaming from './screens/MatchStreaming'

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

export default NavigationWrapper =()=>{
    const Stack = createStackNavigator()

    const LeagueNav =()=>{
        return (
            <Stack.Navigator>
                <Stack.Screen name='League' component={LeagueScreen} />
                <Stack.Screen name='Streaming' component={MatchStreaming} />
            </Stack.Navigator>
        )
    }

    const MainNav =()=>{
        return (
            <Stack.Navigator
            initialRouteName='Home'
            >
                <Stack.Screen
                name='Home' 
                component={HomeScreen}
                options={{
                    headerShown:false
                }}
                />

                <Stack.Screen name='StreamingHome' component={MatchStreaming} />
                <Stack.Screen name='LeagueNav' component={LeagueNav} />
            </Stack.Navigator>
        )
    }

    return(
            <MainNav />
    )
}