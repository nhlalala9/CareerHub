// connecting database 
const db = require("../configs/db.config");

//backend for create summary
exports.createSalary = (req, res) => {
  const { image, careerpathid } = req.body;
  try {
    db.query(
      "INSERT INTO salaryimage (image,careerpathid) VALUES($1,$2)",
      [image, parseInt(careerpathid)],
      (err) => {
        if (err) {
          res.status(400).json({ error: err });
        }
        res.status(201).json({ success: "successfull added" });

      }
    );
  } catch (error) {
    res.status(500).json({ error: "database error" });
  }
};

//getting all summary  
exports.getAllSalary = (req, res) => {

  const careerpathId = req.params.id;

  db.query('SELECT * FROM salaryimage WHERE careerpathId = $1 ORDER BY careerpathId DESC', [careerpathId], (err, results) => {
    if (err) {
      res.status(400).json({ error: 'Sorry we are facing technical error' });
    }
    res.status(200).json(results.rows)
  })
}