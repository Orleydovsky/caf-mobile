import { View, FlatList, Dimensions } from 'react-native'
import { useState } from 'react'
import ItemRenderer from './components/item-renderer'
import { useFonts } from 'expo-font'
import useCafs from './hooks/use-cafs'

export default function App () {
  const { cafs } = useCafs()
  const [fontsLoaded] = useFonts({
    nunitoRegular: require('./assets/fonts/Nunito-Regular.ttf'),
    nunitoBold: require('./assets/fonts/Nunito-Bold.ttf')
  })
  if (!fontsLoaded) return null
  return (
    <View>
      <FlatList
        data={items?.content}
        renderItem={({ item }) => <ItemRenderer item={item}/>}
        snapToAlignment='start'
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}
