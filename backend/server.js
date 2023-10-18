import express from "express";
import dotenv from "dotenv";
import router from "./routes/Routes.js";
import cors from "cors";
import connectDB from "./routes/config/db.js";

dotenv.config();

connectDB();
const port = process.env.PORT || 3003;

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use('/uploads', express.static('uploads'));
app.use(express.json());

app.use("/", router);
app.get("/", (req, res) => res.send("server is ready"));

app.listen(port, () => console.log(`Server started on port ${port}`));
