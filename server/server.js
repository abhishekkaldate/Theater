import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app = express();
const port = 3000;

await connectDB()

//middleware
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

//app route
app.get('/', (req, res)=> res.send('Server is On!'))
app.use('/api/inngest', serve({ client: inngest, functions }))


app.listen(port, ()=> console.log(`server listening at http://localhost:${port}`));


//mongodb+srv://abhishekkaldate365:abhishekkaldate365@cluster0.kdzf4ns.mongodb.net/?appName=Cluster0