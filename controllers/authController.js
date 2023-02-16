const db = require('../models/index')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')
const Login = db.login



const login = async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const foundLogin = await Login.findOne({where:{email:email}})
//|| !foundLogin.active
    if (!foundLogin ) {
        return res.status(401).json({ message: 'Unauthorized111' })
    }

    const match = await bcrypt.compare(password, foundLogin.password)

    if (!match) return res.status(401).json({ message: 'Unauthorized222' })
    //res.send("Logged In")

    //ניצור אובייקט המכיל את הפרטים ללא הסיסמא
    //const loginInfo = {password, ...foundLogin}
    const loginInfo= {idlogin:foundLogin.idlogin, iduser:foundLogin.iduser, role:foundLogin.role,email:foundLogin.email }
    console.log(loginInfo)
     //Create the token
    const accessToken = jwt.sign(loginInfo,process.env.ACCESS_TOKEN_SECRET)
    console.log(accessToken)
    //res.setHeader('Authorization', `Bearer ${accessToken}`)

    res.json({accessToken:accessToken})

}


const register = async (req, res) => {
    const {idlogin, iduser, password, role,email} = req.body

    if (!password || !role || !email) {// Confirm data
        return res.status(400).json({ message: 'All fields are required' })
    }

    const duplicate = await Login.findOne({where:{email:email}})

    if(duplicate){
        return res.status(409).json({message:"Duplicate email"})
    }

    //Hash password
    const hashedPwd = await bcrypt.hash(password, 10)

    const loginObject = {idlogin,iduser,role,email,password:hashedPwd}
    const mylogin = await Login.create(loginObject)
    if (mylogin) { // Created 
        return res.status(201).json({ message: `New login ${mylogin.iduser} created` })
    } else {
        return res.status(400).json({ message: 'Invalid user data received' })
    } 

}

module.exports = {login, register}
