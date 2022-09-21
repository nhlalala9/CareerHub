const db = require("../configs/db.config");

//insterting the category
exports.createCategory = (req, res) => {
  const { name, image } = req.body;

  try {
    db.query("INSERT INTO category VALUES ($1, $2)", [name, image], (error) => {
      if (error) {
        res.status(400).json({ error: "couldnt add" });
      }
      res.status(201).json({ success: "successfull added" });
    });
  } catch (error) {
    res.status(500).json({ error: "database error" });
  }
};

exports.getCategory = (req, res)=>{
  try {
    db.query("SELECT * FROM category", (error, results) => {
      if (error) {
        res.status(400).json({ error: "Sorry we are facing technical error." });
      }
      res.status(201).json(results.rows);
    });
  } catch (error) {
    res.status(500).json({ error: "Sorry we are facing technical error." });
  }
}