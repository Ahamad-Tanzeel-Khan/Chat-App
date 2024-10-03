import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToDatabase from "./db/connectToDatabase.js";
import { app, server } from "./socket/socket.js";


dotenv.config();
const PORT = process.env.PORT || 5000

// app.get('/', (req, res) => {
//     res.send("Hello World!")
// });

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
    connectToDatabase();
    console.log(`Server started at port ${PORT}`)
})