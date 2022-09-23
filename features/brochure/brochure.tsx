import { View, FlatList, Dimensions } from 'react-native'
import ItemRenderer from '../../components/item-renderer'
import useCaf from '../../hooks/use-caf'
export default function Brochure () {
  const { caf } = useCaf()
  return (
    <View style={{ position: 'relative' }}>
      <FlatList
        data={caf?.content}
        renderItem={({ item }) => <ItemRenderer item={item}/>}
        snapToAlignment='end'
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}
