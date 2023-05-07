import { FC } from 'react'
import { Card, ActivityIndicator, Text } from 'react-native-paper'

interface LoadingCardProps {
  name: string
}

const LoadingCard: FC<LoadingCardProps> = ({ name }) => (
  <Card>
    <Card.Content>
      <ActivityIndicator size="large" />
      <Text variant="headlineSmall">
        {name!.charAt(0).toLocaleUpperCase()}
        {name!.slice(1)}
      </Text>
    </Card.Content>
  </Card>
)

export default LoadingCard
