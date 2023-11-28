import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import apiRoute from './routes/index.js'
import mongoose from "mongoose";
import morgan from "morgan";

dotenv.config();

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(
  `${process.env.MONGO_URI}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const server = http.createServer(app);

app.use(cors());
app.use(morgan('short'));
app.use(express.json())
app.use(express.urlencoded())
app.use('/api', apiRoute)

server.listen(process.env.PORT);
console.log("Server started on port", process.env.PORT);
