import { Sequelize } from "sequelize";

const db = new Sequelize('perpustakaan_uppersteel', 'perpustakaan_uppersteel', '63d56be978e82e6c1c4546ac554153aadea71692', {
  host: '6yh.h.filess.io',
  port: 3307,
  dialect: 'mysql'
});



export default db