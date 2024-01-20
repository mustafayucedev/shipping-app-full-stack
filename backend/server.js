import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nakliye"
})

app.get("/", (req,res) => {
    const sql = "SELECT * FROM Company";
    db.query(sql, (err,result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post("/company", (req,res) => {
    const sql = "INSERT INTO Company (`name`,`email`,`password`,`phone`,`since`,`facebook`,`instagram`,`twitter`,`linkedin`,`youtube`) VALUES (?,?,?,?,?,?,?,?,?,?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.phone,
        req.body.since,
        req.body.facebook,
        req.body.instagram,
        req.body.twitter,
        req.body.linkedin,
        req.body.youtube,
    ];
    db.query(sql, values, (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.get("/post", (req,res) => {
    const sql = "SELECT * FROM Post";
    db.query(sql, (err,result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post("/post-create", (req, res) => {
    const { title, fromWhere, toWhere, carType, weight, paymentMethod, price, companyId } = req.body;
  
    const checkCompanySql = "SELECT id FROM Company WHERE id = ?";
    db.query(checkCompanySql, [companyId], (checkErr, checkResult) => {
      if (checkErr) return res.json(checkErr);
  
      if (checkResult.length === 0) {
        return res.json({ error: "Belirtilen companyId Company tablosunda bulunamadı." });
      }
  
      const postSql = "INSERT INTO Post (`title`, `fromWhere`, `toWhere`, `carType`, `weight`, `paymentMethod`, `price`, `companyId`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      const postValues = [title, fromWhere, toWhere, carType, weight, paymentMethod, price, companyId];
  
      db.query(postSql, postValues, (postErr, postResult) => {
        if (postErr) return res.json(postErr);
        return res.json({ success: "Post başarıyla oluşturuldu." });
      });
    });
  });
 
app.get("/city", (req,res) => {
    const sql = "SELECT * FROM City";
    db.query(sql, (err,result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})




app.listen(8081, () => {
    console.log("Listening..")
})

