import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Typography from '../../components/Typography';


export interface ItemT {
  item: string;
  index: number
}


const Tag = ({ item, index }: ItemT) => {
  return (
    <View style={styles.container}>
      <Typography color='#fff' type='light'>{item}</Typography>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
  container: { marginTop: 10, borderRadius: 5, marginRight: 10, backgroundColor: '#3f4b63', padding: 7 }
})