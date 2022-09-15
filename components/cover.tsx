import { Text, View } from 'react-native'
import { styles } from './item-renderer'

interface Props {
  title: string
  serie: string
  topic: string
  quote: string
}

const Cover = ({ title, serie, topic, quote }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{serie}</Text>
      <Text style={styles.title}>{topic}</Text>
      <Text style={styles.title}>{quote}</Text>
    </View>
  )
}

export default Cover

