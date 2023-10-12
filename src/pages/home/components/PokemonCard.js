import { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import axios from "axios";


export default function PokemonCard({url}){
    const [pokemon, setPokemon] = useState(null);


    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await axios.get(url);
                const data = response.data;
                setPokemon(data);
            } catch (error) {
                console.error(error)                
            }
        }
        fetchPokemons();
    }, [])
    return(
        <View style={style.container} >
            {pokemon?
            <>
                <Image
                style={style.image}
                source={{uri: pokemon.sprites.front_default }}
                />
                <Text style={style.text} > { pokemon.name.toUpperCase() } </Text>
            </>
                :
            <Text> Loading... </Text>
            }
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#8B8C8B',
        borderRadius: 10,
        marginBottom: 10
    },
    image:{
        width: 100,
        height: 100
    },
    text:{
        fontWeight: 'bold'
    }
});