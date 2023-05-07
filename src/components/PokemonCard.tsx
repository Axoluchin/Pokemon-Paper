import { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, useTheme } from 'react-native-paper'
import { useRouter } from 'expo-router'
import { useQuery } from 'react-query'

import LoadingCard from './LoadingCard'
import getPokemon from '../services/pokemon/getPokemon'

interface PokemonCardProps {
  name: string
}

const PokemonCard: FC<PokemonCardProps> = ({ name }) => {
  const { data, isLoading } = useQuery(['Pokemon', name], () => getPokemon(name))
  const { colors } = useTheme()
  const { push } = useRouter()

  const handleCard = () => push(`pokemon/${name}`)

  if (!data || isLoading) return <LoadingCard name={name} />

  return (
    <View style={styles.container}>
      <Card onPress={handleCard}>
        <Card.Cover source={{ uri: data.sprites.front_default as string }} style={styles.cover} />
        <Text variant="bodyLarge" style={{ ...styles.id, color: colors.onSecondaryContainer }}>
          {data.id}
        </Text>
        <Card.Content>
          <Text
            variant="headlineSmall"
            style={{ ...styles.name, color: colors.onSecondaryContainer }}
          >
            {data.name.charAt(0).toLocaleUpperCase()}
            {data.name.slice(1)}
          </Text>
        </Card.Content>
      </Card>
    </View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  container: {
    padding: 8,
    width: '100%'
  },
  cover: {
    aspectRatio: '1/1',
    height: 100,
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  id: {
    position: 'absolute',
    right: 8,
    top: 4,
    fontWeight: 'bold'
  },
  name: {
    textAlign: 'center'
  }
})
