import { FC } from 'react'
import { Image } from 'expo-image'
import { useQuery } from 'react-query'
import { List, ActivityIndicator, Text } from 'react-native-paper'

import getItem from '../services/pokemon/getItem'

interface ItemLabelProps {
  name: string
}

const ItemLabel: FC<ItemLabelProps> = ({ name }) => {
  const { data, isLoading } = useQuery(['item', name], () => getItem(name))

  if (!data || isLoading) return <ActivityIndicator size="large" />

  return (
    <List.Item
      title={data.names[3].name}
      left={() => (
        <Image style={{ width: 'auto', aspectRatio: '1/1' }} source={{ uri: data.sprites.default }} />
      )}
      right={() => <Text>${data.cost}</Text>}
    />
  )
}

export default ItemLabel
