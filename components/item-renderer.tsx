import { Dimensions, StyleSheet } from 'react-native'
import Conclusion from './conclusion'
import Cover from './cover'
import Extra from './extra'
import Section from './section'

const ItemRenderer = ({ item }) => {
  switch (item.type) {
    case 'cover':
      return <Cover title={item.title} serie={item.serie} topic={item.topic} quote={item.quote}/>
    case 'section':
      return <Section title={item.title} quote={item.quote} content={item.content}/>
    case 'extra':
      return <Extra content={item.content} />
    case 'conclusion':
      return <Conclusion content={item.content}/>
    default:
      return null
  }
}

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  title: {
    fontSize: 20
  }
})

export default ItemRenderer
