import { Route, Routes, Navigate, NativeRouter } from 'react-router-native'
import { useFonts } from 'expo-font'
import { Fragment } from 'react'
import HomeMobile from './screens/home-mobile'
import Brochure from './features/brochure/brochure'

export default function App () {
  const { cafs } = useCafs()
  const [fontsLoaded] = useFonts({
    nunitoRegular: require('./assets/fonts/Nunito-Regular.ttf'),
    nunitoBold: require('./assets/fonts/Nunito-Bold.ttf')
  })
  if (!fontsLoaded) return null
  return (
    <Fragment>
      <NativeRouter>
        <Routes>
          <Route path='/' element={<HomeMobile/>}/>
          <Route path='/:id' element={<Brochure/>}/>
          <Route path='*' element={<Navigate to='/' replace/>}/>
        </Routes>
      </NativeRouter>
    </Fragment>
  )
}
