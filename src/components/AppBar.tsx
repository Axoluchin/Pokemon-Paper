import { FC } from 'react'
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

const AppBar: FC<NativeStackHeaderProps> = ({ back, navigation, route, options }) => (
    <Appbar.Header mode='small' elevated>
      {back && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={options.title || route.name} titleStyle={styles.title}/>
    </Appbar.Header>
  )

export default AppBar

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 26
  }
})
