import { Text, View } from 'react-native'
import { styles } from './item-renderer'

const Extra = ({ content }: {content: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Extra para el guía de familia</Text>
      <Text style={styles.title}>{content}</Text>
    </View>
  )
}

export default Extra

