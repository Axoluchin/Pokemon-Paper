import { FC } from 'react'
import { ActivityIndicator, List, Text } from 'react-native-paper'
import { useQuery } from 'react-query'

import getAbility from '../services/pokemon/getAbility'

interface AbilityLabelProps {
  name: string
}

const AbilityLabel: FC<AbilityLabelProps> = ({ name }) => {
  const { data, isLoading } = useQuery(['Ability', name], () => getAbility(name))

  if (!data || isLoading) return <ActivityIndicator size="large" />

  return (
    <List.Item
      title={data.name.charAt(0).toLocaleUpperCase() + data.name.slice(1)}
      right={() => <Text>{data.is_main_series ? 'Original' : 'SpinOff'}</Text>}
      titleStyle={{ flexGrow: 1 }}
    />
  )
}

export default AbilityLabel
