import { useState, useEffect } from "react";

export function PokeCardView({ pokemon }) {
  const [pokemonData, setPokemonData] = useState({
    sprites: {
      front_default: "",
    },
    id: "",
    name: "",
    types: {
      0: {
        type: {
          name: "",
        },
      },
    },
    height: 0,
    weight: 0,
    stats: {
      0: {
        base_stat: 0,
      },
      1: {
        base_stat: 0,
      },
      2: {
        base_stat: 0,
      },
    },
  });

  useEffect(() => {
    async function getPokeData() {
      try {
        const response = await fetch(pokemon.url);

        if (!response.ok) {
          throw new Error("Fehler beim Loading der Pokemon Data");
        }

        const data = await response.json();

        setPokemonData(data);
      } catch (error) {
        console.log(`Fehler: ${error}`);
      }
    }

    getPokeData();
  }, []);

  return (
    <>
      <a href="#" className="hover-3d my-12 mx-2 cursor-pointer">
        <div className="card h-auto w-auto bg-white text-black border-2 border-gray-200 bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
          <div className="card-body">
            <div className="mb-10 flex flex-col items-center">
              <p className="text-xl opacity-50 self-end">#{pokemonData.id}</p>
              <img src={pokemonData.sprites.front_default} width={170} />
            </div>
            <div className="text-lg mb-4 font-bold">
              {pokemonData.name.toLocaleUpperCase()}
            </div>
            <div class="badge badge-soft badge-primary">
              {pokemonData.types[0].type.name}
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-xs opacity-50">Größe</div>
                <div>{pokemonData.height / 10} m</div>
              </div>
              <div>
                <div className="text-xs opacity-50">Gewicht</div>
                <div>{pokemonData.weight / 10} kg</div>
              </div>
            </div>
            <div>
              <p className="font-semibold">HP</p>
              <progress
                class="progress progress-secondary w-56"
                value={pokemonData.stats[0].base_stat}
                max="100"
              ></progress>
              <p className="font-semibold">Angriff</p>
              <progress
                class="progress progress-secondary  w-56"
                value={pokemonData.stats[1].base_stat}
                max="100"
              ></progress>
              <p className="font-semibold">Verteidigung</p>
              <progress
                class="progress progress-secondary w-56"
                value={pokemonData.stats[2].base_stat}
                max="100"
              ></progress>
            </div>
          </div>
        </div>

        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </a>
    </>
  );
}
