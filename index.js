const express = require("express");
const cors = require("cors");

const dcrRoutes = require("./Routes/DcrRoutes.js");
const MrRoutes = require("./Routes/MrRoutes.js");
const docRoutes = require("./Routes/DocRoutes.js");
const areaRoutes = require("./Routes/AreaRoutes");
const agendaRoutes = require("./Routes/AgendaRoutes.js");
//const path = require("path");

const connectToMongo = require("./util/database");

connectToMongo();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/savedcr", dcrRoutes);

app.use("/MRroutes", MrRoutes);
app.use("/DocRoutes", docRoutes);
app.use("/areaRoutes", areaRoutes);
app.use("/agendaRoutes",agendaRoutes);

app.listen(port, () => {
  console.log(`App Running on ${port}`);
});
