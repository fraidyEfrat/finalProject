const db = require('../models/index')
const Login = db.login

// @desc Get all articls
// @route GET /aricle
// @access Private

class LoginDataAccessor{


getAllLoginsDal = async (req, res) => {
    res = await Login.findAll();
    return res;
}

addNewLoginDal = async (req, res) => {
    res=await Login.create(req);
    return res; 
    }

deleteLoginByIdDal = async (idlogin) => {
    await Login.destroy({
        where: {
            idlogin: idlogin
        }
    });
  
}
}

const loginDataAccessor= new LoginDataAccessor();
module.exports = loginDataAccessor