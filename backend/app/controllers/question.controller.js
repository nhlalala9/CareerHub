const db = require("../configs/db.config");

exports.createQuestions = (req, res) => {
    const { question, answer, image, categoryid, careerpathid, type } = req.body;

    try {
        db.query("INSERT INTO question (question,answer,image,categoryId,careerpathId, type) VALUES($1,$2,$3,$4,$5,$6)",
            [question, JSON.stringify(answer), image, categoryid, careerpathid, parseInt(type)],
            (err) => {
                if (err) {
                    return res.status(400).json({ error: err });
                }
                return res.status(201).json({ success: "successfully added" });
            });
    } catch (error) {
        res.status(500).json({ error: "sorry,we are still fixing technical issues" })
    }
};