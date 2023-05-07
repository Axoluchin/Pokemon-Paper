import { FC } from 'react'
import { FlashList } from '@shopify/flash-list'
import { NamedAPIResource } from 'pokenode-ts'

import PokemonCard from '../../components/PokemonCard'
import LoadingList from '../../components/LoadingList'
import Layout from './Layout'

interface ListProps {
  nameList: NamedAPIResource[]
  canNext: boolean
  canBack: boolean
  nextPage(): void
  backPage(): void
}

const List: FC<ListProps> = ({ nameList, backPage, nextPage, canBack, canNext }) => (
  <FlashList
    data={nameList}
    renderItem={({ item }) => <PokemonCard name={item.name} />}
    keyExtractor={(data) => data.name}
    estimatedItemSize={50}
    numColumns={2}
    ListFooterComponent={
      <Layout canBack={canBack} backPage={backPage} canNext={canNext} nextPage={nextPage} />
    }
    ListHeaderComponent={
      <Layout canBack={canBack} backPage={backPage} canNext={canNext} nextPage={nextPage} />
    }
    ListEmptyComponent={<LoadingList/>}
  />
)

export default List
