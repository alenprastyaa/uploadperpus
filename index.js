import express from "express";
import db from "./config/Database.js";
import PetugasRoute from "./routes/RoutePetugas.js";
// import { SequelizeStore } from "connect-session-sequelize";
import PeminjamanRoute from "./routes/RoutePeminjaman.js";
import RouteAnggota from "./routes/RouteAnggota.js";
import RoutePengembalian from "./routes/RoutePengembalian.js";

import RoutePengembalianDetail from "./routes/RoutePengembalianDetail.js";


const app = express();
// const sessionStore = SequelizeStore(session.Store);

const PORT = "5000";

// db.sync();

app.use(express.json());
app.use(PetugasRoute);
app.use(PeminjamanRoute);
app.use(RouteAnggota);
app.use(RoutePengembalian);
app.use(RoutePengembalianDetail);
app.listen(PORT, () => {
  console.log(`Success`);
});
