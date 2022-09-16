import { Image, ImageBackground, Text, View } from 'react-native'
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
      <ImageBackground source={require('../assets/images/cover-image.jpg')} style={styles.container} imageStyle={{ borderBottomRightRadius: 30 }}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            flex: 1,
            borderWidth: 1,
            height: 100,
            width: 300,
            resizeMode: 'contain',
            position: 'absolute',
            top: 50
          }}
        />
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: '#fff',
          width: 300,
          borderTopRightRadius: 30,
          borderBottomEndRadius: 30,
          padding: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        }}>
          <View style={{
            marginBottom: 10
          }}>
            <Text style={{
              fontSize: 50,
              color: '#0890b2',
              fontFamily: 'nunitoBold'
            }}>
              {title}
            </Text>
            <Text style={{
              fontFamily: 'nunitoRegular',
              textAlign: 'center',
              fontSize: 20
            }}>
              {serie} | Tema {topic}
            </Text>
          </View>
          <Text style={{
            borderColor: '#0890b2',
            color: '#0890b2',
            borderWidth: 2,
            borderRadius: 10,
            textAlign: 'center',
            fontSize: 20,
            paddingVertical: 4,
            fontFamily: 'nunitoBold'
          }}>
            {quote}
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Cover
