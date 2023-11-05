import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import StackNavigation from './src/navigation/StackNavigation'
import SplashScreen from 'react-native-splash-screen'
import store from './src/redux/store'
import { Provider } from 'react-redux'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})