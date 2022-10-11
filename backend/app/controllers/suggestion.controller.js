const db = require("../configs/db.config");


exports.getsuggested = (req, res) => {
    const careerpathId = req.params.id;
    try {
      db.query(
        "SELECT * FROM careerpath WHERE id = $1",
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