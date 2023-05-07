import { View, StyleSheet } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'

const LoadingList = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
    <Text>Cargando...</Text>
  </View>
)

export default LoadingList

const styles = StyleSheet.create({
    container: {
        marginVertical: 240,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
