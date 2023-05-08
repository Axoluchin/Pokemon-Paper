import { useEffect } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { Text, ProgressBar, useTheme } from 'react-native-paper'
import { useSearchParams, useNavigation } from 'expo-router'
import { Image } from 'expo-image'
import { useQuery } from 'react-query'

import AbilityLabel from '../../src/components/AbilityLabel'
import PokemonCard from '../../src/components/PokemonCard'
import PokemonGames from '../../src/components/PokemonGames'
import getPokemon from '../../src/services/pokemon/getPokemon'
import ItemLabel from '../../src/components/ItemLabel'

const PokemonPage = () => {
  const { name } = useSearchParams<{ name: string }>()
  const { data, isLoading } = useQuery(['Pokemon', name], () => getPokemon(name!))
  const { setOptions } = useNavigation()
  const { colors } = useTheme()

  useEffect(() => {
    setOptions({ title: name && name.charAt(0).toLocaleUpperCase() + name.slice(1) })
  }, [name, setOptions])

  if (!data || isLoading) return null

  const imageMain =
    data.sprites.other?.['official-artwork'].front_default || data.sprites.front_default

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imageMain! }} style={styles.image} />
      <Text variant="displayMedium" style={{ ...styles.name, color: colors.onSecondaryContainer }}>
        {name!.charAt(0).toLocaleUpperCase()}
        {name!.slice(1)}
      </Text>
      <View style={styles.info}>
        <View>
          <Text variant="titleLarge" style={{ color: colors.onSecondaryContainer }}>{`Altura: ${
            data.height / 10
          }m.`}</Text>
          <ProgressBar progress={data.height / 100} />
        </View>

        <View>
          <Text variant="titleLarge" style={{ color: colors.onSecondaryContainer }}>{`Peso: ${
            data.weight / 10
          }Kg.`}</Text>
          <ProgressBar progress={data.weight / 1000} />
        </View>

        <View>
          <Text
            variant="titleLarge"
            style={{ color: colors.onSecondaryContainer }}
          >{`Experiencia base: ${data.base_experience}`}</Text>
          <ProgressBar progress={data.base_experience / 500} />
        </View>

        <View>
          <Text variant="displaySmall" style={{ color: colors.onSecondaryContainer }}>
            Habilidades
          </Text>
          {data.abilities.map((ability) => (
            <AbilityLabel name={ability.ability.name} key={ability.ability.name}/>
          ))}
        </View>
        <View>
          <Text variant="displaySmall" style={{ color: colors.onSecondaryContainer }}>
            Formas
          </Text>
          {data.forms.map((form) => (
            <PokemonCard name={form.name} key={form.name}/>
          ))}
        </View>
        <View>
          <Text variant="displaySmall" style={{ color: colors.onSecondaryContainer }}>
            Juegos
          </Text>
          {data.game_indices.map(({version}) => (
            <PokemonGames name={version.name} key={version.name}/>
          ))}
        </View>
        <View>
          <Text variant="displaySmall" style={{ color: colors.onSecondaryContainer }}>
            Items
          </Text>
          {data.held_items.map((items) => (
            <ItemLabel key={items.item.name} name={items.item.name}/>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default PokemonPage

const styles = StyleSheet.create({
  container: {},
  image: {
    aspectRatio: '1/1',
    width: '100%'
  },
  name: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  info: {
    paddingHorizontal: 16,
    marginBottom: 32,
    gap: 24
  }
})
