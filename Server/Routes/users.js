import  Express  from "express";
import {login , signup} from '../Controllers/auth.js'

const Router = Express.Router();

Router.post('/signup' , signup)
Router.post('/login' , login)

export default Router;