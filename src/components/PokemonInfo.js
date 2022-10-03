import { Component } from "react";
import PokemonErrorView from "./PokemonErrorView";
import PokemonDataView from "./PokemonDataView";
import PokemonPendingView from "./PokemonPendingView";
import  pokemonAPI from "services/pokemon-api";
 
export default class PokemonInfo extends Component{
    state = {
        pokemon: null,
        // loading: false,
        error: null,
        status: 'idle'
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;

        if (prevName !== nextName) {
    
            this.setState({
                status: 'pending',
                // pokemon: null
            })
            pokemonAPI
                .fetchPokemon(nextName)
                .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
                .catch(error=> this.setState({error, status: 'rejected'}))
                // .finally(() => this.setState({ loading: false }))
                ;
        }
    }


    render() {

        const { pokemon,  error, status} = this.state;
        const { pokemonName } = this.props;

        if (status === 'idle') {
            return <div>Input pokemon name </div>
        }
        if (status === 'pending') {
            return <PokemonPendingView pokemonName={pokemonName}/>
            // <div>Loading...</div>
        }
        if (status === 'rejected') {
            return <PokemonErrorView message={error.message} />
        }
        if (status === 'resolved') {
            return <PokemonDataView pokemon={pokemon } />
            // <div>
            //         <p>{pokemon.name}</p>
            //         <img src={pokemon.sprites.other['official-artwork'].front_default} alt="{pokemon.name}" width="240"/>
            //     </div>
        }
        
        // return <div>
        //     {error && <h1>{error.message} {pokemonName }</h1>}
        //     {loading && <div>Loading...</div>}
        //     {!pokemonName && <div>Input pokemon name </div>}
        //     {pokemon && (
        //         <div>
        //             <p>{pokemon.name}</p>
        //             <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" width="240"/>
        //         </div>)
        //     }
        //         </div>
    }
}