import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import * as color from '../constants/colors'

interface Props {
  title: string
  serie: string
  topic: string
  quote: string
}

export default function Cover ({ title, serie, topic, quote }: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/cover-image.jpg')}
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <View style={styles.titleCard}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.serieTopic}>
            {serie} | Tema {topic}
          </Text>
          <Text style={styles.quote}>
            {quote}
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: color.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  backgroundImage: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  logo: {
    flex: 1,
    height: 100,
    width: 300,
    resizeMode: 'contain',
    position: 'absolute',
    top: 50
  },
  titleCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: color.white,
    width: 300,
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,
    padding: 20,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  title: {
    fontSize: 50,
    color: color.darkBlue,
    fontFamily: 'nunitoBold'
  },
  serieTopic: {
    fontFamily: 'nunitoRegular',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20
  },
  quote: {
    borderColor: color.darkBlue,
    color: color.darkBlue,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 4,
    fontFamily: 'nunitoBold'
  }
})
