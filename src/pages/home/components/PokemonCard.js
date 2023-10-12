import { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { getTypeColor } from "../../../helpers/stylePokemon";


export default function PokemonCard({url}){
    const [pokemon, setPokemon] = useState(null);
    const { navigate } = useNavigation();

    
    const showDetailsPokemon = () => {
        if( pokemon ){
            navigate( 'PokemonDetails', {pokemon} );
        }
    }
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
        <Pressable 
        style={{...style.container, 
            backgroundColor:`${(pokemon)?(getTypeColor(pokemon.types[0].type.name)):'light'}`}} 
        onPress={showDetailsPokemon} 
        >
            {pokemon?
            <>
                <Image
                style={style.image}
                source={{uri: pokemon.sprites.front_default }}
                />
                <Text style={style.text} > { pokemon.name.toUpperCase() } - { pokemon.types[0].type.name } </Text>
            </>
                :
            <Text> Loading... </Text>
            }
        </Pressable>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },
    image:{
        width: 100,
        height: 100
    },
    text:{
        fontWeight: 'bold',
        color:'white'
    }
});