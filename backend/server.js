const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("../backend/data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const {notFound,errorHandler}= require('./middlewares/errorMiddleware')
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/user", userRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(`${PORT}`, console.log(`Server started on port ${PORT}`));
