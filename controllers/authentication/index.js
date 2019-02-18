const db = require("../../models")
exports.signup = function(req, res) {
    const {email, password} = req.body;
    db.User.findOne({email, password},function(err, response){
        if(response){
            res.status(302).json({error:{username:{exists:true,message:"Username already exists"}}})
            return true;
        }
    })
}
exports.login = function(req, res) {
    const {email, password} = req.body;
    db.User.findOne({email, password},function(err, response){
        response ? res.json(response) : res.status(404).json({error:{username:{exists:false,message:"Username does not exist"}}})
    })
}
exports.logout = function(req, res) {
    console.log("HIT 3");
    res.json({success:true})
}