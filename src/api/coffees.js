import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllCoffees = () => {
    return axios(`${apiUrl}/coffees`)
}

//show

export const getOneCoffee = (coffeeId) => {
    return axios(`${apiUrl}/coffees/${coffeeId}`)
}

// create

export const createCoffee = (newCoffee) => {
    return axios({
        url:`${apiUrl}/coffees`,
        method:'POST',
        data: {coffee: newCoffee}
    })
}



// PATCH -> update function
export const updateCoffee = (updatedCoffee) => {
    
    console.log('this is newPet', updatedCoffee)
    return axios({
        url: `${apiUrl}/coffees/${updatedCoffee._id}`,
        method: 'PATCH',
       
        data: { coffee: updatedCoffee }
    })
}


// DELETE -> remove function
export const removeCoffee = (coffeeId) => {
   
    return axios({
        url: `${apiUrl}/coffees/${coffeeId}`,
        method: 'DELETE',
        
    })
}