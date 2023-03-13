const db = require('../models/index')
const User = db.user

// @desc Get all articls
// @route GET /aricle
// @access Private

class UserDataAccessor {
getAllusersDal = async () => {
    const res = await User.findAll({});
    return res;

}
addNewUserDal=async(req,res)=>{
    res=await User.create(req);
    return res; 
}
findUserByEmailAndPasswordDal=async(req,res)=>{
    res=await User.findOne({where:{email:email} && {password:password}}); 
    return res;
}

}
const userDataAccessor=new UserDataAccessor()
module.exports = userDataAccessor;
