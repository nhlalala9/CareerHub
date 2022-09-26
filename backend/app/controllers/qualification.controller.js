const db = require("../configs/db.config");

exports.createQualification = (req, res) => {
  const { qualification, description,requirementsid } = req.body;

  try {
    db.query(
      "INSERT INTO qualifications (qualification, description, requirementsid) VALUES($1,$2,$3)",
      [qualification, description, parseInt(requirementsid)],
      (err) => {
        if (err) {
          res.status(400).json({ error: "Sorry we facing Technical issues" });
        }
        res.status(201).json({ success: "Successful" });
      }
    );
  } catch (error) {
    res.status(500).json({ error: "database error" });
  }
};
exports.getQualifications = (req, res) => {
  const requirementsId = req.params.id;
  
  try {
    db.query(
      "SELECT * FROM qualifications WHERE id = $1",
      [requirementsId],
      (err, results) => {
        if (err) {
          res.status(400).json({ error: "Sorry we facing Technical issues" });
        }
        res.status(200).josn(results.row);
      }
    );
  } catch (error) {
    return res.status(500).json({ error: "database error" });
  }
};
