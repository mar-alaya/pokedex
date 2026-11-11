import { useEffect, useState } from "react";
import { NavBar } from "./components/navbar.public.comp";
import { PokeCardView } from "./components/cards/pokecard.view";
import { Header } from "./components/shared/header.comp";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokeData() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0",
        );

        if (!response.ok) {
          throw new Error("Fehler beim Loading der Pokemons");
        }

        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.log(`Fehler: ${error}`);
      }
    }

    getPokeData();
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <Header />
      </header>
      <main className="text-center">
        <div>
          {pokemons.map((pokemon) => {
            return <PokeCardView key={pokemon.id} pokemon={pokemon} />;
          })}
        </div>
      </main>
    </>
  );
}

export default App;
