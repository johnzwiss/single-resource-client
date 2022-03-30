import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllCoffees = () => {
    return axios(`${apiUrl}/coffees`)
}