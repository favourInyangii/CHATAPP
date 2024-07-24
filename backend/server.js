import dotenv from "dotenv";
import express from "express";

import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config(); 

app.use (express.json());//to parse the incoming requests with JSON payloads(from req.body)

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

//app.get("/", (req,res) => {
   // res.send("last one i will be doing ");
//})



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`)
});