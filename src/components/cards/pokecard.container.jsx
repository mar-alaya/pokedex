import { PokeCardView } from "./pokecard.view";

export function PokecardContainer ({pokemons}) {
    return (<>
    {pokemons.map((pokemon)=>{
        return <PokeCardView key={pokemon.name} pokemon={pokemon} />
    })}
    </>)
}