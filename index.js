const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) =>
  res.send({
    message: "Hello World Baucha",
  })
);

app.listen(PORT, () => console.log(`Servet listening at PORT ${PORT}`));
