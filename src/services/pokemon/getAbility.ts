import api from "../api"

const getAbility = (name: string) => api.pokemon.getAbilityByName(name) 

export default getAbility
