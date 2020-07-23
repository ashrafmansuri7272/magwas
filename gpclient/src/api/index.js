import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const addUser = payload => api.post(`/addPersonInfo`, payload)
export const getUsers = () => api.get(`/getUsers`)



export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    addUser,
    getUsers,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis