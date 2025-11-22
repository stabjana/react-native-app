import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>All my contacts</Text>
      <Link>Go to Profile</Link>
    </View>
  )
}

export default Index

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