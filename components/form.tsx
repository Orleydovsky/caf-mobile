import { Pressable, TextInput, View, Text, StyleSheet } from 'react-native'
import * as color from '../constants/colors'

export const Form = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          ¿Con cuantos miembros de tu familia desarrollaste la CAF?
        </Text>
        <TextInput
          placeholder='1, 2, 3, ...7'
          keyboardType='numeric'
          style={styles.textInput}
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 2,
    borderColor: color.darkBlue,
    marginBottom: 20,
    borderRadius: 20
  },
  title: {
    color: color.darkBlue,
    marginBottom: 20,
    fontSize: 18
  },
  textInput: {
    backgroundColor: color.white,
    borderWidth: 2,
    borderColor: color.darkBlue,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18
  },
  button: {
    backgroundColor: color.darkBlue,
    marginTop: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: color.white
  }
})
