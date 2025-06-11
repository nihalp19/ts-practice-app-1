import express from "express"
import { Request,Response } from "express"
import { connectDB } from "./connectDB"

const app = express()
const PORT = 5000


app.use(express.json())

app.all("/",(req : Request, res : Response) => {
    res.send("BACKEND IS RUNNING")
})


app.listen(PORT,() => {
    connectDB()
    console.log(`SERVER IS STARTED THAT PORT NO ${PORT}`)
})


