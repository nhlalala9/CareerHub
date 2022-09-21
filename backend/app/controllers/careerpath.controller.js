const db = require("../configs/db.config");

exports.createcareerpath = (req, res) => {
   
    const {name, image, isoutdoor,careercategoryid} = req.body
   try{
        db.query(
            "INSERT INTO careerpath(name,image,isoutdoor,careercategoryid) VALUES($1,$2,$3,$4)",
            [name, image, isoutdoor,careercategoryid],
            (err) => {
                if (err) {
                   res.status(400).json({error: err});
                }else{
                res.status(200).json({success: "SUCCESSFULLY added careerpath"})
                }
            }
        );

    } catch (error){
        res.status(500).json({error: "database error"})
    }
};

exports.getcareerpath = (req, res) => {
    const careercategoryId = req.params.id;

    db.query("SELECT * FROM careerpath WHERE careercategoryid  =  $1 ORDER BY careercategoryid DESC", 
    [careercategoryId],(err, results)=>{
        if (err){
            res.status(400).json({error: "Could not retrieve careerpaths"})
        }
        res.status(200).json(results.rows)
    })
}

exports.getallcareerpath = (req, res) => {

    db.query("SELECT * FROM careerpath",(err, results)=>{
        if (err){
            res.status(400).json({error: "Could not retrieve careerpaths"})
        }
        res.status(200).json(results.rows)
    })
}