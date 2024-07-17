import dotenv from "dotenv";
import express from "express";

import connectToMongoDB from "./Db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();    
const PORT = process.env.PORT || 5000;

app.get("/", (req,res) => {
    res.send("last one i will be doing ");
})


app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`)
});