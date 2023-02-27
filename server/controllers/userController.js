const UserDal=require("../dal/userDal");
const User = require("../models/user");

// @desc Get all articls
// @route GET /aricle
// @access Private

class UserController{
getAllusers = async (req, res) => {
    const users = await UserDal.getAllusersDal();
    console.log(users);

    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' });
    }
    return res.json(users);

}
}


const userController=new UserController();
module.exports= userController;