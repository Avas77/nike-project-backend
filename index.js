const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const productsRouter = require("./routes/products.routes");
const userRouter = require("./routes/user.routes");
const connectDB = require("./mongodb/connect");

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/user", userRouter);

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => console.log(`Servet listening at PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();

module.exports = app;
