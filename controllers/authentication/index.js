const db = require("../../models")
exports.signup = function(req, res) {
    const {email, password} = req.body;
    db.User.findOne({email, password},function(err, response){
        if(response){
            res.status(302).send("User Already Exists")
            return true;
        }
        
        
    })
}
exports.login = function(req, res) {
    const {email, password} = req.body;
    db.User.findOne({email, password},function(err, response){
        response ? res.json(response) : res.status(404).send("User Not Found. Please Check Username/Password and Try Again")
    })
}
exports.logout = function(req, res) {
    console.log("HIT 3");
    res.json({success:true})
}