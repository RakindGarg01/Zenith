import axios from 'axios'

const API = axios.create({baseURL : 'http://localhost:7878'})

export const login = (authData)=> API.post('/user/login' , authData)
export const signup = (authData)=> API.post('/user/signup' , authData)