import express from "express"
import "dotenv/config"
import cors from "cors";
import connectDB from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebHooks from "./controllers/clerkWebHooks.js";




const app = express()
app.use(cors()) //enable cross-origin resource sharing

// middleware
app.use(express.json())
app.use(clerkMiddleware)

//Api to listen clerk webhooks
app.use("/api/clerk", clerkWebHooks)

app.get('/',(req, res)=> res.send("Api is working"))


connectDB().catch(console.error)

export default app;