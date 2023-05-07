import { FC } from 'react'
import { FlashList } from '@shopify/flash-list'
import { Text } from 'react-native-paper'
import { NamedAPIResource } from 'pokenode-ts'

interface ListProps {
  nameList: NamedAPIResource[]
}

const List: FC<ListProps> = ({ nameList }) => (
  <FlashList
    data={nameList}
    renderItem={({ item }) => <Text>{item.name}</Text>}
    keyExtractor={(data) => data.name}
    estimatedItemSize={50}
  />
)

export default List
