//the crud function of requirements

const db=require("../configs/db.config")

exports.createRequirements = (req, res) => {
  const {requirements,careerpathId } = req.body;


  try {
    db.query(
      "INSERT INTO requirements (requirements,careerpathId) VALUES($1,$2)",
      [requirements,careerpathId],
      (err) => {
        if (err) {
          res.status(400).json({ error: "sorry,we are sytill fixing technical issues" });
        } 
          res.status(201).json({ success: "successfull added" });
        
      }
    );
  } catch (error) {
    res.status(500).json({ error: "database error" });
  }
};





const db = require("../configs/db.config");

exports.getOneRequirement= (req, res) =>{
    // const {user_id} = req.body;
    const id = req.params.id;

    db.query('SELECT * FROM notes WHERE id = $1',[id],(err, results)=>{
        if(err){
            res.status(400).json({error: 'failed to delete post'});
        }
        res.status(200).json(results.rows)
    })
}
