
import { useEffect, useState } from "preact/hooks";


export function PokedexList() {
    const [pokemons, setPokemons] = useState([])
    const [nextLink,setNextLink]=useState('')

    const getPokemons = async (link='https://pokeapi.co/api/v2/pokemon') => {
        const request = await fetch(link);
        const response = await request.json();

        setPokemons([
            ...pokemons,
            ...response.results
        ])
        setNextLink(response.next)
    };

    useEffect(async () => {
        await getPokemons()
        return () => {

        };
    }, [])

    const getNumber=(url)=> url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','').padStart(3,'0')
    function capitalize(text) {
        if (!text) return text;
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    async function getMorePokemons(){
        event.preventDefault()
        await getPokemons(nextLink)
    }

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-10">
                {
                    pokemons.map((pokemon) => (
                        <div class="flex items-center justify-center flex-col">
                            <img
                                class="w-40 -mb-12 z-40"
                                inferSize={true}
                                alt="pokemon"
                                src={`https://img.pokemondb.net/sprites/go/normal/${pokemon.name}.png`}
                            />
                            <div class="bg-[#F2250A] p-1 pt-8 rounded-md w-48">
                                <div
                                    class="bg-[#24272E] p-2 rounded-md flex justify-between items-center press-start-2p-regular shadow-md"
                                    style="font-size:11px;"
                                >
                                    <span class="text-[#81BAC3]">#{getNumber(pokemon.url)}</span>
                                    <span class="text-[#D6DBDE]">{capitalize(pokemon.name)}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div class="w-full flex items-center justify-center mt-6">
                <button
                    onClick={getMorePokemons}
                    type="button"
                    class="bg-neutral-900 hover:text-[#20CBB8] p-3 rounded-full bg-opacity-40 backdrop-blur-sm press-start-2p-regular text-sm"
                >
                    Load More
                </button>
            </div>
        </>
    )
}