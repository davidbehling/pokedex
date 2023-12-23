const pokemonName = document.querySelector('.pokemon_name')
const pokemonNumber = document.querySelector('.pokemon_number')
const pokemonImage = document.querySelector('.pokemon_image')

const form = document.querySelector('.form')
const input = document.querySelector('.input_search')

const prev = document.querySelector('.btn-prev')
const next = document.querySelector('.btn-next')

const shine = document.querySelector('.btn-shine')

let searchPokemon = 1
let normalImage = ''
let shineImage = ''

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIResponse.status == 200) {
        const data = await APIResponse.json()
        return data
    }
}

const renderPokemon = async (pokemon) => {
    setPokemon('', 'Loading...')
    const data = await fetchPokemon(pokemon)

    if (data) {
        searchPokemon = data.id
        setImages(data)
        setPokemon(data.id, data.name)        
        setPokemonImage()
        pokemonImage.style.display = 'block'
    } else {
        setPokemon('', 'Not found')
        pokemonImage.style.display = 'none'
    }

    input.value = ''
}

const setPokemon = (id, name) => {
    pokemonName.innerHTML = name
    pokemonNumber.innerHTML = id
}

const setPokemonImage = () => {
    pokemonImage.src = shine.textContent == 'Shine' ? normalImage : shineImage
}

const setImages = (data) => {
    normalImage = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    shineImage = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny']
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    renderPokemon(input.value.toLowerCase())
})

prev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        renderPokemon(searchPokemon - 1)
    }    
})

next.addEventListener('click', () => {
    renderPokemon(searchPokemon + 1)
})

shine.addEventListener('click', () => {
    shine.textContent = shine.textContent == 'Shine' ? 'Normal' : 'Shine'
    setPokemonImage()  
})

renderPokemon(searchPokemon)
