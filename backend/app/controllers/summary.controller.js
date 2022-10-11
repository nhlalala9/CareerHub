//connecting database 
const db = require("../configs/db.config");

//backend for create summary
exports.createSummary = (req, res) => {
    const { description, image, careerpathid } = req.body;
    try {
        db.query(
            "INSERT INTO summary (description,image,careerpathid) VALUES($1,$2,$3)",
            [description, image, parseInt(careerpathid)],
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
exports.getAllSummary = (req, res) => {

    const careerpathid = req.params.id;
try{
    db.query('SELECT * FROM summary WHERE careerpathId = $1 ORDER BY careerpathId DESC', [careerpathid], (err, results) => {
        if (err) {
            return res.status(400).json({ error: 'Sorry we are facing technical error' });
        }
        return res.status(200).json(results.rows)
    })
}catch(error){
    return res.status(500).json({ error: "sorry,we are still fixing technical issues" });
}
}



