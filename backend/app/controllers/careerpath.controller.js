const db = require("../configs/db.config");

exports.createcareerpath = (req, res) => {
   
    const {name, image} = req.body
   try{
        db.query(
            "INSERT INTO careerpath(name,image) VALUE($1,$2)",
            [name, image],
            (err) => {
                if (err) {
                    res.status(400).json({error: "ERROR adding careerpath"});
                }
                res.status(201).json({success: "SUCCESSFULLY added careerpath"})
            }
        );

    } catch (error){
        res.status(500).json({error: "database error"})
    }
};

exports.getcareerpath = (req, res) => {
    const careercategoryId = re.params.id;

    db.query("SELECT * FROM careerpath WHERE careercategoryId  =  $1 ORDER BY careercategoryId DESC", 
    [careercategoryId],(err, results)=>{
        if (err){
            res.status(400).json({error: "Could not retrieve careerpaths"})
        }
        res.status(200).json(results.rows)
    })
}