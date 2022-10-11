const db = require("../configs/db.config");

//insterting the category
exports.createCategory = (req, res) => {
  const { name, image } = req.body;

  try {
    db.query(
      "INSERT INTO category(name, image) VALUES($1, $2)",
      [name, image],
      (err) => {
        if (err) {
          return res.status(400).json({ error: err });
        }
        res.status(201).json({ success: "successfull added" });
      }
    );
  } catch (error) {
    res.status(500).json({ error: "database error" });
  }
};

exports.getCategory = (req, res) => {
  try {
    db.query("SELECT * FROM category", (error, results) => {
      if (error) {
        return res
          .status(400)
          .json({ error: "Sorry we are facing technical error." });
      }
      return res.status(201).json(results.rows);
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Sorry we are facing technical error." });
  }
};
