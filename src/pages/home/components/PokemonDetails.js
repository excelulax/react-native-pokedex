import { useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'

export const PokemonDetails = () => {
    const { name } = useRoute().params;
  return (
    <View>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
        <Text>{name}</Text>
    </View>
  )
}
