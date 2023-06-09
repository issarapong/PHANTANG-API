const { validateRegister, validateLogin } = require('../validators/auth-validator')
const createError = require('../utils/create-error')
const userService = require('../services/user-service')
const bcryptService = require('../services/bcrypt-service')
const tokenService = require('../services/token-service')


exports.register = async (req,res, next) => {
       try {
        //สิ่งที่ต้องเตรียมเบื้องต้นเพื่อให้ Register Module ทำงานได้สำเร็จ  ไปจนถึง Database
        // 1. src/services/user-service.js <- src/repositories/user-repository.js <- src/models/user.js

   const  value = validateRegister(req.body);
   const isUserExist = await userService.checkEmailOrMobileExist(
    value.email || value.mobile
   
    );
    if (!isUserExist) {
        createError('email address or mobile number already in use', 400)
    }
    console.log(value)
    

    value.password = await bcryptService.hash(value.password)
    
     const user = await userService.createUser(value);


    const accessToken = tokenService.sign({id: user.id}) 
    res.status(200).json({ accessToken }) 

       } catch(err) {
        next(err);
       }
} 


exports.login = async (req,res, next) => {
    try {
        const value = validateLogin(req.body)
        const user = await userService.getUserByEmailOrMobile(value.emailOrMobile)
        if(!user) {
         createError('invalid credential', 400)
        }
        const isCorrect = await bcryptService.compare(
         value.password,
         user.password
        );
        
        if (!isCorrect) {
         createError('invalid credential', 400);
        } 
        const accessToken = tokenService.sign({id: user.id}) 
        res.status(200).json({ accessToken }) 

    } catch(err) {
     next(err);
    }
} 



exports.getme = (req, res, next) => {
    res.status(200).json({ user: req.user });
  };


// exports.register คือ Module ที่ส่งให้ auth-route เรียกใช้เพื่อนำผลลัพธิ์ กลับไปให้ client ภายใน Module จะมีการประมวลผลต่างๆ ก่อนส่ง


// Module เปล่า ก่อนไส่ loggic

// exports.register = async (req,res, next) => {
//     try {
//      console.log("This is message from Resgister Module")

//        res.status(200).json({message: 'This is message from Resgister Module' })

//     } catch(err) {
//      next(err);
//     }
// } 
