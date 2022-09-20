import { Dimensions, StyleSheet, Text, View } from 'react-native'
import * as color from '../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'
import { Extra as Props } from '../types'

export default function Extra ({ content }: Props) {
  return (
    <View style={styles.container}>
      <View style={{
        padding: 20
      }}>
        <LinearGradient
          colors={[color.darkBlue, color.mediumBlue]}
          style={{
            borderRadius: 30,
            shadowColor: color.black,
            shadowOffset: {
              width: 0,
              height: 5
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10
          }}
        >
          <Text style={styles.title}>
            Extra para el guía de familia
          </Text>
        </LinearGradient>
        <Text style={styles.content}>{content}</Text>
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
  title: {
    fontSize: 60,
    fontFamily: 'nunitoBold',
    padding: 20,
    borderRadius: 30,
    color: color.white

  },
  content: {
    fontSize: 40,
    fontFamily: 'nunitoBold',
    padding: 20,
    color: color.darkBlue
  }
})
