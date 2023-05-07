import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider } from '@react-navigation/native'

import AppBar from '../src/components/AppBar'
import { DarkTheme } from '../src/utils/theme'

// eslint-disable-next-line camelcase
export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index'
}

const App = () => (
  <PaperProvider theme={DarkTheme}>
    <ThemeProvider value={DarkTheme}>
      <StatusBar style="inverted"/>
      <Stack
        screenOptions={{
          header: (props) => <AppBar {...props} />
        }}
        >
        <Stack.Screen name="index" options={{ title: 'Pokemons' }} />
      </Stack>
    </ThemeProvider>
  </PaperProvider>
)

export default App
