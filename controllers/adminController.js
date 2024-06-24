const Admin = require('../modals/adminModal');

exports.getAdmin = async (req, res) => {
    
};

exports.checkAdmin = async(req,res)=>{
    const{user_id,password}=req.body

    try{
        const check= await Admin.findOne({user_id:user_id, password:password});

        if(check){
            res.status(200).json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.status(400).json("fail")
    }
}
