const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "data.db");

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) console.error(err.message);
  console.log("connected to database");
});

db.run(`CREATE TABLE if not exists users_card (
    card_id INTEGER  PRIMARY KEY,
    name VARCHAR(255),
    card_number INT,
    trans_limit INT,
    UNIQUE(card_number)
    
    )`);

exports.insert = async (name, card_number, trans_limit) => {


  let sql = `INSERT INTO users_card (name,card_number,trans_limit) VALUES (?,?,?)`;
  db.run(sql, [name, card_number, trans_limit], (error) => {
    if (error) return console.log(error);
  });
  return true;
};


exports.fetch = async () => {
  return new Promise((resolve, reject) => {
    sql = `SELECT * FROM users_card`;

    db.all(sql, [], (error, rows) => {
      if (error) return console.log(error);
      resolve(rows);
    });
  });
};
