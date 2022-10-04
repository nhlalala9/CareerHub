//the crud function of requirements

const db = require("../configs/db.config");

exports.createRequirements = (req, res) => {
  const { requirements, careerpathid } = req.body;

  try {
    db.query(
      "INSERT INTO requirements (requirements,careerpathid) VALUES($1,$2)",
      [requirements,parseInt(careerpathid)],
      (err) => {
        if (err) {
          return res
            .status(400)
            .json({ error: err });
        }
        return res.status(201).json({ success: "successful" });
      }
    );
  } catch (error) {
    res
      .status(500)
      .json({ error: "sorry,we are still fixing technical issues" });
  }
};

exports.getOneRequirement = (req, res) => {
  const careerpathId = req.params.id;
  try {
    db.query(
      "SELECT * FROM requirements WHERE careerpathid = $1",
      [careerpathId],
      (err, results) => {
        if (err) {
          res
            .status(400)
            .json({ error: "sorry,we are still fixing technical issues" });
        }
        res.status(200).json(results.rows);
      }
    );
  } catch (error) {
    res
      .status(500)
      .json({ error: "sorry,we are still fixing technical issues" });
  }
};
