import axios from "axios"

export const requests =  axios.create({
    baseURL:"https://localhost:8080"
})
