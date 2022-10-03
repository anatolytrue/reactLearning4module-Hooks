import { Component } from "react";
// import { ToastContainer } from 'react-toastify';
import PokemonForm from "./PokemonForm";
import PokemonInfo from "./PokemonInfo";


export default class App extends Component {
  // state = {
  //   pokemon: null,
  //   loading: false,
  // }

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   fetch('https://pokeapi.co/api/v2/pokemon/vulpix')
  //     .then(res => res.json())
  //     .then(pokemon => this.setState({ pokemon }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  state = {
    pokemonName: ''
  }
  handleFormSubmit = pokemonName => {
    this.setState({pokemonName})
  }
  render() {

    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={ this.state.pokemonName} />
        {/* <ToastContainer position="top-center" autoClose={2000}/> */}
      </div>
    )

    // return (
    //   <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
    //     {this.state.loading && <h1>Loading...</h1>}
    //     {this.state.pokemon
    //       &&
    //       (<div>{this.state.pokemon.name}
    //       </div>)}
    //   </div>
    // )
  };
   } 