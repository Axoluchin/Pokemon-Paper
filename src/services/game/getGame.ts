import api from "../api"

const getGame = (name: string) => api.game.getVersionByName(name)

export default getGame
