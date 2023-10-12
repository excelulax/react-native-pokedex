import { useEffect, useState } from "react";
import { TextInput, StyleSheet, View, Text, FlatList } from "react-native";
import axios from "axios";


export default function Searcher(){
    const [search, setSearch] = useState('');
    const [pokemonNames, setPokemonNames] = useState([]);
    
    const showPokemonNames = pokemonNames.map(p => p.includes(search));



    useEffect(() => {
        const fetchPokemonNames = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
                const data = response.data;
                const names = data.results.map(p => (p.name));
                setPokemonNames(names);
            } catch (error) {
                console.error(error)                
            }
        }
        fetchPokemonNames();
    }, [])
    
    return(
        <View>
            <TextInput
            style={styles.textInput}
            placeholder="Buscar..."
            onChangeText={(t) =>{ setSearch(t) }}
            value={search}
            />

        <FlatList
            // style={styles.flatList}
            data={showPokemonNames}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
            <Text>{item}</Text>
            )}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatList:{
        flex: 0.2,
    },
    textInput: {
        width: 200,
        height:30,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft: 15,
        paddingRight: 10
    }
});