import { StatusBar } from 'expo-status-bar'
import { Provider as PaperProvider } from 'react-native-paper'

import { Slot } from 'expo-router'

const App = () => (
  <PaperProvider>
    <StatusBar style="inverted" translucent={false} />
    <Slot/>
  </PaperProvider>
)

export default App
