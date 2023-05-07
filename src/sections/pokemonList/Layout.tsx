import { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

interface LayoutProps {
  nextPage(): void
  backPage(): void
  canNext: boolean
  canBack: boolean
}

const Layout: FC<LayoutProps> = ({ backPage, nextPage, canBack, canNext }) => (
  <View style={styles.container}>
    <Button mode="contained-tonal" style={styles.button} onPress={backPage} disabled={!canBack}>
      Atras
    </Button>
    <Button mode="contained-tonal" style={styles.button} onPress={nextPage} disabled={!canNext}>
      Siguiente
    </Button>
  </View>
)

export default Layout

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16
  },
  button: {
    width: '40%'
  }
})
