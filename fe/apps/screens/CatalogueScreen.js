import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import ProductType from '../components/ProductType'

const CatalogueScreen = () => {
  return (
    <View style={styles.container}>
      <ProductType />
    </View>
  )
}

export default CatalogueScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
})