import { MD3DarkTheme } from 'react-native-paper'
import { DarkTheme as NavigationDarkTheme } from '@react-navigation/native'
import merge from 'deepmerge'

export const DarkTheme = merge(NavigationDarkTheme, {
  ...MD3DarkTheme,

  colors: {
    primary: 'rgb(184, 209, 102)',
    onPrimary: 'rgb(41, 53, 0)',
    primaryContainer: 'rgb(61, 77, 0)',
    onPrimaryContainer: 'rgb(212, 237, 127)',
    secondary: 'rgb(196, 202, 169)',
    onSecondary: 'rgb(45, 51, 27)',
    secondaryContainer: 'rgb(68, 73, 48)',
    onSecondaryContainer: 'rgb(224, 230, 196)',
    tertiary: 'rgb(161, 208, 197)',
    onTertiary: 'rgb(3, 55, 48)',
    tertiaryContainer: 'rgb(33, 78, 70)',
    onTertiaryContainer: 'rgb(189, 236, 225)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(27, 28, 23)',
    onBackground: 'rgb(228, 227, 218)',
    surface: 'rgb(27, 28, 23)',
    onSurface: 'rgb(228, 227, 218)',
    surfaceVariant: 'rgb(70, 72, 60)',
    onSurfaceVariant: 'rgb(199, 200, 184)',
    outline: 'rgb(144, 146, 131)',
    outlineVariant: 'rgb(70, 72, 60)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(228, 227, 218)',
    inverseOnSurface: 'rgb(48, 49, 43)',
    inversePrimary: 'rgb(82, 102, 0)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(35, 37, 27)',
      level2: 'rgb(40, 43, 29)',
      level3: 'rgb(44, 48, 32)',
      level4: 'rgb(46, 50, 33)',
      level5: 'rgb(49, 53, 34)'
    },
    surfaceDisabled: 'rgba(228, 227, 218, 0.12)',
    onSurfaceDisabled: 'rgba(228, 227, 218, 0.38)',
    backdrop: 'rgba(47, 49, 38, 0.4)'
  }
})
