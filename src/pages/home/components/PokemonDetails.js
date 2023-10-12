import { useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'

export const PokemonDetails = () => {
    const { pokemon } = useRoute().params;
  return (
    <View>
        <Text>{pokemon.name}</Text>
    </View>
  )
}
