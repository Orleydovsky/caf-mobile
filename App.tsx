import { View, FlatList, Dimensions } from 'react-native'
import { useState } from 'react'
import ItemRenderer from './components/item-renderer'
import { useFonts } from 'expo-font'

const data = [
  {
    type: 'cover',
    title: '¿Quién tiene sed?',
    serie: 'Pasión por Dios',
    topic: 1,
    quote: 'Juan 7:37-39'
  },
  {
    type: 'section',
    title: 'Introducción',
    content: '#La sed es el mecanismo que regula el contenido de agua en\nel organismo y uno de los primeros indicios que nos marca la\ndeshidratación. \n#En medio de una fiesta donde hay comida y bebida en abundancia, Jesús\ndice: “Si alguno tiene sed, venga a mí y beba”. \n#Sonaría ilógico que después de 7 días de fiesta, de comer y beber alguien tenga sed.\n#Pero Jesús no está hablando de la sed física que estimula nuestro cerebro sino de la sed\ny Pasión por el Espíritu Santo.'
  },
  {
    type: 'extra',
    content: '¿Qué hacer para beber del Espíritu Santo?'
  },
  {
    type: 'section',
    title: 'Reconozca su condición',
    quote: 'Versículo 37: "Si alguno tiene sed"',
    content: '#Muchos asumen que están bien y saciados, sin necesidad de venir a tomar agua.\n#No todos tienen sed, por eso Jesús busca a alguno, alguien que reconozca la sensación que emite no\nsu cerebro, sino su espíritu por su condición.'
  },
  {
    type: 'section',
    title: 'Busque la fuente adecuada',
    quote: 'Versículo 37: "Venga a mí y beba"',
    content: '#Jesús nos muestra que él es la fuente clara para saciar la sed. No nos envía a ningún otro lugar o\npersona.\n#Muchos viven con sed todavía porque buscan beber de los lugares o personas equivocadas. Pero Él es\nla fuente que viene para llenar nuestro ser. '
  },
  {
    type: 'section',
    title: 'Resultados de beber del Espíritu Santo',
    quote: 'Versículos 38-39',
    content: '#Vida y Abundancia. Versículo 38. Los ríos son sinónimos de vida, alimento y alegría. Un buen rio nos\nofrece hasta un tiempo de integración familiar.\n#Restauración para mi casa: Ezequiel 47:7-9. El río simboliza la vida que proviene de Dios y las\nbendiciones que fluyen de su trono. '
  },
  {
    type: 'conclusion',
    content: '¿Quién tiene sed? '
  }
]

export default function App () {
  const [items] = useState(data)
  const [fontsLoaded] = useFonts({
    nunitoRegular: require('./assets/fonts/Nunito-Regular.ttf'),
    nunitoBold: require('./assets/fonts/Nunito-Bold.ttf')
  })
  if (!fontsLoaded) return null
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <ItemRenderer item={item}/>}
        snapToAlignment='center'
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}
