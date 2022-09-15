import { Text, View } from 'react-native'
import { styles } from './item-renderer'

const Conclusion = ({ content }: {content: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conclusión</Text>
      <Text style={styles.title}>{content}</Text>
      <Text style={styles.title}>Formulario</Text>
    </View>
  )
}

export default Conclusion

