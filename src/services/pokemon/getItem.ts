import api from "../api"

const getItem = (itemName: string) => api.item.getItemByName(itemName)

export default getItem
