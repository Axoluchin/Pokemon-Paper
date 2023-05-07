import { StatusBar } from 'expo-status-bar'
import { Provider as PaperProvider } from 'react-native-paper'

import Test from './src/sections/Test'

const App = () => (
  <PaperProvider>
    <StatusBar style="inverted" translucent={false} />
    <Test />
  </PaperProvider>
)

export default App
