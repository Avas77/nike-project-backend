const express = require("express");
const productsRouter = require("./routes/products.routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/products", productsRouter);

app.listen(PORT, () => console.log(`Servet listening at PORT ${PORT}`));
