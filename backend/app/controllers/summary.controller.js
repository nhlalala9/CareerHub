//connecting database 
const db = require("../configs/db.config");

//backend for create summary
exports.createSummary = (req, res) => {
  const {description,image,careerpathId} = req.body;
  try {
    db.query(
      "INSERT INTO summary (description,image,careerpathId) VALUES($1,$2,s$)",
      [description,image,careerpathId ],
      (err) => {
        if (err) {
          res.status(400).json({ error: "couldnt add" });
        } 
          res.status(201).json({ success: "successfull added" });
        
      }
    );
  } catch (error) {
    res.status(500).json({ error: "database error" });
  }
};

//getting all summary  
exports.getAllSummary = (req, res) =>{
    
    const careerpathId = req.params.id;

    db.query('SELECT * FROM summary WHERE careerpathId = $1 ORDER BY careerpathId DESC',[careerpathId],(err, results)=>{
        if(err){
            res.status(400).json({error: 'Sorry we are facing technical error'});
        }
        res.status(200).json(results.rows)
    })
}



