import express,{json} from 'express'
import userRoute from './routes/userRoutes'

const app = express()
app.use(json())

app.use("/users", userRoute)
app.listen(4000,()=>{
    console.log("Journal backend is up and running")
})