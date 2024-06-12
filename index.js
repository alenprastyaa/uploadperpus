import express from "express";
import db from "./config/Database.js";
import PetugasRoute from "./routes/RoutePetugas.js";
import PeminjamanRoute from "./routes/RoutePeminjaman.js";
import RouteAnggota from "./routes/RouteAnggota.js";
import RoutePengembalian from "./routes/RoutePengembalian.js";
import RoutePeminjamanDetail from "./routes/RoutePeminjamanDetail.js";
import RoutePengembalianDetail from "./routes/RoutePengembalianDetail.js";
import RouteRak from "./routes/RouteRak.js";
import RoutePenerbit from "./routes/RouterPenerbit.js";
import RoutePengarang from "./routes/RoutePengarang.js";
import RouteBuku from "./routes/RouteBuku.js";

const app = express();
// const sessionStore = SequelizeStore(session.Store);

const PORT = "5000";

db.sync();

app.use(express.json());
app.use(PetugasRoute);
app.use(PeminjamanRoute);
app.use(RouteAnggota);
app.use(RoutePengembalian);
app.use(RoutePengembalianDetail);
app.use(RoutePeminjamanDetail);
app.use(RouteRak);
app.use(RoutePenerbit);
app.use(RoutePengarang);
app.use(RouteBuku);
app.listen(PORT, () => {
  console.log(`Success`);
});
