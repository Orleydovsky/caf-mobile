import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Form } from './form'
import * as color from '../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'

export default function Conclusion ({ content }: { content: string }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[color.darkBlue, color.lightBlue]}
        style={styles.gradient}
      />
      <View style={{
        padding: 20
      }}>
        <Text style={styles.title}>
          Conclusión
        </Text>
        <Text style={[styles.cardBase, styles.lightCard]}>
          {content}
        </Text>
        <Form/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '50%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  title: {
    fontFamily: 'nunitoBold',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 20,
    color: color.white
  },
  cardBase: {
    padding: 20,
    marginBottom: 20,
    fontSize: 18,
    borderRadius: 20,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  darkCard: {
    backgroundColor: color.darkBlue,
    color: color.white,
    borderColor: color.mediumBlue,
    borderWidth: 2
  },
  lightCard: {
    backgroundColor: color.white,
    color: color.black,
    borderColor: color.darkBlue,
    borderWidth: 2
  }
})
