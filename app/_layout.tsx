import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>All my contacts</Text>
    </View>
  )
}

export default RootLayout

// text style props siehe doku
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#9bc6ffff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headline:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    }
})