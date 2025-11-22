import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>All my contacts</Text>
      <Link href={"/profile" as any} style={styles.link}>Go to Profile</Link>
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
    },
    link:{
        marginTop: 20,
        fontSize: 18,
        backgroundColor: 'blue',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        boxShadow: '2px 2px 5px #333',
    }
})