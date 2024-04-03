import express from "express"
import * as dotevnv from "dotenv"

dotevnv.config()

if (!process.env.PORT) {
    console.log(`No port value specified...`)
}

const PORT = parseInt(process.env.PORT as string, 10)

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})