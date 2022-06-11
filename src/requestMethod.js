import axios from 'axios'

const baseUrl="https://harivara-global-service.herokuapp.com/api/users"

export const publicRequest=axios.create({
    baseURL:baseUrl
})