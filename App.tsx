import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";

import Test from "./src/sections/Test";

export default function App() {
  return (
    <PaperProvider>
        <StatusBar style="inverted" translucent={false}/>
        <Test/>
    </PaperProvider>
  );
}

