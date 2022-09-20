import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import * as color from '../constants/colors'
import { Section as Props } from '../types'

export default function Section ({ title, content }: Props) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[color.darkBlue, color.lightBlue]}
        style={styles.gradient}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>
          {title}
        </Text>
        {
        content !== undefined
          ? content.split('#').length > 1
            ? content.split('#').slice(1).map((content, index) => {
              return (
                <Text key={content} style={[
                  styles.cardBase,
                  index % 2 === 0
                    ? styles.lightCard
                    : styles.darkCard
                ]}>
                  {content}
                </Text>
              )
            })
            : <Text style={[styles.cardBase, styles.lightCard]}>
              {content}
            </Text>
          : null
        }
      </View>
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
    borderWidth: 1
  },
  lightCard: {
    backgroundColor: color.white,
    color: color.black,
    borderColor: color.darkBlue,
    borderWidth: 1
  }
})
