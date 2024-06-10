import { configDotenv } from "dotenv";

import connectDB from "./db/index.js";

configDotenv({
    path: './env'
})

connectDB();






/*
import express from "express"
const app = express
;( async () => {
    try {
        mongoose.connect(`${process.env
        .MONGODB_URI}/${DB_Name}`)
        app.on("error", (error) => {
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: $ 
                {proces.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()
    */