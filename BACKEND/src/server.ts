import express,{json} from 'express'
import userRoute from './routes/userRoutes'
import categoryRoute from './routes/categoryRoute'
import journalRoute from './routes/journalRoute'

const app = express()
app.use(json())

app.use("/users", userRoute)
app.use("/journal", journalRoute)
app.use("/category", categoryRoute)
app.listen(4000,()=>{
    console.log("Journal backend is up and running")
})