const db = require ("../configs/db.config")

exports.createCategory = (req, res) => {
    const {name, image} = req.body

    try {
        db.query(
          "INSERT INTO careercategory (name, image) VALUES($1,$2)",
          [name, image],
          (err) => {
            if (err) {
              res.status(400).json({ error: "Sorry career category is not added." });
            } 
              res.status(201).json({ success: "The career category has been added." }); 
          }
        );
        } catch (error) {
        res.status(500).json({ error: "database error" });
      }
    
}

exports.getCategory = (req, res) =>{
    try {
        db.query("SELECT * FROM careercategory", (err, results) => {
            if (err) {
              res.status(400).json({ error: "Sorry it's taking });
            }
            res.status(200).json(results.rows);
          });
    } catch (error) {
        res.status(500).json({ error: "Successful" });
    }
}