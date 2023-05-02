import Express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import  userRoutes from './Routes/users.js'

const app = Express();
app.use(Express.json({limit : "30mb" , extended : "true"}));
app.use(Express.urlencoded({limit : '30mb' , extended : "true"}));
app.use(cors());


app.get('/' , (req,res)=>{
    res.send("This is HR Zenith API")
})

app.use('/user' , userRoutes)


const PORT = process.env.PORT || 7878
const CONNECTION_URL = "mongodb+srv://zenith-admin:zenith-admin@zenith.fdp46bd.mongodb.net/test"
mongoose.connect(CONNECTION_URL , {useNewUrlParser : true , useUnifiedTopology : true})
.then(() => {
    console.log("Connection With DataBase is Succesfully Estabilished.");
})
.catch((err) => {
    console.log("OOPS!! You lost Your Connection");
})

app.listen(PORT , (err)=>{console.log(`Server is running on port ${PORT}` , err)})