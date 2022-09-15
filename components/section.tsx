import { Text, View } from 'react-native'
import { styles } from './item-renderer'

interface Props {
  title: string
  quote: string
  content: string
}

const Section = ({ title, quote, content }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{quote}</Text>
      <Text style={styles.title}>{content}</Text>
    </View>
  )
}

export default Section
