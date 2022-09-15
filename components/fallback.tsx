import { Text, View } from 'react-native'
import { styles } from './item-renderer'

const Fallback = ({ type }: { type: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type}</Text>
    </View>
  )
}

export default Fallback

