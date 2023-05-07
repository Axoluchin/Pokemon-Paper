import { FC } from 'react'
import { FlashList } from '@shopify/flash-list'
import { NamedAPIResource } from 'pokenode-ts'

import PokemonCard from '../../components/PokemonCard'

interface ListProps {
  nameList: NamedAPIResource[]
}

const List: FC<ListProps> = ({ nameList }) => (
  <FlashList
    data={nameList}
    renderItem={({ item }) =><PokemonCard name={item.name}/>}
    keyExtractor={(data) => data.name}
    estimatedItemSize={50}
    numColumns={2}
  />
)

export default List
