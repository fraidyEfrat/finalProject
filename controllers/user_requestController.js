const User_RequestDal=require("../dal/user_requestDal");
const User_Request = require("../models/user_request");
const sendEmail=require('../email')

// @desc Get all articls
// @route GET /aricle
// @access Private

class User_RequestController{

getAllUser_Requests = async (req, res) => {
    console.log("yudtgvdfui")
    const user_requests = await User_RequestDal.getAllUser_RequestsDal();
    console.log(user_requests)
    // If no notes
    if (!user_requests?.length) {
        return res.status(400).json({ message: 'No user_requests found' })
    }

    return res.json(user_requests);

}

addNewUser_Request = async (req, res) => {
    const { subject, request, respond, date, status, iduser } = req.body
    console.log(req.body)

    sendEmailToUser(subject, request, respond, date, status, iduser);
    console.log(subject)
    const user_request = await User_RequestDal.addNewUser_RequestDal({ subject, request, respond, date, status, iduser})
    if (user_request) { // Created
        return res.status(201).json({ message: 'New user_request created' })
    } else {
        return res.status(400).json({
            message: 'Invalid user_request data received'
        })
    }

}

updateUser_RequestById = async (req, res) => {
    const { iduser_request, subject, request, respond, date, status, iduser} = req.body
    // Confirm data
    if (!iduser_request) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const user_request = await User_RequestDal.updateUser_RequestByIdDal({ subject, request, respond, date, status, iduser }, iduser_request  )
    if (!user_request) {
        return res.status(400).json({ message: 'user_request not found' })
    }
    res.json(user_request)
}


deleteUser_RequestById = async (req, res) => {
    const { iduser_request } = req.body
    // Confirm data
    if (!iduser_request) {
        return res.status(400).json({ message: 'article ID required' })
    }
    await User_RequestDal.deleteUser_RequestByIdDal(iduser_request);
    return res.json(`user_request with ID ${iduser_request} deleted`)
}

}

///function
var sendEmailToUser=async(iduser_request, subject, request, respond, date, status, iduser)=>{
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",UsersEmail)
    //var initiatorsEmails=initiatorsArr.map(async(initiator)=> {return await initiatorDal.getInitiatorEmailById(initiator)})
    var UsersEmail = await User_RequestDal.getUsersEmailByIdDal(iduser)///////dal-user
    
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",UsersEmail)
   
    sendEmail(UsersEmail,iduser_request, subject, request, respond, date, status, iduser);

}

 const user_requestController=new User_RequestController();
 module.exports= user_requestController;