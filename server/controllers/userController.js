const UserDal=require("../dal/userDal");
const User = require("../models/user");
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken')

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
addNewUser = async (req, res) => {
    const {firstName,lastName,email, city,address,id,phone,watsup } = req.body
    if (!id || !email ) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
   
    const user = await UserDal.addNewUserDal({firstName,lastName,email,city,address,id,phone,watsup})
    if (user) { // Created
        return res.status(201).json({ message: 'New user created' })
    } else {
        return res.status(400).json({
            message: 'Invalid user data received'
        })
    }


}
 login = async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const foundUser = await User.findOne({where:{email:email}})
    console.log("in login controller")
    console.log(foundUser);

    if (foundUser==null) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    //const match = await bcrypt.compare(password, foundUser.password)
    var match=true;
    if(foundUser.password!=password){
        match=false;
    }

    if (!match) return res.status(401).json({ message: 'Unauthorized' })

    //ניצור אובייקט המכיל את הפרטים ללא הסיסמא
    //const userInfo = {password, ...foundUser}
    const userInfo= {firstName:foundUser.firstName,lastName:foundUser.lastName,email:foundUser.email,city:foundUser.city,address:foundUser.address, id:foundUser.id,phone:foundUser.phone,watsup:foundUser.watsup , role:foundUser.role}

    //Create the token
    const accessToken = jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET)
    //res.setHeader('Authorization', `Bearer ${accessToken}`)

    res.json({accessToken:accessToken})

}
}


const userController=new UserController();
module.exports= userController;