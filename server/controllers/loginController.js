const LoginDal=require("../dal/loginDal");
const Login = require("../models/login");

// @desc Get all articls
// @route GET /aricle
// @access Private

class LoginController{

getAllLogins = async (req, res) => {
    const logins = await LoginDal.getAllLoginsDal();
    console.log(logins)
    if (!logins?.length) {
        return res.status(400).json({ message: 'No logins found' })
    }

    return res.json(logins);

}

addNewLogin = async (req, res) => {
    const { iduser, password,role,email } = req.body
    if (!iduser && !password && !role ) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
   
    const login = await LoginDal.addNewLoginDal({ iduser, password,role,email })
    if (login) { // Created
        return res.status(201).json({ message: 'New login created' })
    } else {
        return res.status(400).json({
            message: 'Invalid login data received'
        })
    }

}



deleteLoginById = async (req, res) => {
    const  idlogin  = req.params.idlogin
    console.log(idlogin)
    // Confirm data
    if (!idlogin) {
        return res.status(400).json({ message: 'login ID required' })
    }
    await LoginDal.deleteLoginByIdDal(idlogin);
    res.json(`login with ID ${idlogin} deleted`)
}



}
const loginController=new LoginController();
module.exports = loginController;
